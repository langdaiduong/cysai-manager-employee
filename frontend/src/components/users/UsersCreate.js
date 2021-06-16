import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  DateInput,
  PasswordInput,
  SelectInput
} from "react-admin";
const UsersCreate = (props) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="username" />
        <PasswordInput source="password" />
        <TextInput source="name" />
        <SelectInput
          source="roles"
          choices={[
            { id: "employee", name: "employee" },
            { id: "admin", name: "admin" },
            { id: "manager", name: "manager" },
            { id: "leader", name: "leader" },
          ]}
        />
      </SimpleForm>
    </Create>
  );
};

export default UsersCreate;
