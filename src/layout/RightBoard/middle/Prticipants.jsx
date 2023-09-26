import users from "../../../assets/constants/users";
import ParticipantCard from "./ParticipantCard";
function Participants() {
  return (
    <div className="relative h-[calc(50%-32px)] p-2 ">
      <div className=" overflow-y-scroll h-[87%] pt-2 ">
        {users.map((user) => (
          <ParticipantCard key={user.id} user={user} />
        ))}
      </div>
      <div className="flex items-center justify-evenly h-8 text-[#D1D5DB] mt-2">
        <span className="rounded-md bg-primary-500/50 p-2 py-1">Invite</span>
        <span className="rounded-md bg-primary-500/50 p-2 py-1">Mute all</span>
        <span className="rounded-md bg-primary-500/50 p-2 py-1">
          Ask to start video
        </span>
      </div>
    </div>
  );
}

export default Participants;
