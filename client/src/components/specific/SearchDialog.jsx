import {
  Dialog,
  DialogTitle,
  InputAdornment,
  List,
  Stack,
  TextField,
} from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import UserItem from "../shared/UserItem";
import useInputValidator from "../../hooks/useInputValidator";
import { useState } from "react";
import { sampleUsers } from "../../utils/sampleData";

const SearchDialog = () => {
  const [users, setUsers] = useState(sampleUsers);

  const addFriendHandler = (id) => {
    console.log(id);
  };

  const isLoadingSendFriendRequest = false;

  const {
    value: search,
    // hasError: searchHasError,
    // errorMessage: searchErrorMessage,
    valueChangeHandler: searchChangeHandler,
  } = useInputValidator([], "Search");
  return (
    <Dialog open>
      <Stack p="2rem" direction={"column"} width={"25rem"}>
        <DialogTitle textAlign={"center"}>Find People</DialogTitle>
        <TextField
          value={search}
          onChange={searchChangeHandler}
          variant="outlined"
          label=""
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Stack>
      <List>
        {users.map((user) => (
          <UserItem
            key={user._id}
            user={user}
            handler={addFriendHandler}
            handlerLoading={isLoadingSendFriendRequest}
          />
        ))}
      </List>
    </Dialog>
  );
};

export default SearchDialog;
