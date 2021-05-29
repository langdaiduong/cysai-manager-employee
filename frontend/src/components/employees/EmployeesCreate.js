import React from 'react';
import { 
  Create,
  SimpleForm, 
  TextInput, 
  DateInput, 
  SelectInput
  } from 'react-admin';
const EmployeesCreate = (props) => {
  return (
    <Create {...props}>
      <SimpleForm >
        <TextInput source="name" />
        <DateInput source="date_of_birth"/>
        <SelectInput source="gender" choices={[
          { id: 'Nam', name: 'Nam' },
          { id: 'Nữ', name: 'Nữ' },
          { id: 'Giới tính thứ 3', name: 'Giới tính thứ 3' },
        ]} />
        <TextInput source="address" />
        <TextInput source="phone"/>
        <TextInput source="email" />
        <TextInput source="position" />
        <TextInput source="level" />         
        <DateInput source="date_of_joining"/>  
      </SimpleForm >
    </Create>
  );
};

export default EmployeesCreate;
