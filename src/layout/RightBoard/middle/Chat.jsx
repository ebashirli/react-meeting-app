import ChatCard from "./ChatCard";

const chats = [
  {
    id: 0,
    from: "Marry",
    to: "Everyone",
    time: "05:32 PM",
    content: <p className="text-[#D1D5DB] px-3 py-2">Hi there, how are you?</p>,
  },
  {
    id: 0,
    from: "you",
    to: "Everyone",
    time: "05:32 PM",
    content: (
      <p className="text-[#D1D5DB] px-3 py-2 ">
        I am great,Thanks!
        <br />
        How are you?
      </p>
    ),
  },
  {
    id: 0,
    from: "Marry",
    to: "Everyone",
    time: "05:32 PM",
    content: (
      <p className="text-[#D1D5DB] px-3 py-2">
        Fine thanks. Can you send me my newest workout schedule?
      </p>
    ),
  },
  {
    id: 0,
    from: "you",
    to: "Everyone",
    time: "05:32 PM",
    content: (
      <div className="flex gap-2">
        <img src="/document.svg" alt="" />{" "}
        <div>
          <p className="text-[#D1D5DB] px-3 py-2">workout schedule.xlsx</p>
          <p>43 Kb</p>
        </div>
      </div>
    ),
  },
];

function Chat() {
  return (
    <div className="h-[50%] overflow-y-scroll p-4">
      {chats.map((chat) => (
        <ChatCard chat={chat} key={chat.id} />
      ))}
    </div>
  );
}

export default Chat;
