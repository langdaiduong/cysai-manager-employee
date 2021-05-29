import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  TextField,
  DateField,
  RichTextField,
} from "react-admin";
import Typography from '@material-ui/core/Typography'

const Aside = ({ record }) => (
    <div style={{ width: 200, margin: '1em' }}>
        <Typography variant="h6">Votes details</Typography>
        {record && (
            <Typography variant="body2">
                full name: {record.fullname}
            </Typography>
        )}
    </div>
);
const votesShow = (props) => (
  <Show {...props} aside={Aside}>
    <SimpleShowLayout>
		<TextField source="id" />
		<TextField source="fullname" />
		<TextField source="kpi" />
		<TextField source="probationary_vote" />
		<TextField source="promotion_vote" />
		<TextField source="personal_development" />
		<TextField source="bonus" />
		<TextField source="discipline" />
		<TextField source="employees_vote" />
		<DateField source="created_at" />
    </SimpleShowLayout>
  </Show>
);

export default votesShow;
