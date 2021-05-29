import React from 'react';
import { Edit, SimpleForm, TextInput, DateInput, NumberInput} from 'react-admin';
const ChatEdit = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="message" />
        <TextInput source="author" />
        <TextInput source="group" />
        <TextInput source="status" />
        <DateInput source="created_at"/>  
      </SimpleForm>
    </Edit>
  );
};
export default ChatEdit;
