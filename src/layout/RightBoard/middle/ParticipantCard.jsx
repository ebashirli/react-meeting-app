/* eslint-disable react/prop-types */
import cam from "./../../../assets/icons/cam.svg";
import Mic from "../../../components/Mic";

function ParticipantCard({ user }) {
  return (
    <div className="flex p-2 items-center justify-between py-[14px] pr-4">
      <div className="flex items-center gap-2">
        <img
          src={`/users/user${user.id}.png`}
          alt=""
          className="w-8 h-8 rounded-lg"
        />
        <div className="flex flex-col">
          <h6 className="text-white font-bold">{user.name}</h6>
          <p className="text-primary-500">{user.position}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        {user.role && (
          <div className="text-center py-1 px-2 rounded-[10px] text-[#2D8CFF] bg-[#2d8cff1a] border border-[#2d8cff1a] ">
            {user.role}
          </div>
        )}
        <Mic status={user.mic} className="w-4 h-4" />
        <img src={cam} alt="" />
      </div>
    </div>
  );
}

export default ParticipantCard;
