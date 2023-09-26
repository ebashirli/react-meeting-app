import upArrow from "../../assets/icons/up-arrow.svg";
import Button from "../../components/Button";
import Mic from "../../components/Mic";

// eslint-disable-next-line react/prop-types
function ButtomCenterButton({ name }) {
  if (name === "line") return <Line />;
  return (
    <Button>
      {name === "mic" ? (
        <Mic />
      ) : (
        <img src={`/buttomIcons/${name}.svg`} alt="" />
      )}
      {name === "grid" && <img src={upArrow} alt="" />}
    </Button>
  );
}

export default ButtomCenterButton;

function Line() {
  return <div className="h-8 border border-primary-500/50 "></div>;
}
