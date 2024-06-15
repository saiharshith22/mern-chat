import { styled } from "@mui/material";

export const VisuallyHiddenInput = styled("input")({
  border: 0,
  position: "absolute",
  overflow: "hidden",
  width: 1,
  height: 1,
  margin: -1,
});
