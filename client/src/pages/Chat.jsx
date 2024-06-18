import { IconButton, Stack } from "@mui/material";
import AppLayout from "../components/layout/AppLayout";
import { useRef } from "react";
import {
  AttachFile as AttachFileIcon,
  Send as SendIcon,
} from "@mui/icons-material";
import { InputBox } from "../components/styles/StyledComponents";
import FileMenu from "../components/dialogs/FileMenu";
import { sampleMessage } from "../utils/sampleData";
import MessageComponent from "../components/shared/MessageComponent";

const Chat = () => {
  const user = {
    _id: "sample_id",
    name: "Harry22",
  };
  const containerRef = useRef(null);

  return (
    <>
      <Stack
        ref={containerRef}
        padding={"1rem"}
        spacing={"1rem"}
        bgcolor={"rgba(247, 247,247,1)"}
        height={"90%"}
        sx={{
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
        {sampleMessage.map((message) => (
          <MessageComponent key={message._id} message={message} user={user} />
        ))}
      </Stack>
      <form style={{ height: "10%" }}>
        <Stack
          direction={"row"}
          height={"100%"}
          padding={"1rem"}
          alignItems={"center"}
          position={"relative"}
        >
          <IconButton
            sx={{
              position: "absolute",
              left: "1.5rem",
              "&:hover": {
                rotate: "30deg",
              },
            }}
          >
            <AttachFileIcon />
          </IconButton>
          <InputBox placeholder="Type message here..." />
          <IconButton
            type="submit"
            sx={{
              bgcolor: "rgba(0,0,0,0.85)",
              color: "white",
              marginLeft: "1rem",
              padding: "0.5rem",
              "&:hover": {
                bgcolor: "#000000",
                rotate: "-30deg",
              },
            }}
          >
            <SendIcon />
          </IconButton>
        </Stack>
      </form>
      <FileMenu />
    </>
  );
};

export default AppLayout()(Chat);
