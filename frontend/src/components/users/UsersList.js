import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  DateField,
  TextInput,
  Filter,
  SelectInput,
  ReferenceInput,
  Pagination as RaPagination,
  PaginationActions as RaPaginationActions,
  DeleteWithConfirmButton,
  ShowButton
} from 'react-admin';

export const PaginationActions = props => <RaPaginationActions {...props} color="secondary" />;
export const Pagination = props => <RaPagination {...props} ActionsComponent={PaginationActions} />;

const UsersFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="Name" source="name" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);
const UsersList = (props) => {
  return (
    <List {...props} filters={<UsersFilter/>} pagination={<Pagination/>} >
      <Datagrid>
        <TextField source="_id" label = "id"/>
        <TextField source="username" />
        <TextField source="name" />
        <TextField source="roles" label = "Roles"/>     
        <DateField source="created_at"/>             
        <EditButton label="Edit" basePath="/users" />
        <DeleteWithConfirmButton label="Delete" basePath="/users"/>
        <ShowButton source="Show"/>
      </Datagrid>
    </List>
  );
};

export default UsersList;
