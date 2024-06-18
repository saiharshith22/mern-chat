export const sampleChats = [
  {
    avatar: ["https://www.w3schools.com/w3images/avatar2.png"],
    name: "Harry Potter",
    _id: "1",
    groupChat: false,
    members: ["1", "2"],
  },
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar2.png"],
    name: "Ron",
    _id: "2",
    groupChat: false,
    members: ["1", "2"],
  },
];

export const sampleUsers = [
  {
    avatar: ["https://www.w3schools.com/w3images/avatar2.png"],
    name: "Harry Potter",
    _id: "1",
  },
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar2.png"],
    name: "Ron",
    _id: "2",
  },
];
export const sampleNotifications = [
  {
    sender: {
      avatar: ["https://www.w3schools.com/w3images/avatar2.png"],
      name: "Harry Potter",
    },
    _id: "1",
  },
  {
    sender: {
      avatar: ["https://www.w3schools.com/howto/img_avatar2.png"],
      name: "Ron",
    },
    _id: "2",
  },
];

export const sampleMessage = [
  {
    attachments: [
      {
        public_id: "asdsad",
        url: "https://www.w3schools.com/howto/img_avatar.png",
      },
    ],
    content: "sample message from harry",
    _id: "obj_id_1",
    sender: {
      _id: "sample_id",
      name: "Harry22",
    },
    chat: "chatId",
    createdAt: "2024-02-12T10:41:30.630Z",
  },
  {
    attachments: [
      {
        public_id: "asdsad",
        url: "https://www.w3schools.com/howto/img_avatar.png",
      },
    ],
    content: "sample message from harmoine",
    _id: "obj_id_2",
    sender: {
      _id: "sample_id2",
      name: "harmoine",
    },
    chat: "chatId",
    createdAt: "2024-02-12T10:41:30.630Z",
  },
];
