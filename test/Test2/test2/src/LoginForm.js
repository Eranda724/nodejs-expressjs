import { Box, Grid, Typography, Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";

// Inside the form, add this below the login button
<Typography align="center" sx={{ marginTop: 2 }}>
  Don't have an account? <Link to="/register">Register here</Link>
</Typography>;

const LoginForm = () => {
  return (
    <Grid
      container
      spacing={0}
      sx={{
        height: "899px",
        width: "1196px",
        marginTop: "62px",
        marginLeft: "122px",
        borderRadius: "40px",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          backgroundImage: "url('/doc.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          justifyContent: "center",
          maxHeight: "899px",
          maxWidth: "598px",
        }}
      ></Grid>

      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          backgroundColor: "#FFFFFF47",
          padding: 4,
        }}
      >
        <img
          src="/as.png"
          alt="Logo"
          style={{ width: "176px", height: "91px" }}
        />
        <Box
          sx={{
            backgroundColor: "#DEDEDE",
            padding: 4,
            borderRadius: "15px",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
            maxWidth: "422px",
            maxHeight: "586px",
          }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            color="black"
            textAlign="center"
            gutterBottom
          >
            Login
          </Typography>

          <Grid container spacing={2}>
            {/* Email Field */}
            <Grid item xs={12}>
              <Typography
                component="label"
                htmlFor="SId"
                sx={{ fontSize: "16px", color: "black" }}
              >
                Email:
              </Typography>
              <TextField
                label="Email"
                type="email"
                id="email"
                name="email"
                variant="outlined"
                fullWidth
                margin="normal"
                sx={{ backgroundColor: "white" }}
              />
            </Grid>

            {/* Password Field */}
            <Grid item xs={12}>
              <Typography
                component="label"
                htmlFor="SId"
                sx={{ fontSize: "16px", color: "black" }}
              >
                Password:
              </Typography>
              <TextField
                label="Password"
                type="password"
                id="password"
                name="password"
                variant="outlined"
                fullWidth
                margin="normal"
                sx={{ backgroundColor: "white" }}
              />
            </Grid>

            <Grid item xs={12}>
              <Typography
                component="label"
                htmlFor="SId"
                sx={{ fontSize: "16px", color: "black" }}
              >
                Service ID:
              </Typography>
              <TextField
                label="Service ID"
                id="SId"
                name="SId"
                variant="outlined"
                fullWidth
                margin="normal"
                sx={{ backgroundColor: "white" }}
              />
            </Grid>
          </Grid>

          <Typography
            variant="body2"
            color="gray"
            sx={{ cursor: "pointer", marginTop: "10px", textAlign: "center" }}
          >
            {" "}
            Forgot Password?{" "}
          </Typography>

          <Grid item xs={12} display="flex" justifyContent="center">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#919191",
                color: "black",
                marginTop: "20px",
                padding: "10px",
                borderRadius: "5px",
                "&:hover": { backgroundColor: "#919191" },
              }}
            >
              Login
            </Button>
          </Grid>

          <Typography
            variant="body2"
            sx={{ marginTop: "20px", textAlign: "center" }}
          >
            {" "}
            or continue with{" "}
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
              <img src="/goo.jpg" alt="Google" width="24" height="24" />
            </Button>
            <Button
              variant="outlined"
              sx={{ minWidth: 50, backgroundColor: "white" }}
            >
              <img src="/git.png" alt="GitHub" width="24" height="24" />
            </Button>
            <Button
              variant="outlined"
              sx={{ minWidth: 50, backgroundColor: "white" }}
            >
              <img src="/fb.png" alt="Facebook" width="24" height="24" />
            </Button>
          </Box>

          <Typography
            variant="body2"
            sx={{ marginTop: "20px", textAlign: "center" }}
          >
            Don't have an account yet?{" "}
            <Link to="/reg" style={{ color: "#007bff", cursor: "pointer" }}>
              {" "}
              Register for free{" "}
            </Link>
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default LoginForm;
