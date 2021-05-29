import React from 'react';
import { Create, SimpleForm, TextInput, DateInput, NumberInput  } from 'react-admin';
const VotesCreate = (props) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="fullname" />
        <TextInput source="kpi" />
        <TextInput source="probationary_vote" />
        <TextInput source="promotion_vote" />
        <TextInput source="personal_development"/>        
        <TextInput source="bonus"/>
        <TextInput source="discipline"/>
        <TextInput source="employees_vote"/>                 
        <DateInput source="created_at"/>  
      </SimpleForm>
    </Create>
  );
};

export default VotesCreate;
