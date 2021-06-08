import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  DateInput,
  PasswordInput,
  SelectInput
} from "react-admin";

const UsersEdit = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="username" />
        <PasswordInput source="password" />
        <TextInput source="name" />
        <SelectInput
          source="roles"
          choices={[
            { id: "user", name: "user" },
            { id: "admin", name: "admin" },
            { id: "manager", name: "manager" },
            { id: "leader", name: "leader" },
          ]}
        />
        <DateInput source="created_at" />
      </SimpleForm>
    </Edit>
  );
};

export default UsersEdit;
