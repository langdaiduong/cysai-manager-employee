import * as React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Title } from 'react-admin';
export default () => (
    <Card>
        <Title title="Employee manager" />
        <CardContent>Phần mềm quản lý nhân sự công ty Cysai</CardContent>
    </Card>
);