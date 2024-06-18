import { styled } from "@mui/material";
import { Link as LinkComponent } from "react-router-dom";

export const VisuallyHiddenInput = styled("input")({
  border: 0,
  position: "absolute",
  overflow: "hidden",
  width: 1,
  height: 1,
  margin: -1,
});

export const Link = styled(LinkComponent)({
  textDecoration: "none",
  color: "black",
  padding: "1rem",
  "&:hover": {
    backgroundColor: "rgba(0,0,0,0.05)",
  },
});

export const InputBox = styled("input")({
  height: "100%",
  width: "100%",
  border: "none",
  outline: "none",
  padding: "0 3rem",
  borderRadius: "1.5rem",
  backgroundColor: "rgba(247,247,247,1)",
});
