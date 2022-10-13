import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { orange } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const theme = createTheme();
const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(orange[500]),
  backgroundColor: orange[500],
  "&:hover": {
    backgroundColor: orange[700],
  },
}));

export default function Login() {
  const navigate = useNavigate();
  const login = () => {
    localStorage.setItem("login", true);

    navigate("/dashboard");
  };
  React.useEffect(() => {
    let login = localStorage.getItem("login");
    if (login) {
      navigate("/dashboard");
    }
  }, []);
  console.log(navigate);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 4, width: 500, maxWidth: "100%" }}
          >
            <Grid container spacing={3}>
              <Grid item xs={12} className="key-input">
                <TextField
                  name="key"
                  type={values.showPassword ? "text" : "password"}
                  required
                  placeholder="Private key"
                  fullWidth
                  id="key"
                  label="private key"
                  autoFocus
                />

                <IconButton
                  className="icon"
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </Grid>
            </Grid>
            <Button
              onClick={login}
              fullWidth
              variant="contained"
              sx={{ mb: 2, height: "50px" }}
            >
              Continue
            </Button>
            <Typography
              variant="subtitle2"
              gutterBottom
              sx={{
                margin: "1rem 0",

                marginLeft: "25%",
              }}
            >
              Or Click to Connect MetaMask
            </Typography>

            <ColorButton
              onClick={login}
              fullWidth
              variant="contained"
              sx={{ mb: 2, height: "50px" }}
            >
              MetaMask
            </ColorButton>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
