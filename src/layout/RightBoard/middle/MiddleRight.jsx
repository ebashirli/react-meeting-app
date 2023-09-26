import Chat from "./Chat";
import Divider from "./Divider";
import Participants from "./Prticipants";

function MiddleRight() {
  return (
    <div className="h-full">
      <Participants />
      <Divider />
      <Chat />
    </div>
  );
}

export default MiddleRight;
