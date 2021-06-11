import React from 'react';
import { Edit, SimpleForm, TextInput, DateInput, NumberInput} from 'react-admin';
const VotesEdit = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput disabled source="id"/>
        <TextInput source="fullname"/>
        <TextInput source="kpi"/>
        <TextInput source="probationary_vote"/>
        <TextInput source="promotion_vote"/>
        <TextInput source="personal_development"/>        
        <TextInput source="bonus"/>
        <TextInput source="discipline"/>
        <TextInput source="employees_vote"/>                 
        <DateInput source="created_at"/>  
      </SimpleForm>
    </Edit>
  );
};

export default VotesEdit;
