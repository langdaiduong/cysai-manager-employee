const jwtHelper = require("../helpers/jwt.helper");
const debug = console.log.bind(console);
const argon2 = require("argon2");
const Users = require("../models/users");
// Biến cục bộ trên server này sẽ lưu trữ tạm danh sách token
// Trong dự án thực tế, nên lưu chỗ khác, có thể lưu vào Redis hoặc DB
let tokenList = {};
// Thời gian sống của token
const accessTokenLife = process.env.ACCESS_TOKEN_LIFE || "1h";
// Mã secretKey này phải được bảo mật tuyệt đối, các bạn có thể lưu vào biến môi trường hoặc file
const accessTokenSecret =
  process.env.ACCESS_TOKEN_SECRET ||
  "access-token-secret-cong-ty-cysai-ma-secret-token-@@@@@";
// Thời gian sống của refreshToken
const refreshTokenLife = process.env.REFRESH_TOKEN_LIFE || "3650d";
// Mã secretKey này phải được bảo mật tuyệt đối, các bạn có thể lưu vào biến môi trường hoặc file
const refreshTokenSecret =
  process.env.REFRESH_TOKEN_SECRET ||
  "refresh-token-secret-cong-ty-cysai-ma-refresh-secret-token-@@@@@";
/**
 * controller login
 * @param {*} req
 * @param {*} res
 */
let login = async (req, res) => {
  try {
    const user = await Users.findOne({
      username: req.body.username,
    });
    console.log(user)
    if (user) {
      const match = await argon2.verify(user.password, req.body.password);
      console.log(match);
      if (match) {
        const userData = {
          username: user.username
        };
        const permissions = user.roles
        //Thực hiện tạo mã Token, [thời gian sống 1 giờ.]
        const accessToken = await jwtHelper.generateToken(
          userData,
          accessTokenSecret,
          accessTokenLife
        );

        //Thực hiện tạo mã Refresh Token, [thời gian sống 10 năm]
        const refreshToken = await jwtHelper.generateToken(
          userData,
          refreshTokenSecret,
          refreshTokenLife
        );
        // Lưu lại 2 mã access & Refresh token, với key chính là cái refreshToken để đảm bảo unique và không sợ hacker sửa đổi dữ liệu truyền lên.
        // lưu ý trong dự án thực tế, nên lưu chỗ khác, có thể lưu vào Redis hoặc DB
        tokenList[refreshToken] = { accessToken, refreshToken };
        return res.status(200).json({ accessToken, refreshToken, permissions });
      } else {
        res.send("khong dung mk");
      }
    } else {
      res.send("khong co user");
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};
const register = async (req, res) => {
  try {
    const hash = await argon2.hash(req.body.password);
    const user = await Users.create({
      name: req.body.name,
      username: req.body.username,
      password: hash,
      roles: req.body.roles,
    });
    res.send(user);
  } catch (error) {
    console.log(error);
  }
};
/**
 * controller refreshToken
 * @param {*} req
 * @param {*} res
 */
let refreshToken = async (req, res) => {
  // User gửi mã refresh token kèm theo trong body
  const refreshTokenFromClient = req.body.refreshToken;
  // debug("tokenList: ", tokenList);

  // Nếu như tồn tại refreshToken truyền lên và nó cũng nằm trong tokenList của chúng ta
  if (refreshTokenFromClient && tokenList[refreshTokenFromClient]) {
    try {
      // Verify kiểm tra tính hợp lệ của cái refreshToken và lấy dữ liệu giải mã decoded
      const decoded = await jwtHelper.verifyToken(
        refreshTokenFromClient,
        refreshTokenSecret
      );
      // Thông tin user lúc này các bạn có thể lấy thông qua biến decoded.data
      // có thể mở comment dòng debug bên dưới để xem là rõ nhé.
      // debug("decoded: ", decoded);
      const userData = decoded.data;
      debug(
        `Thực hiện tạo mã Token trong bước gọi refresh Token, [thời gian sống vẫn là 1 giờ.]`
      );
      const accessToken = await jwtHelper.generateToken(
        userData,
        accessTokenSecret,
        accessTokenLife
      );
      // gửi token mới về cho người dùng
      return res.status(200).json({ accessToken });
    } catch (error) {
      // Lưu ý trong dự án thực tế hãy bỏ dòng debug bên dưới, mình để đây để debug lỗi cho các bạn xem thôi
      res.status(403).json({
        message: "Invalid refresh token.",
      });
    }
  } else {
    // Không tìm thấy token trong request
    return res.status(403).send({
      message: "No token provided.",
    });
  }
};
module.exports = {
  login,
  refreshToken,
  register,
};
