/* eslint-disable react/display-name */
// import React from "react";
import { Grid } from "@mui/material";

import Title from "../shared/Title";
import Header from "./Header";
import ChatList from "../specific/ChatList";
import { sampleChats } from "../../utils/sampleData";
import { useParams } from "react-router-dom";
import Profile from "../specific/Profile";

const AppLayout = () => (MyComponent) => {
  return (props) => {
    const params = useParams();
    const chatId = params.id;

    const handleDeleteChat = (e, _id, groupChat) => {
      e.preventDefault();
      console.log("delete chat :: ", _id, groupChat);
    };

    return (
      <>
        <Title />
        <Header />
        <Grid container height="calc(100vh - 4rem)">
          <Grid
            item
            sm={4}
            md={3}
            sx={{ display: { xs: "none", sm: "block" } }}
            height={"100%"}
          >
            <ChatList
              chats={sampleChats}
              chatId={chatId}
              handleDeleteChat={handleDeleteChat}
              // newMessageAlerts={[
              //   {
              //     chatId: "1",
              //     count: 4,
              //   },
              // ]}
              // onlineUsers={["1", "2"]}
            />
          </Grid>
          <Grid item xs={12} sm={8} md={5} lg={6} height="100%">
            <MyComponent {...props} />
          </Grid>
          <Grid
            item
            md={4}
            lg={3}
            sx={{
              display: { xs: "none", md: "block" },
              padding: "2rem",
              background: "rgba(0,0,0,0.85)",
            }}
            height={"100%"}
          >
            <Profile />
          </Grid>
        </Grid>
      </>
    );
  };
};

export default AppLayout;
