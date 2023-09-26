import Button from "../../../components/Button";
import user from "../../../assets/icons/user.svg";
import apps from "../../../assets/icons/apps.svg";
import ellipse from "../../../assets/icons/ellipse.svg";

function TopRight() {
  return (
    <div className="px-4 py-3">
      <div className="grid grid-cols-2 w-full h-full bg-primary-500/50 rounded-[10px] p-1">
        <Button className="flex justify-center text-white bg-[#2D8CFF] gap-2 px-[21px] rounded-[10px]">
          <img src={user} alt="" />
          <span>Participants</span>
        </Button>
        <Button className="flex justify-center text-white gap-2">
          <img src={apps} alt="" />
          <span>Apps</span>
          <img src={ellipse} alt="" />
        </Button>
      </div>
    </div>
  );
}

export default TopRight;

// <Button className="text-white rounded-none ">
//     <Button className="bg-[#2D8CFF]">
//      <img src={user} alt="" className="m-2" />
//      <span>Participants</span>
//     </Button>
//     <Button className="flex justify-center flex-grow">
//      <img src={apps} alt="" />
//      <span>Apps</span>
//      <img src={ellipse} alt="" />
//     </Button>
//    </Button>
