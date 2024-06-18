import {
  Edit as EditIcon,
  KeyboardBackspace as KeyboardBackspaceIcon,
  Menu as MenuIcon,
  Done as DoneIcon,
} from "@mui/icons-material";
import {
  Box,
  Drawer,
  Grid,
  IconButton,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import { memo, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import AvatarCard from "../components/shared/AvatarCard";
import { Link } from "../components/styles/StyledComponents";
import { sampleChats } from "../utils/sampleData";

const Groups = () => {
  const navigate = useNavigate();

  const chatId = useSearchParams()[0].get("group");

  const [isMobileMenuOpen, setIsMobileOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const [groupName, setGroupName] = useState("");
  const [groupNameUpdatedValue, setGroupNameUpdatedValue] = useState("");

  useEffect(() => {
    setGroupName("Group Name");
    setGroupNameUpdatedValue("Group Name");
    return () => {
      setGroupName("");
      setGroupNameUpdatedValue("");
      setIsEdit(false);
    };
  }, [chatId]);

  const navigateBack = () => {
    navigate("/");
  };

  const handleMobile = () => {
    setIsMobileOpen((p) => !p);
  };
  const handleMobileClose = () => {
    setIsMobileOpen(false);
  };

  const updateGroupNameHandler = () => {
    setIsEdit(false);
    console.log("updated group name ::", groupNameUpdatedValue);
  };

  const IconBtns = (
    <>
      <Box
        sx={{
          display: { xs: "block", sm: "none" },
          position: "fixed",
          right: "1rem",
          top: "1rem",
        }}
      >
        <IconButton onClick={handleMobile}>
          <MenuIcon />
        </IconButton>
      </Box>
      <Tooltip title="back">
        <IconButton
          onClick={navigateBack}
          sx={{
            position: "absolute",
            top: "2rem",
            left: "2rem",
            bgcolor: "#212121",
            color: "white",
            "&:hover": {
              bgcolor: "#212121",
              color: "white",
              rotate: "30deg",
            },
          }}
        >
          <KeyboardBackspaceIcon />
        </IconButton>
      </Tooltip>
    </>
  );

  const GroupName = (
    <Stack
      direction={"row"}
      spacing={"1rem"}
      justifyContent={"center"}
      alignItems={"center"}
      padding={"3rem"}
    >
      {isEdit ? (
        <>
          <TextField
            value={groupNameUpdatedValue}
            onChange={(e) => setGroupNameUpdatedValue(e.target.value)}
          />
          <IconButton onClick={updateGroupNameHandler}>
            <DoneIcon />
          </IconButton>
        </>
      ) : (
        <>
          <Typography variant="h4">{groupName}</Typography>
          <IconButton onClick={() => setIsEdit(true)}>
            <EditIcon />
          </IconButton>
        </>
      )}
    </Stack>
  );

  const ButtonGroup = <Stack></Stack>;

  return (
    <Grid container height={"100vh"}>
      <Grid
        item
        sx={{ display: { xs: "none", sm: "block" } }}
        sm={4}
        bgcolor={"#212121"}
        color={"white"}
      >
        <GroupsList groups={sampleChats} chatId={chatId} />
      </Grid>
      <Grid
        item
        xs={12}
        sm={8}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          padding: "1rem 3rem",
        }}
      >
        {IconBtns}
        {groupName && (
          <>
            {GroupName}
            <Typography
              margin={"2rem"}
              alignSelf={"flex-start"}
              variant="body1"
            >
              Members
            </Typography>

            <Stack
              maxwidth={"45rem"}
              width={"100%"}
              boxSizing={"border-box"}
              padding={{ sm: "1rem", xs: "0", md: "1rem 4rem" }}
              spacing={"2rem"}
              bgcolor={"bisque"}
              height={"50vh"}
              overflow={"auto"}
            ></Stack>
          </>
        )}
      </Grid>
      <Drawer
        open={isMobileMenuOpen}
        onClose={handleMobileClose}
        sx={{
          display: { xs: "block", sm: "none" },
        }}
      >
        <Box height={"100%"} bgcolor="#212121">
          <GroupsList groups={sampleChats} chatId={chatId} />
        </Box>
      </Drawer>
    </Grid>
  );
};

const GroupsList = ({ groups = [], chatId }) => {
  return (
    <Stack>
      {groups.length > 0 ? (
        groups.map((group) => (
          <GroupListItem group={group} chatId={chatId} key={group._id} />
        ))
      ) : (
        <Typography textAlign={"center"} padding={"1rem"}>
          No Groups
        </Typography>
      )}
    </Stack>
  );
};

const GroupListItem = memo(function GroupListItem({ group, chatId }) {
  const { name, avatar, _id } = group;
  const onGroupClick = (e) => {
    if (chatId === _id) {
      // if im on group chat with id=1, and again if i click on the same chat, it should not necessarily redirect to same link again
      e.preventDefault();
    }
  };
  return (
    <Link
      to={`?group=${_id}`}
      onClick={onGroupClick}
      sx={{ color: "white", "&:hover": { bgcolor: "#bdbdbd", color: "black" } }}
    >
      <Stack direction={"row"} alignItems={"center"}>
        <AvatarCard avatar={avatar} />
        <Typography>{name}</Typography>
      </Stack>
    </Link>
  );
});

GroupListItem.propTypes = {
  chatId: PropTypes.any,
  group: PropTypes.shape({
    _id: PropTypes.any,
    avatar: PropTypes.any,
    name: PropTypes.any,
  }),
};

GroupsList.propTypes = {
  chatId: PropTypes.string,
  groups: PropTypes.array,
  w: PropTypes.string,
};

export default Groups;
