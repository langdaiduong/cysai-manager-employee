import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  DateField,
  EmailField,
  Filter,
  SelectInput,
  ReferenceInput,
  TextInput
} from 'react-admin';

const PostFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="name" source="name" reference="employees" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);

const EmployeesList = (props) => {
  return (
    <List {...props} filters={<PostFilter/>}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <DateField source="date_of_birth"/>
        <TextField source="gender" />
        <TextField source="address" />
        <TextField source="phone"/>
        <EmailField source="email" />
        <TextField source="position" />
        <TextField source="level" />         
        <DateField source="date_of_joining"/>             
        <EditButton label="Edit" basePath="/employees" />
        <DeleteButton label="Delete" basePath="/employees" />
      </Datagrid>
    </List>
  );
};

export default EmployeesList;
