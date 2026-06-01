import { AppAlert } from '../components/AppAlert';

export const ErrorState = ({ message }: { message: string }) => (
  <AppAlert severity="error">{message}</AppAlert>
);
