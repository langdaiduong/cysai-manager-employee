import React, { Component } from 'react';
import { Admin, Resource } from 'react-admin';
import dataProvider from './dataProvider';
import Dashboard from './Dashboard';
import chat from './Chat';
import authProvider from './authProvider';
import { ChatEngine } from 'react-chat-engine';
import './App.css'
import ChatFeed from './components/chat/ChatFeed.jsx';
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
import VotesShow from './components/votes/VotesShow';

import TimeKeepingList from './components/timekeeping/TimeKeepingList';
import TimeKeepingEdit from './components/timekeeping/TimeKeepingEdit';
import TimeKeepingCreate from './components/timekeeping/TimeKeepingCreate';

import ChatList from './components/chat/ChatList';
import ChatEdit from './components/chat/ChatEdit';
import ChatCreate from './components/chat/ChatCreate';


//icon
import EmployeeIcon from '@material-ui/icons/Person';
import UserIcon from '@material-ui/icons/People';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import ThumbUpAltSharpIcon from '@material-ui/icons/ThumbUpAltSharp';
import MenuBookSharpIcon from '@material-ui/icons/MenuBookSharp';
import ChatIcon from '@material-ui/icons/Chat';

//const projectID = "0056905e-32d6-48aa-a93c-4c4d4808e8bb";

function App() {
  //if (!localStorage.getItem('username')) return <LoginForm />;
  return (
    <Admin dataProvider={dataProvider} dashboard={Dashboard} chat={chat} >
      <Resource
        name="employees"
        list={EmployeesList}
        edit={EmployeesEdit}
        create={EmployeesCreate}
        icon={EmployeeIcon}
      />
      <Resource
        name="users"
        list={UsersList}
        edit={UsersEdit}
        create={UsersCreate}
        icon={UserIcon}
      />
      <Resource
        name="salaries"
        list={SalaryList}
        edit={SalaryEdit}
        create={SalaryCreate}
        icon={AccountBalanceIcon}
      />
      <Resource
        name="votes"
        list={VotesList}
        edit={VotesEdit}
        create={VotesCreate}
        show={VotesShow}
        icon={ThumbUpAltSharpIcon}
      />
      <Resource
        name="timekeeping"
        list={TimeKeepingList}
        edit={TimeKeepingEdit}
        create={TimeKeepingCreate}
        icon={MenuBookSharpIcon}
      />
      <Resource
        name="chat"
        list={chat}
        icon={ChatIcon}
      />
    </Admin>
  );
}

export default App;
