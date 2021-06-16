import React from 'react';
import { Admin, Resource, ShowGuesser, Login } from 'react-admin';
import dataProvider from './dataProvider';
import Dashboard from './Dashboard';
import chat from './Chat';
import authProvider from './authProvider';
//import LoginForm from './components/chat/LoginForm.jsx';

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

import VotesList from './components/votes/VotesList';
import VotesEdit from './components/votes/VotesEdit';
import VotesCreate from './components/votes/VotesCreate';

import TimeKeepingList from './components/timekeeping/TimeKeepingList';
import TimeKeepingEdit from './components/timekeeping/TimeKeepingEdit';
import TimeKeepingCreate from './components/timekeeping/TimeKeepingCreate';

//icon
import EmployeeIcon from '@material-ui/icons/Person';
import UserIcon from '@material-ui/icons/People';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import ThumbUpAltSharpIcon from '@material-ui/icons/ThumbUpAltSharp';
import MenuBookSharpIcon from '@material-ui/icons/MenuBookSharp';
import ChatIcon from '@material-ui/icons/Chat';

//const projectID = "0056905e-32d6-48aa-a93c-4c4d4808e8bb";
//authProvider={authProvider}

const MyLoginPage = () => (
    <Login
        // A random image that changes everyday
        backgroundImage="https://www.smediavn.com/public/ckeditor/imagesimages/Tintuc/Tin%20cong%20nghe/Thang%2011%202016/Smart-city-minh-hoa-2.jpg"
    />
);

function App() {
  //if (!localStorage.getItem('username')) return <LoginForm />;
  return (
    <Admin dataProvider={dataProvider} dashboard={Dashboard} chat={chat} authProvider={authProvider} loginPage={MyLoginPage}>
    {permissions => [
      permissions === 'admin' || permissions === 'employee'
        ? <Resource
        name="employees"
        list={EmployeesList}
        edit={permissions === 'admin' ? EmployeesEdit : null}
        create={EmployeesCreate }
        icon={EmployeeIcon}
        />
        :null,
      permissions === 'admin'
        ? <Resource
          name="users"
          list={UsersList}
          edit={permissions === 'admin' ? UsersEdit : null}
          create={permissions === 'admin' ? UsersCreate : null}
          icon={UserIcon}
        />
        :null,
      permissions === 'manager'|| permissions ==='admin'
        ? <Resource
          name="salaries"
          list={SalaryList}
          edit={SalaryEdit}
          create={SalaryCreate}
          icon={AccountBalanceIcon}
        />
        :null,
      <Resource
        name="votes"
        list={VotesList}
        edit={VotesEdit}
        create={VotesCreate}
        icon={ThumbUpAltSharpIcon}
      />,
      permissions === 'manager'|| permissions ==='admin'
        ? <Resource
          name="timekeeping"
          list={TimeKeepingList}
          edit={TimeKeepingEdit}
          create={TimeKeepingCreate}
          icon={MenuBookSharpIcon}
        />
        :null,
      <Resource
        name="chat"
        list={chat}
        icon={ChatIcon}
      />
      ]}
    </Admin>
  );
}

export default App;
