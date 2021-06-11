import inMemoryJWT from "./inMemoryJWT";

const authProvider = {
  login: ({ username, password }) => {
    const request = new Request("http://localhost:3000/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: new Headers({ "Content-Type": "application/json" }),
      credentials: "include",
    });
    inMemoryJWT.setRefreshTokenEndpoint("http://localhost:3000/refresh-token");
    return fetch(request)
      .then((response) => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(({ accessToken, refreshToken }) => {
        return inMemoryJWT.setToken(accessToken, 5000);
      });
  },

  logout: () => {
    const request = new Request("http://localhost:3000/logout", {
      method: "GET",
      headers: new Headers({ "Content-Type": "application/json" }),
      credentials: "include",
    });
    inMemoryJWT.ereaseToken();

    return Promise.resolve();
  },

  checkAuth: () => {
    return inMemoryJWT.waitForTokenRefresh().then(() => {
      console.log("check auth");
      return inMemoryJWT.getToken() ? Promise.resolve() : Promise.reject();
    });
  },

  checkError: (error) => {
    const status = error.status;
    if (status === 401 || status === 403) {
      inMemoryJWT.ereaseToken();
      return Promise.reject();
    }
    return Promise.resolve();
  },

  getPermissions: () => {
    return inMemoryJWT.waitForTokenRefresh().then(() => {
      console.log(inMemoryJWT.getToken());
      return inMemoryJWT.getToken() ? Promise.resolve() : Promise.reject();
    });
  },
};

export default authProvider;
