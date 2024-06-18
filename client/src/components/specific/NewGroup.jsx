import {
  Button,
  Dialog,
  DialogTitle,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import useInputValidator from "../../hooks/useInputValidator";
import { sampleUsers } from "../../utils/sampleData";
import UserItem from "../shared/UserItem";

const NewGroup = () => {
  const {
    value: groupName,
    // hasError: groupNameHasError,
    // errorMessage: groupNameErrorMessage,
    valueChangeHandler: groupNameChangeHandler,
  } = useInputValidator([], "Group Name");

  const [members, setMembers] = useState(sampleUsers);
  const [selectedMembers, setSelectedMembers] = useState([]);

  const selectMemberHandler = (id) => {
    // ex: if id=1 is added and again i click the same id, it should remove it from array. if id=1 is not present in array, it needs to append it
    setSelectedMembers((prev) =>
      prev.includes(id) ? prev.filter((curId) => curId !== id) : [...prev, id]
    );
  };
  console.log(selectedMembers);
  const submitHandler = () => {};
  const closeHandler = () => {};

  return (
    <Dialog open onClose={closeHandler}>
      <Stack p={{ xs: "1rem", sm: "2rem" }} width={"25rem"} spacing={"2rem"}>
        <DialogTitle textAlign={"center"} variant="h5">
          New Group
        </DialogTitle>
        <TextField
          value={groupName}
          onChange={groupNameChangeHandler}
          label="GroupName"
        />
        <Typography variant="body1">Members</Typography>
        <Stack>
          {members.map((user) => (
            <UserItem
              key={user._id}
              user={user}
              handler={selectMemberHandler}
              isAdded={selectedMembers.includes(user._id)}
            />
          ))}
        </Stack>
        <Stack direction={"row"} justifyContent={"space-evenly"}>
          <Button variant="contained" color="error" size="large">
            Cancel
          </Button>
          <Button variant="contained" size="large" onClick={submitHandler}>
            Create
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default NewGroup;
