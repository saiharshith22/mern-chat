import { QuestionAnswerOutlined as QuestionAnswerIcon } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import AppLayout from "../components/layout/AppLayout";

const Home = () => {
  return (
    <Stack
      sx={{ bgcolor: "rgba(0,0,0,0.05)" }}
      height={"100%"}
      direction={"column"}
      alignItems={"center"}
    >
      <Typography p="2rem" variant="h5" sx={{ fontWeight: "bold" }}>
        Select a friend to chat
      </Typography>
      <QuestionAnswerIcon sx={{ fontSize: "5rem" }} />
    </Stack>
  );
};

export default AppLayout()(Home);
