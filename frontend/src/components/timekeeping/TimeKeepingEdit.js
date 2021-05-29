import React from 'react';
import { Edit, SimpleForm, TextInput, DateInput, NumberInput} from 'react-admin';
const TimeKeepingEdit = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="fullname" />
        <TextInput source="position" />
        <NumberInput source="workdays" />
        <TextInput source="unpaid_leave" />
        <NumberInput source="holidays" />        
        <NumberInput source="checkin"/>
        <NumberInput source="overtime"/>
        <TextInput source="notes"/>                 
        <DateInput source="created_at"/>  
      </SimpleForm>
    </Edit>
  );
};

export default TimeKeepingEdit;
