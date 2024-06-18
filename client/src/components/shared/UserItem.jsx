import PropTypes from "prop-types";
import { Avatar, IconButton, ListItem, Stack, Typography } from "@mui/material";
import { memo } from "react";
import { Add as AddIcon, Remove as RemoveIcon } from "@mui/icons-material";

const UserItem = ({ user, handler, handlerLoading, isAdded = false }) => {
  const { name, _id, avatar } = user;
  return (
    <ListItem>
      <Stack
        direction={"row"}
        alignItems={"center"}
        spacing={"1rem"}
        width={"100%"}
      >
        <Avatar />
        <Typography
          variant="body1"
          sx={{
            flexGrow: 1,
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipse",
          }}
        >
          {name}
        </Typography>
        <IconButton
          size="small"
          sx={{
            bgcolor: isAdded ? "error.main" : "primary.main",
            color: "white",
            "&:hover": { bgcolor: isAdded ? "error.dark" : "primary.dark" },
          }}
          onClick={() => handler(_id)}
          disabled={handlerLoading}
        >
          {isAdded ? <RemoveIcon /> : <AddIcon />}
        </IconButton>
      </Stack>
    </ListItem>
  );
};

UserItem.propTypes = {
  handler: PropTypes.func,
  handlerLoading: PropTypes.bool,
  isAdded: PropTypes.any,
  user: PropTypes.shape({
    _id: PropTypes.any,
    avatar: PropTypes.any,
    name: PropTypes.any,
  }),
};

export default memo(UserItem);
