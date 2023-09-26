import BottomCenterButtons from "./ButtomCenterButtons";
import LeaveButton from "./LeaveButton";
import Volume from "./Volume";

function BottomPanel() {
  return (
    <div className="flex w-full p-4 justify-between border-t border-primary-500/50 bg-primary-800">
      <Volume />
      <BottomCenterButtons />
      <LeaveButton />
    </div>
  );
}

export default BottomPanel;
