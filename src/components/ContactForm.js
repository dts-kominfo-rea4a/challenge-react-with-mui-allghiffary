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

const ContactForm = () => {
  // Form berisi name, phone, email, dan photo url
  // Buatlah state newContact berupa objek sesuai dengan data yang ada

  return (

		<Card sx={{ minWidth: 275, bgcolor: "#F3F1EB", margin: "3rem" }}>
      <CardContent>
          <TextField fullWidth sx={{ mb: 1 }} id="filled-basic" required label="Name" variant="filled" />
          <TextField fullWidth sx={{ mb: 1 }} id="filled-basic" required label="Phone" variant="filled" />
          <TextField fullWidth sx={{ mb: 1 }} id="filled-basic" required label="Email" variant="filled" />
          <TextField fullWidth sx={{ mb: 1 }} id="filled-basic" required label="Photo URL" variant="filled" />
      </CardContent>
      <CardActions>
        <Button variant="text" sx={{ m: 1 }} color="success" size="small">
          ADD NEW
        </Button>
      </CardActions>
    </Card>
  );
};

export default ContactForm;
