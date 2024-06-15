import {
  Avatar,
  Button,
  Container,
  Divider,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { CameraAlt } from "@mui/icons-material";
import { VisuallyHiddenInput } from "../components/styles/StyledComponents";
import useInputValidator from "../hooks/useInputValidator";
import { nameValidator } from "../utils/validators";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleLogin = () => {
    setIsLogin((prev) => !prev);
  };

  const {
    value: username,
    hasError: usernameHasError,
    errorMessage: usernameErrorMessage,
    valueChangeHandler: usernameChangeHandler,
    inputBlurHandler: usernameBlurHandler,
  } = useInputValidator([nameValidator], "Username");

  return (
    <Container
      component={"main"}
      maxWidth="xs"
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {isLogin ? (
          <>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Login
            </Typography>
            <form>
              <TextField
                required
                size="small"
                fullWidth
                id="username"
                label="Username"
                sx={{ mt: "1rem" }}
                variant="outlined"
                value={username}
                onChange={usernameChangeHandler}
                onBlur={usernameBlurHandler}
              />
              {usernameHasError && (
                <Typography variant="caption" color="error">
                  {usernameErrorMessage}
                </Typography>
              )}
              <TextField
                required
                size="small"
                fullWidth
                id="password"
                label="Password"
                type="password"
                sx={{ mt: "1rem" }}
                variant="outlined"
              />
              <Button
                sx={{ mt: "1rem", textTransform: "none" }}
                variant="contained"
                type="submit"
                fullWidth
              >
                Log in
              </Button>
              <Divider sx={{ margin: "1rem 0" }} />
              <Button
                sx={{ p: 0, textTransform: "none", fontWeight: "bold" }}
                variant="text"
                fullWidth
                onClick={toggleLogin}
              >
                Sign up instead
              </Button>
            </form>
          </>
        ) : (
          <>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Sign Up
            </Typography>
            <form>
              <Stack position="relative" width="10rem" margin="auto">
                <Avatar
                  sx={{
                    width: "10rem",
                    height: "10rem",
                    objectFit: "contain",
                  }}
                />
                <IconButton
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    color: "white",
                    bgcolor: "rgba(0,0,0,0.5)",
                    ":hover": {
                      bgcolor: "rgba(0,0,0,0.7)",
                    },
                  }}
                  component="label"
                >
                  <>
                    <CameraAlt />
                    <VisuallyHiddenInput type="file" />
                  </>
                </IconButton>
              </Stack>
              <TextField
                required
                size="small"
                fullWidth
                id="name"
                label="Name"
                sx={{ mt: "1rem" }}
                variant="outlined"
              />
              <TextField
                required
                size="small"
                fullWidth
                id="username"
                label="Username"
                sx={{ mt: "1rem" }}
                variant="outlined"
              />
              <TextField
                required
                size="small"
                fullWidth
                id="bio"
                label="Bio"
                sx={{ mt: "1rem" }}
                variant="outlined"
              />
              <TextField
                required
                size="small"
                fullWidth
                id="password"
                label="Password"
                type="password"
                sx={{ mt: "1rem" }}
                variant="outlined"
              />
              <Button
                sx={{ mt: "1rem", textTransform: "none" }}
                variant="contained"
                type="submit"
                fullWidth
              >
                Sign up
              </Button>
              <Divider sx={{ margin: "1rem 0" }} />
              <Button
                sx={{ p: 0, textTransform: "none", fontWeight: "bold" }}
                variant="text"
                fullWidth
                onClick={toggleLogin}
              >
                Log in instead
              </Button>
            </form>
          </>
        )}
      </Paper>
    </Container>
  );
};

export default Login;
