import { Button, Grid, Input, Typography } from "@mui/material";

const UserForm = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Grid item xs={12}>
        <Typography
          component={"h1"}
          sx={{ fontSize: "24px", fontWeight: "bold", color: "brown" }}
        >
          Login Page
        </Typography>
      </Grid>

      <Grid item xs={12} sm={6} sx={{ display: "flex", alignItems: "center" }}>
        <Typography
          component={"label"}
          htmlFor="id"
          sx={{ fontSize: "16px", color: "black", marginRight: "10px" }}
        >
          Email:
        </Typography>

        <Input
          type="number"
          id="id"
          name="id"
          sx={{ width: "400px" }}
          value={""}
          onChange={(e) => {}}
        ></Input>
      </Grid>

      <Grid item xs={12} sm={6} sx={{ display: "flex", alignItems: "center" }}>
        <Typography
          component={"label"}
          htmlFor="id"
          sx={{ fontSize: "16px", color: "black", marginRight: "10px" }}
        >
          Password:
        </Typography>

        <Input
          type="text"
          id="name"
          name="name"
          sx={{ width: "400px" }}
          value={""}
          onChange={(e) => {}}
        ></Input>
      </Grid>
      <Button
        sx={{
          margin: "auto",
          marginBottom: "20px",
          backgroundColor: "blue",
          color: "white",
          "&:hover": {
            opacity: 0.8,
            backgroundColor: "darkblue",
          },
        }}
      >
        Save
      </Button>
    </Grid>
  );
};

export default UserForm;
