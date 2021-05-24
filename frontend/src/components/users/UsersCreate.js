import React from 'react';
import { 
  Create,
  SimpleForm, 
  TextInput, 
  DateInput, 
  PasswordInput,
} from 'react-admin';
const UsersCreate = (props) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="username" />
        <PasswordInput source="password"/>
        <TextInput source="name" />
        <TextInput source="roles" label = "Roles"/>       
        <DateInput source="created_at"/>  
      </SimpleForm>
    </Create>
  );
};

export default UsersCreate;
