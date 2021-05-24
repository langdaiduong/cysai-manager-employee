import React from 'react';
import { 
  Edit, 
  SimpleForm, 
  TextInput, 
  DateInput, 
  PasswordInput
} from 'react-admin';

const UsersEdit = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="username" />
        <PasswordInput source="password"/>
        <TextInput source="name" />
        <TextInput source="roles" label = "Roles"/>     
        <DateInput source="created_at"/>  
      </SimpleForm>
    </Edit>
  );
};

export default UsersEdit;
