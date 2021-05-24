import React from 'react';
import { Admin, Resource } from 'react-admin';
import dataProvider from './dataProvider';
import Dashboard from './Dashboard';
import authProvider from './authProvider';

import EmployeesList from './components/employees/EmployeesList';
import EmployeesEdit from './components/employees/EmployeesEdit';
import EmployeesCreate from './components/employees/EmployeesCreate';

import UsersList from './components/users/UsersList';
import UsersEdit from './components/users/UsersEdit';
import UsersCreate from './components/users/UsersCreate';
//import usersConfiguration from './components/users/index';

import SalaryList from './components/salary/SalariesList';
import SalaryEdit from './components/salary/SalariesEdit';
import SalaryCreate from './components/salary/SalariesCreate';


function App() {
  return (
    <Admin dataProvider={dataProvider} dashboard={Dashboard}>
      <Resource
        name="employees"
        list={EmployeesList}
        edit={EmployeesEdit}
        create={EmployeesCreate}
      />
      <Resource
        name="users"
        list={UsersList}
        edit={UsersEdit}
        create={UsersCreate}
      />
      <Resource
        name="salaries"
        list={SalaryList}
        edit={SalaryEdit}
        create={SalaryCreate}
      />
    </Admin>
  );
}

export default App;
