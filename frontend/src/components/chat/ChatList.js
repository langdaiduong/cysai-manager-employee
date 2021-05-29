import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  DateField,
  Filter,
  SelectInput,
  ReferenceInput,
  TextInput
} from 'react-admin';

const ChatFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="status" source="status" reference="chat" allowEmpty>
            <SelectInput optionText="status" />
        </ReferenceInput>
    </Filter>
);
const ChatList = (props) => {
  return (
    <List {...props} filters={<ChatFilter/>}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="message" />
        <TextField source="author" />
        <TextField source="group" />
        <TextField source="status" />
        <DateField source="created_at"/>       
        <EditButton label="Edit" basePath="/chat"/>
        <DeleteButton label="Delete" basePath="/chat"/>
      </Datagrid>
    </List>
  );
};

export default ChatList;
