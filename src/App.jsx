import BottomPanel from "./layout/BottomPanel/BottomPanel";
import MainBoard from "./layout/MainBoard/MainBoard";
import RightBoard from "./layout/RightBoard/RightBoard";
import TopPanel from "./layout/TopPanel/TopPanel";

function App() {
  return (
    <div className="text-white grid grid-rows-[80px_calc(100%-180px)_100px] grid-cols-[77%_23%] h-screen w-screen bg-[#17202e] border-collapse ">
      <TopPanel />
      <MainBoard />
      <BottomPanel />
      <RightBoard />
    </div>
  );
}

export default App;
