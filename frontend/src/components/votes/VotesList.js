import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DateField,
  Filter,
  SelectInput,
  ReferenceInput,
  TextInput,
  ShowButton,
  DeleteWithConfirmButton
} from 'react-admin';

const VotesFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="Name" source="fullname" reference="votes" allowEmpty>
            <SelectInput optionText="fullname" />
        </ReferenceInput>
    </Filter>
);
const VotesList = (props) => {
  return (
    <List {...props} filters={<VotesFilter/>}>
      <Datagrid>
        <TextField source="_id" label ="id"/>
        <TextField source="fullname"/>
        <TextField source="kpi"/>
        <TextField source="probationary_vote"/>
        <TextField source="promotion_vote"/>
        <TextField source="personal_development"/>        
        <TextField source="bonus"/>
        <TextField source="discipline"/> 
        <TextField source="employees_vote"/>                 
        <DateField source="created_at"/>           
        <EditButton label="Edit" basePath="/votes"/>
        <DeleteWithConfirmButton label="Delete" basePath="/votes"/>
        <ShowButton source="Show"  basePath="/votes"/>
      </Datagrid>
    </List>
  );
};

export default VotesList;
