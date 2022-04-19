import { Table, TableBody, TableCell, TableRow } from "@mui/material";

import RequestCard from "./card";

export const RequestList = () => {
  return (
    <Table aria-label="simple table">
      <TableBody>
        <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
          <TableCell colSpan={2} component="th" scope="row">
            <RequestCard></RequestCard>
          </TableCell>
        </TableRow>{" "}
        <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
          <TableCell colSpan={2} component="th" scope="row">
            <RequestCard></RequestCard>
          </TableCell>
        </TableRow>{" "}
        <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
          <TableCell colSpan={2} component="th" scope="row">
            <RequestCard></RequestCard>
          </TableCell>
        </TableRow>{" "}
      </TableBody>
    </Table>
  );
};
