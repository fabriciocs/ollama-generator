import { AppAlert } from '../components/AppAlert';
export const SuccessState = ({ message }: { message: string }) => (
  <AppAlert severity="success">{message}</AppAlert>
);
