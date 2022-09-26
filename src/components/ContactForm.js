import React, { useState } from 'react';
// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card
import {
  Card,
  CardActions,
  CardContent,
  Button,
  TextField,
} from "@mui/material";

const ContactForm = (props) => {
  // Form berisi name, phone, email, dan photo url
  // Buatlah state newContact berupa objek sesuai dengan data yang ada
  // const [inputData, setInputData] = useState('');
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState("");
  // const inputOnChangeHandler = (event) => {
  //   setInputData(event.target.value);
  // };

  const formOnSubmitHandler = (event) => {
    event.preventDefault();
    // Panggil props fnAddTodos
    props.fnAddData(name, phone, email, photo);
    // Kosongkan lagi input
    setName("");
    setPhone("");
    setEmail("");
    setPhoto("");
  };

  return (
    <form
      style={{
        margin: "0.5em 0em",
        // Tambah css agar bisa sama besar component TextField dan Button
        display: "flex",
      }}
      onSubmit={formOnSubmitHandler}
    >
      <Card sx={{ minWidth: 275, bgcolor: "#F3F1EB", margin: "3rem" }}>
        <CardContent>
          <TextField
            fullWidth
            sx={{ mb: 1 }}
            id="filled-basic"
            required
            value={name}
            onChange={(e)=>{setName(e.target.value)}}
            label="Name"
            variant="filled"
          />
          <TextField
            fullWidth
            sx={{ mb: 1 }}
            id="filled-basic"
            required
            value={phone}
            onChange={(e)=>{setPhone(e.target.value)}}
            label="Phone"
            variant="filled"
          />
          <TextField
            fullWidth
            sx={{ mb: 1 }}
            id="filled-basic"
            required
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
            label="Email"
            variant="filled"
          />
          <TextField
            fullWidth
            sx={{ mb: 1 }}
            id="filled-basic"
            required
            value={photo}
            onChange={(e)=>{setPhoto(e.target.value)}}
            label="Photo URL"
            variant="filled"
          />
        </CardContent>
        <CardActions>
          <Button type="submit" variant="text" sx={{ m: 1 }} color="success" size="small">
            ADD NEW
          </Button>
        </CardActions>
      </Card>
    </form>
  );
};

export default ContactForm;
