import {
  Box,
  Grid,
  Typography,
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        padding: { xs: "20px", md: "40px" },
      }}
    >
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "-50px",
        }}
      >
        <img
          src="/regup.png"
          alt="Booking 1"
          style={{
            width: "80%",
            maxWidth: "400px",
            borderRadius: "40px 10px 0 80px",
            boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
            marginTop: "50px",
            gap: "px",
          }}
        />
        <img
          src="/regdown.png"
          alt="Booking 2"
          style={{
            width: "80%",
            maxWidth: "400px",
            borderRadius: "80px 40px 0 40px",
            boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
            marginLeft: "50px",
            marginBottom: "50px",
          }}
        />
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "400px",
            backgroundColor: "white",
            padding: "30px",
            borderRadius: "20px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
          }}
        >
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Create your account.
          </Typography>
          <Typography variant="body2" color="gray">
            Already have an account? <Link to="/User">Sign In</Link>
          </Typography>

          <TextField
            fullWidth
            label="Full Name"
            margin="normal"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Email Address"
            type="email"
            margin="normal"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            margin="normal"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Confirm Password"
            type="password"
            margin="normal"
            variant="outlined"
          />

          <FormControlLabel
            control={<Checkbox />}
            label="I agree to the terms and conditions"
            sx={{ marginTop: 1 }}
          />

          <Button
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: "#4F46E5",
              color: "white",
              marginTop: "20px",
            }}
          >
            Signup
          </Button>

          <Typography variant="body2" sx={{ marginTop: "20px" }}>
            OR
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              marginTop: "10px",
            }}
          >
            <Button
              variant="outlined"
              sx={{ minWidth: 50, backgroundColor: "white" }}
            >
              <img src="/goo.png" alt="Google" width="24" height="24" />
            </Button>
            <Button
              variant="outlined"
              sx={{ minWidth: 50, backgroundColor: "white" }}
            >
              <img src="/apple.png" alt="Apple" width="24" height="24" />
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default RegisterForm;
