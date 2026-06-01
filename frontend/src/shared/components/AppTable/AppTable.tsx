import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { AppTableProps } from './AppTable.types';

export const AppTable = ({ headers, rows }: AppTableProps) => (
  <Table size="small">
    <TableHead>
      <TableRow>{headers.map((header) => <TableCell key={header}>{header}</TableCell>)}</TableRow>
    </TableHead>
    <TableBody>
      {rows.map((row, index) => (
        <TableRow key={index}>
          {row.map((cell, cellIndex) => (
            <TableCell key={cellIndex}>{cell}</TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  </Table>
);
