import PropTypes from "prop-types";
import { Avatar, IconButton, ListItem, Stack, Typography } from "@mui/material";
import { memo } from "react";
import { Add as AddIcon } from "@mui/icons-material";

const UserItem = ({ user, handler, handlerLoading }) => {
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
            bgcolor: "primary.main",
            color: "white",
            "&:hover": { bgcolor: "primary.dark" },
          }}
          onClick={() => handler(_id)}
          disabled={handlerLoading}
        >
          <AddIcon />
        </IconButton>
      </Stack>
    </ListItem>
  );
};

UserItem.propTypes = {
  handler: PropTypes.func,
  handlerLoading: PropTypes.bool,
  user: PropTypes.shape({
    _id: PropTypes.any,
    avatar: PropTypes.any,
    name: PropTypes.any,
  }),
};

export default memo(UserItem);
