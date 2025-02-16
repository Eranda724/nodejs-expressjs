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
      spacing={0}
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      {/* Left Section with Images */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
        <img
          src="/regup.png"
          alt="Booking Image 1"
          style={{ width: "80%", borderRadius: "10px" }}
        />
        <img
          src="/regdown.png"
          alt="Booking Image 2"
          style={{ width: "80%", borderRadius: "10px" }}
        />
      </Grid>

      {/* Right Section with Form */}
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
          }}
        >
          <Typography
            variant="h5"
            fontWeight="bold"
            textAlign="center"
            gutterBottom
          >
            Create your account.
          </Typography>
          <Typography variant="body2" textAlign="center" color="gray">
            Already have an account? <Link to="/login">Sign In</Link>
          </Typography>

          {/* Form Fields */}
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

          <Typography
            variant="body2"
            textAlign="center"
            sx={{ marginTop: "20px" }}
          >
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
              <img src="/google.png" alt="Google" width="24" height="24" />
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
