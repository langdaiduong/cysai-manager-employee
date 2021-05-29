import React from 'react';
import { Create, SimpleForm, TextInput, DateInput, NumberInput  } from 'react-admin';
const TimeKeepingCreate = (props) => {
  return (
    <Create {...props}>
      <SimpleForm>
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
    </Create>
  );
};

export default TimeKeepingCreate;
