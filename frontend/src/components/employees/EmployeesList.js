import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  DateField,
  EmailField,
  Filter,
  SelectInput,
  ReferenceInput,
  TextInput,
  DeleteWithConfirmButton,
  ShowButton
} from 'react-admin';
import ResetViewsButton from '../ResetViewsButton';
import { Fragment } from 'react';
// import Button from '@material-ui/core/Button';
import { BulkDeleteButton } from 'react-admin';

const EmployeesBulkActionButtons = props => (
    <Fragment>
        <ResetViewsButton label="Reset Views" {...props} />
        {/* default bulk delete action */}
        <BulkDeleteButton {...props} />
    </Fragment>
);
const EmployeesFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="Name" source="name" reference="employees" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);

const EmployeesList = (props) => {
  return (
    <List {...props} filters={<EmployeesFilter/>} bulkActionButtons={<EmployeesBulkActionButtons />}>
      <Datagrid>
        <TextField source="_id" label = "id"/>
        <TextField source="name" />
        <DateField source="date_of_birth"/> 
        <TextField source="address" />
        <TextField source="phone"/>
        <EmailField source="email" />
        <TextField source="position" />
        <TextField source="level" />         
        <DateField source="date_of_joining"/>             
        <EditButton label="Edit" basePath="/employees" />
        <DeleteWithConfirmButton label="Delete" basePath="/employees" />
        <ShowButton source="Show"/>
      </Datagrid>
    </List>
  );
};

export default EmployeesList;
