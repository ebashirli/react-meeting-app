import TopRight from "./top/TopRight";
import MiddleRight from "./middle/MiddleRight";
import BottomRighrt from "./bottom/BottomRighrt";
function RightBoard() {
  return (
    <div
      className="h-screen col-start-2 col-end-3 row-span-full grid grid-rows-[80px_calc(100%-180px)_100px] 
    bg-primary-800/50 
    border border-primary-500/50"
    >
      <TopRight />
      <MiddleRight />
      <BottomRighrt />
    </div>
  );
}

export default RightBoard;
