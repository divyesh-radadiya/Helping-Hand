import { List } from "@mui/material";

import RequestCard from "./requestCard";

export const AllRequestList = ({ requestList }) => {
  return (
    <List>
      {requestList.map((req) => {
        return <RequestCard key={req.userId} request={req}></RequestCard>;
      })}
    </List>
  );
};
