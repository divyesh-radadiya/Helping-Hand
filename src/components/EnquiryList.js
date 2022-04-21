import { List } from "@mui/material";

import RequestCard from "./card";

export const EnquiryList = ({ enquiryList }) => {
  return (
    <List>
      {enquiryList.map((req) => {
        return <RequestCard key={req.userId} request={req}></RequestCard>;
      })}
    </List>
  );
};
