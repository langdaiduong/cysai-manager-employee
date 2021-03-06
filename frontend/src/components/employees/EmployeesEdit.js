import React from 'react';
import { Edit, SimpleForm, TextInput, DateInput, SelectInput, required} from 'react-admin';
const EmployeesEdit = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="name" />
        <DateInput source="date_of_birth"/>
        <SelectInput source="gender" choices={[
          { id: 'Nam', name: 'Nam' },
          { id: 'Nữ', name: 'Nữ' },
          { id: 'Giới tính thứ 3', name: 'Giới tính thứ 3' },
        ]} />
        <TextInput source="address" validate={required()}/>
        <TextInput source="phone" validate={required()}/>
        <TextInput source="email" validate={required()}/>
        <TextInput source="position" />
        <TextInput source="level" />         
        <DateInput source="date_of_joining"/>   
      </SimpleForm>
    </Edit>
  );
};

export default EmployeesEdit;
