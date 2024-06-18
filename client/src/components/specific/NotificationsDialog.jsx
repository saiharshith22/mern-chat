import {
  Avatar,
  Button,
  Dialog,
  DialogTitle,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import { memo } from "react";
import { sampleNotifications } from "../../utils/sampleData";

const NotificationsDialog = () => {
  const friendRequestHandler = ({ _id, accept }) => {
    console.log(_id, accept);
  };
  return (
    <Dialog open>
      <Stack p={{ xs: "1rem", sm: "2rem" }} maxWidth={"100%"}>
        <DialogTitle>Notifications</DialogTitle>
        {sampleNotifications.length > 0 ? (
          sampleNotifications.map((notification) => (
            <NotificationItem
              key={notification._id}
              sender={notification.sender}
              _id={notification._id}
              handler={friendRequestHandler}
            />
          ))
        ) : (
          <Typography textAlign={"center"}>0 notifications</Typography>
        )}
      </Stack>
    </Dialog>
  );
};

const NotificationItem = memo(function NotificationItem({
  sender,
  _id,
  handler,
}) {
  const { name, avatar } = sender;
  return (
    <ListItem>
      <Stack
        direction={"row"}
        alignItems={"center"}
        spacing={"1rem"}
        width={"100%"}
      >
        <Avatar src={avatar[0]} />
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
          {`${name} sent you a friend request`}
        </Typography>
        <Stack direction={{ xs: "column", sm: "row" }}>
          <Button onClick={() => handler({ _id, accept: true })}>Accept</Button>
          <Button color="error" onClick={() => handler({ _id, accept: false })}>
            Reject
          </Button>
        </Stack>
      </Stack>
    </ListItem>
  );
});

NotificationItem.propTypes = {
  _id: PropTypes.any,
  handler: PropTypes.func,
  sender: PropTypes.any,
};

export default NotificationsDialog;
