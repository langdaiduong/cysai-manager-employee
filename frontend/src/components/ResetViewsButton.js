import * as React from "react";
import {
    Button,
    useUpdateMany,
    useRefresh,
    useNotify,
    useUnselectAll,
} from 'react-admin';
import { VisibilityOff } from '@material-ui/icons';

const ResetViewsButton = ({ selectedIds }) => {
    const refresh = useRefresh();
    const notify = useNotify();
    const unselectAll = useUnselectAll();
    const [updateMany, { loading }] = useUpdateMany(
        'employees',
        selectedIds,
        { views: 0 },
        {
            onSuccess: () => {
                refresh();
                notify('employees updated');
                unselectAll('employees');
            },
            onFailure: error => notify('Error: employees not updated', 'warning'),
        }
    );

    return (
        <Button
            label="Reset Views"
            disabled={loading}
            onClick={updateMany}
        >
            <VisibilityOff />
        </Button>
    );
};

export default ResetViewsButton;