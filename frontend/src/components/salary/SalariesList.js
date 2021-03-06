import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  DateField,
  NumberField,
  Filter,
  SelectInput,
  ReferenceInput,
  TextInput,
  DeleteWithConfirmButton,
  ShowButton
} from 'react-admin';

const SalariesFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="Name" source="fullname" reference="salaries" allowEmpty>
            <SelectInput optionText="fullname" />
        </ReferenceInput>
    </Filter>
);
const SalariesList = (props) => {
  return (
    <List {...props} filters={<SalariesFilter/>}>
      <Datagrid>
        <TextField source="_id" label = "id"/>
        <TextField source="fullname" />
        <TextField source="stk" />
        <TextField source="position" />
        <NumberField source="salary" />
        <TextField source="allowance" />        
        <TextField source="insurrance.BHYT" label = "BHYT"/>
        <TextField source="insurrance.BHXH" label = "BHXH"/>
        <TextField source="insurrance.BHTN" label = "BHTN"/> 
        <TextField source="tax_personal" />
        <NumberField source="salary_sum" />                  
        <DateField source="created_at"/>                       
        <EditButton label="Edit" basePath="/salaries" />
        <DeleteWithConfirmButton label="Delete" basePath="/salaries" />
        <ShowButton source="Show"/>
      </Datagrid>
    </List>
  );
};

export default SalariesList;
