// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from "react";
import {
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
} from "@mui/material";

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
  console.log(data);
  // Contact berisi foto, nama, telepon, dan email
  return (
    <List sx={{ minWidth: 275, margin: "3rem", bgcolor: "#DBF6F0" }}>
      {Array.isArray(data)
        ? Object.values(data).map((row,index) => (
        <>
          <ListItem key={index} alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src={row.photo}
                sx={{ width: 66, height: 66, mr: "2rem" }}
              />
            </ListItemAvatar>
            <ListItemText
              primary={row.name}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                  >
                    {row.phone}
                    <br />
                    {row.email}
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="middle" />
        </>
      )): <>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar
            alt="Remy Sharp"
            src={data.photo}
            sx={{ width: 66, height: 66, mr: "2rem" }}
          />
        </ListItemAvatar>
        <ListItemText
          primary={data.name}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
              >
                {data.phone}
                <br />
                {data.email}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="middle" />
    </>}
    </List>
  );
};

export default Contact;
