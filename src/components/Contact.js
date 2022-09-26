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
  // Contact berisi foto, nama, telepon, dan email
  return (
    <List sx={{ minWidth: 275, margin: "3rem", bgcolor: "#DBF6F0" }}>
      {data.map((key) => {
        return (
          <>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={key.photo} sx={{ width: 66, height: 66, mr:"2rem" }}/>
              </ListItemAvatar>
              <ListItemText
                primary={key.name}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                    >
                      {key.phone}
                      <br />
                      {key.email} 
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="middle" />
          </>
        );
      })}
    </List>
  );
};

export default Contact;
