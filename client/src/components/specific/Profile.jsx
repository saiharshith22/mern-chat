import {
  AlternateEmail as UserNameIcon,
  CalendarMonth as CalendarIcon,
  Face as FaceIcon,
} from "@mui/icons-material";
import { Avatar, Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";
import moment from "moment";

const Profile = () => {
  return (
    <Stack spacing={"2rem"} direction={"column"} alignItems={"center"}>
      <Avatar
        sx={{
          width: 200,
          height: 200,
          objectFit: "contain",
          marginBottom: "1rem",
          border: "5px solid white",
        }}
      />

      <ProfileCard
        heading={"Bio"}
        text={"Mistakes are the proof that you are trying..."}
      />
      <ProfileCard
        heading={"Username"}
        text={"username"}
        Icon={<UserNameIcon />}
      />
      <ProfileCard heading={"Name"} text={"Harry Potter"} Icon={<FaceIcon />} />

      <ProfileCard
        heading={"Joined"}
        text={moment("2024-01-22T00:00:00.000Z").fromNow()}
        Icon={<CalendarIcon />}
      />
    </Stack>
  );
};

const ProfileCard = ({ Icon, text, heading }) => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      spacing={"1rem"}
      color={"white"}
      textAlign="center"
    >
      {Icon && Icon}
      <Stack>
        <Typography variant="body1">{text}</Typography>
        <Typography variant="caption" color={"gray"}>
          {heading}
        </Typography>
      </Stack>
    </Stack>
  );
};

ProfileCard.propTypes = {
  Icon: PropTypes.element,
  text: PropTypes.string,
  heading: PropTypes.string,
};

export default Profile;
