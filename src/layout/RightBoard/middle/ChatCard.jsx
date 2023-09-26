/* eslint-disable react/prop-types */
function ChatCard({ chat }) {
  const { from, to, time, content } = chat;
  const reverse = from !== "you" ? " flex-row-reverse" : "";
  return (
    <div className={"flex gap-3 text-[#6B7280]" + reverse}>
      <img src={`/users/chat/${from.toLowerCase()}.svg`} alt="" />
      <div className="flex flex-col flex-grow gap-1">
        <div className="flex justify-between">
          <p>
            from <span className="text-[#2D8CFF]">{from}</span> to{" "}
            <span className="text-[#2D8CFF]">{to}</span>{" "}
          </p>
          <time>{time}</time>
        </div>
        <div className="rounded-lg bg-primary-500/50 px-3 py-2">{content}</div>
      </div>
    </div>
  );
}

export default ChatCard;
