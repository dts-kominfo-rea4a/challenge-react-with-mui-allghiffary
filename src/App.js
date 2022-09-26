import React, { useState } from 'react';
import "./App.css";
import Header from "./components/Header";
import ContactForm from "./components/ContactForm";
import Contact from "./components/Contact";
import { Grid, Box } from "@mui/material";
// Uncomment untuk memuat daftar kontak
// import contactsJSON from './data/contacts.json';
import contactsJSON from './data/contacts.json';
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm

  const [data, setdata] = useState(contactsJSON);


  return (
    <div className="App">
      <Header />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} columns={16}>
          <Grid item xs={8}>
            <ContactForm />
          </Grid>
          <Grid item xs={8}>
            <Contact data={data}/>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default App;
