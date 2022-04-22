import { List } from "@mui/material";
import DonationCard from "./donationCard";

export const DonationList = ({ donationList }) => {
  return (
    <List>
      {donationList.map((req) => {
        return <DonationCard key={req.userId} donation={req}></DonationCard>;
      })}
    </List>
  );
};
