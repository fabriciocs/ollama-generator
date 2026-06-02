import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { AppCard } from '../../components/AppCard';
import { GeneratedFilesListProps } from './GeneratedFilesList.types';

export const GeneratedFilesList = ({ files }: GeneratedFilesListProps) => (
  <AppCard sx={{ p: 2 }}>
    <Typography variant="h6" gutterBottom>
      Arquivos gerados
    </Typography>
    <List dense disablePadding>
      {files.map((file) => (
        <ListItem key={file.id} divider disableGutters>
          <ListItemText primary={file.fileName} secondary={`${file.sizeBytes} bytes`} />
        </ListItem>
      ))}
    </List>
  </AppCard>
);
