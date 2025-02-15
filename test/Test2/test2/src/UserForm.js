import { Box, Grid, Typography, TextField, Button, Input } from "@mui/material";

const UserForm = () => {
  return (
    <Grid container sx={{ height: "100vh" }}>
      {/* Left Side - Image Section */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          backgroundImage: "url('/doc.png')", // Replace with actual path
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      ></Grid>

      {/* Right Side - Form Section */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          backgroundColor: "#dff6f8",
          padding: 4,
        }}
      >
        <img
          src="/pic1.png"
          alt="Logo"
          style={{ width: "250px", height: "auto", marginBottom: "40px" }}
        />
        <Box
          sx={{
            width: "100%",
            maxWidth: 400,
            backgroundColor: "#a5d6e1",
            padding: 4,
            borderRadius: "10px",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
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
                htmlFor="email"
                sx={{ fontSize: "16px", color: "black" }}
              >
                {" "}
                Email:{" "}
              </Typography>
              <Input
                type="email"
                id="email"
                name="email"
                fullWidth
                sx={{ marginTop: "5px" }}
              />
            </Grid>

            {/* Password Field */}
            <Grid item xs={12}>
              <Typography
                component="label"
                htmlFor="password"
                sx={{ fontSize: "16px", color: "black" }}
              >
                {" "}
                Password:{" "}
              </Typography>
              <Input
                type="password"
                id="password"
                name="password"
                fullWidth
                sx={{ marginTop: "5px" }}
              />
            </Grid>

            {/* Service ID Field */}
            <Grid item xs={12}>
              <Typography
                component="label"
                htmlFor="SId"
                sx={{ fontSize: "16px", color: "black" }}
              >
                {" "}
                Service ID:{" "}
              </Typography>
              <Input
                type="text"
                id="SId"
                name="Sid"
                fullWidth
                sx={{ marginTop: "5px" }}
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

          <Button
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: "#23bfce",
              color: "black",
              marginTop: "20px",
              padding: "10px",
              borderRadius: "5px",
              "&:hover": { backgroundColor: "#1a9ca8" },
            }}
          >
            Login
          </Button>

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
            <Button variant="outlined" sx={{ minWidth: 50 }}>
              <img src="/goo.jpg" alt="Google" width="24" height="24" />
            </Button>
            <Button variant="outlined" sx={{ minWidth: 50 }}>
              <img src="/git.png" alt="GitHub" width="24" height="24" />
            </Button>
            <Button variant="outlined" sx={{ minWidth: 50 }}>
              <img src="/fb.png" alt="Facebook" width="24" height="24" />
            </Button>
          </Box>

          <Typography
            variant="body2"
            sx={{ marginTop: "20px", textAlign: "center" }}
          >
            Don't have an account yet?{" "}
            <span style={{ color: "#007bff", cursor: "pointer" }}>
              {" "}
              Register for free{" "}
            </span>
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default UserForm;
