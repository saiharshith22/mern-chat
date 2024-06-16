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
import { nameValidator, passwordValidator } from "../utils/validators";
import useFileUpload from "../hooks/useFileUpload";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  let {
    value: username,
    hasError: usernameHasError,
    errorMessage: usernameErrorMessage,
    valueChangeHandler: usernameChangeHandler,
    reset: usernameReset,
  } = useInputValidator([nameValidator], "Username");

  const {
    value: password,
    hasError: passwordHasError,
    errorMessage: passwordErrorMessage,
    valueChangeHandler: passwordChangeHandler,
    reset: passwordReset,
  } = useInputValidator([passwordValidator], "Password");

  const {
    value: nameSignup,
    hasError: nameSignupHasError,
    errorMessage: nameSignupErrorMessage,
    valueChangeHandler: nameSignupChangeHandler,
    reset: nameSignupReset,
  } = useInputValidator([nameValidator], "Name");

  const {
    value: bio,
    hasError: bioHasError,
    errorMessage: bioErrorMessage,
    valueChangeHandler: bioChangeHandler,
    reset: bioReset,
  } = useInputValidator([], "Bio");

  const {
    previews,
    // files,
    error: fileError,
    changeHandler,
  } = useFileUpload({
    multiple: false,
    maxSize: 1 * 1024 * 1024,
  });

  const handleLogin = () => {
    if (!username || !password || usernameHasError || passwordHasError) {
      console.log("not valid");
    }
  };

  const resetFields = () => {
    usernameReset();
    passwordReset();
    nameSignupReset();
    bioReset();
  };

  const toggleLogin = (e) => {
    e.preventDefault();
    resetFields();

    setIsLogin((prev) => !prev);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    resetFields();
  };

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
              />
              {usernameHasError && (
                <Typography variant="caption" color="error" id="usernameError">
                  {usernameErrorMessage}
                </Typography>
              )}
              <TextField
                required
                size="small"
                fullWidth
                id="password"
                label="Password"
                type={"password"}
                sx={{ mt: "1rem" }}
                variant="outlined"
                value={password}
                onChange={passwordChangeHandler}
              />
              {passwordHasError && (
                <Typography variant="caption" color="error">
                  {passwordErrorMessage}
                </Typography>
              )}
              <Button
                sx={{ mt: "1rem", textTransform: "none" }}
                variant="contained"
                type="submit"
                fullWidth
                name="loginBtn"
                onSubmit={handleLogin}
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
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", marginBottom: "1rem" }}
            >
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
                  src={previews[0]}
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
                    <VisuallyHiddenInput type="file" onChange={changeHandler} />
                  </>
                </IconButton>
              </Stack>
              {fileError && (
                <Typography
                  variant="caption"
                  color="error"
                  sx={{
                    mt: "1rem",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {fileError}
                </Typography>
              )}
              <TextField
                required
                size="small"
                fullWidth
                id="name"
                label="Name"
                sx={{ mt: "1rem" }}
                variant="outlined"
                value={nameSignup}
                onChange={nameSignupChangeHandler}
              />
              {nameSignupHasError && (
                <Typography variant="caption" color="error">
                  {nameSignupErrorMessage}
                </Typography>
              )}
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
                id="bio"
                label="Bio"
                sx={{ mt: "1rem" }}
                variant="outlined"
                value={bio}
                onChange={bioChangeHandler}
              />
              {bioHasError && (
                <Typography variant="caption" color="error">
                  {bioErrorMessage}
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
                value={password}
                onChange={passwordChangeHandler}
              />
              {passwordHasError && (
                <Typography variant="caption" color="error">
                  {passwordErrorMessage}
                </Typography>
              )}
              <Button
                sx={{ mt: "1rem", textTransform: "none" }}
                variant="contained"
                type="submit"
                fullWidth
                onSubmit={handleSignup}
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
