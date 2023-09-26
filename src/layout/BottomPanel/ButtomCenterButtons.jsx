import BottomCenterButton from "./ButtomCenterButton";

const buttons = [
  "mic",
  "cam",
  "monitor",
  "record",
  "grid",
  "line",
  "hand",
  "smiley",
];

function ButtomCenterButtons() {
  return (
    <div className="flex items-center gap-4 ">
      {buttons.map((name) => (
        <BottomCenterButton key={name} name={name} />
      ))}
    </div>
  );
}

export default ButtomCenterButtons;
