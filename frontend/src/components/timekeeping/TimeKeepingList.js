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
  TextInput
} from 'react-admin';

const TimeKeepingFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="Name" source="fullname" reference="timekeeping" allowEmpty>
            <SelectInput optionText="fullname" />
        </ReferenceInput>
    </Filter>
);
const TimeKeepingList = (props) => {
  return (
    <List {...props} filters={<TimeKeepingFilter/>}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="fullname" />
        <TextField source="position" />
        <NumberField source="workdays" />
        <TextField source="unpaid_leave" />
        <NumberField source="holidays" />        
        <NumberField source="checkin"/>
        <NumberField source="overtime"/>
        <TextField source="notes"/>                 
        <DateField source="created_at"/>      
        <EditButton label="Edit" basePath="/timekeeping" />
        <DeleteButton label="Delete" basePath="/timekeeping" />
      </Datagrid>
    </List>
  );
};

export default TimeKeepingList;
