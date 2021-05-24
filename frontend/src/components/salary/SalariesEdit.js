import React from 'react';
import { Edit, SimpleForm, TextInput, DateInput, NumberInput} from 'react-admin';
const SalariesEdit = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
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
    </Edit>
  );
};

export default SalariesEdit;
