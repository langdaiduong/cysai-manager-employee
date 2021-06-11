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
        <TextField source="_id" label = "id"/>
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
        <DeleteWithConfirmButton label="Delete" basePath="/timekeeping"/>
        <ShowButton source="Show"/>
      </Datagrid>
    </List>
  );
};

export default TimeKeepingList;
