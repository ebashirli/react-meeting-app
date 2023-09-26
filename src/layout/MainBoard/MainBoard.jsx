import verified from "../../assets/icons/verified.svg";
import mute from "../../assets/icons/mute.svg";
import Navigation from "./Navigation";
import users from "../../assets/constants/users";

function MainBoard() {
  return (
    <div className="grid grid-cols-4 gap-2 pt-6 max-w-full justify-items-center ">
      {users.map((user) => (
        <img
          key={user.name}
          src={`/users/user${user.id}.png`}
          alt=""
          className={`h-full w-auto min-h-0 min-w-0 rounded-lg border-2 ${
            user.isSpeaking ? " border-[#FDE047]" : "border-inherit"
          }`}
        />
      ))}
      <Navigation />
    </div>
  );
}

export default MainBoard;

{
  /*
 {users.map((user, i) => {
     return (
      <li
       key={user.name}
       className={`text-white flex justify-center items-center`}
      >
       <div className="relative border ">
        <img
         src={`/users/user${i + 1}.png`}
         alt=""
         className="rounded-md "
        />
        <div className="flex justify-between absolute bottom-0 w-full">
         <div className="flex bg-black bg-opacity-50 text-white px-2 py-1 rounded-tr-md rounded-bl-md border-black border-opacity-50">
          {user.verified && (
           <img src={verified} alt="" className="w-full" />
          )}
          <p>{user.name}</p>
         </div>
         {!user.unMuted && (
          <div className=" bg-black bg-opacity-50 absolute bottom-0 right-0 px-2 py-1 rounded-tl-md rounded-br-md">
           <img src={mute} alt="" className="my-1 w-4" />
          </div>
         )}
        </div>
       </div>
      </li>
     );
    })}
  
  */
}
