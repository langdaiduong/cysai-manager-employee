import React from 'react';
import { Create, SimpleForm, TextInput, DateInput, NumberInput  } from 'react-admin';
const ChatCreate = (props) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="message" />
        <TextInput source="author" />
        <TextInput source="group" />
        <TextInput source="status" />         
        <DateInput source="created_at"/>  
      </SimpleForm>
    </Create>
  );
};

export default ChatCreate;
