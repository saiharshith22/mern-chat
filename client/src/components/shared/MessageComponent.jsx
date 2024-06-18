import { Box, Typography } from "@mui/material";
import moment from "moment";
import PropTypes from "prop-types";
import { fileFormat } from "../../lib/features";
import RenderAttachment from "./RenderAttachment";

const MessageComponent = ({ message, user }) => {
  const { sender, content, attachments = [], createdAt } = message;
  const sameSender = sender?._id == user?._id;

  const timeAgo = moment(createdAt).fromNow();

  return (
    <div
      style={{
        alignSelf: sameSender ? "flex-end" : "flex-start",
        backgroundColor: sameSender ? "white" : "black",
        color: sameSender ? "black" : "white",
        padding: "0.5rem",
        width: "fit-content",
        borderRadius: "5px",
      }}
    >
      {!sameSender && (
        <Typography color={"cyan"} fontWeight={600} variant="caption">
          {sender.name}
        </Typography>
      )}
      {attachments.length > 0 &&
        attachments.map((attachment, index) => {
          const url = attachment.url;
          const file = fileFormat(url);
          return (
            <Box key={index}>
              <a
                href={url}
                target="_blank"
                download
                style={{ color: sameSender ? "black" : "white" }}
              >
                {RenderAttachment(file, url)}
              </a>
            </Box>
          );
        })}
      {content && <Typography>{content}</Typography>}
      <Typography variant="caption" sx={{ opacity: "0.7" }}>
        {timeAgo}
      </Typography>
    </div>
  );
};

MessageComponent.propTypes = {
  message: PropTypes.shape({
    attachments: PropTypes.array,
    content: PropTypes.any,
    createdAt: PropTypes.any,
    sender: PropTypes.any,
  }),
  user: PropTypes.object,
};

export default MessageComponent;
