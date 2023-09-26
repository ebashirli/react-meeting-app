import protect from "../../assets/icons/protect.svg";
import GridButtons from "./GridButtons";
import TimeCounter from "./TimeCounter";
function TopPanel() {
  return (
    <div className="bg-primary-800/50 h-20 max-w-full flex items-center justify-between relative px-4 border border-primary-700/50">
      <img src={protect} alt="" />
      <GridButtons />
      <TimeCounter />
    </div>
  );
}

export default TopPanel;
