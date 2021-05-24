import React from 'react';
import { Create, SimpleForm, TextInput, DateInput, NumberInput  } from 'react-admin';
const SalariesCreate = (props) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="fullname" />
        <TextInput source="stk" />
        <TextInput source="position" />
        <NumberInput source="salary" />
        <TextInput source="allowance" />        
        <TextInput source="insurrance.BHYT" label = "BHYT"/>
        <TextInput source="insurrance.BHXH" label = "BHXH"/>
        <TextInput source="insurrance.BHTN" label = "BHTN"/> 
        <TextInput source="tax_personal" />
        <NumberInput source="salary_sum" />                  
        <DateInput source="created_at"/>  
      </SimpleForm>
    </Create>
  );
};

export default SalariesCreate;
