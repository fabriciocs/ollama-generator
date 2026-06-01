import Alert from '@mui/material/Alert';
import { AppAlertProps } from './AppAlert.types';
export const AppAlert = (props: AppAlertProps) => <Alert variant="outlined" {...props} />;
