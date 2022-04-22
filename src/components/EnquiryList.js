import { List } from "@mui/material";
import EnquiryCard from "./enquiryCard";

export const EnquiryList = ({ enquiryList }) => {
  return (
    <List>
      {enquiryList.map((req) => {
        return <EnquiryCard key={req.userId} enquiry={req}></EnquiryCard>;
      })}
    </List>
  );
};
