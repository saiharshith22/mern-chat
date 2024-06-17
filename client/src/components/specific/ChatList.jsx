import { Stack } from "@mui/material";
import PropTypes from "prop-types";
import ChatItem from "../shared/ChatItem";

const ChatList = ({
  w = "100%",
  chats = [],
  chatId,
  onlineUsers = [],
  newMessageAlerts = [
    {
      chatId: "",
      count: 0,
    },
  ],
  handleDeleteChat,
}) => {
  return (
    <Stack width={w} direction={"column"}>
      {chats?.map((chat, index) => {
        const { avatar, _id, name, groupChat, members } = chat;

        const newMessageAlert = newMessageAlerts.find(
          (alert) => alert.chatId === _id
        );

        const isOnline = members.some((member) => onlineUsers.includes(_id));

        return (
          <ChatItem
            index={index}
            key={_id}
            newMessageAlert={newMessageAlert}
            isOnline={isOnline}
            avatar={avatar}
            name={name}
            _id={_id}
            groupChat={groupChat}
            sameSender={chatId === _id}
            handleDeleteChat={handleDeleteChat}
          />
        );
      })}
    </Stack>
  );
};

ChatList.propTypes = {
  w: PropTypes.string,
  chatId: PropTypes.string,
  onlineUsers: PropTypes.array,
  newMessageAlerts: PropTypes.array,
  handleDeleteChat: PropTypes.func,
};
export default ChatList;
