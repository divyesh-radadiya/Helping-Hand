import { List } from "@mui/material";

import RequestCard from "./card";

export const DonationList = ({ donationList }) => {
  return (
    <List>
      {donationList.map((req) => {
        return <RequestCard key={req.userId} request={req}></RequestCard>;
      })}
    </List>
  );
};
