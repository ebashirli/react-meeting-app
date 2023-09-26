import speaker from "../../assets/icons/speaker.svg";
import Button from "../../components/Button";

function Volume() {
  return (
    <Button>
      <img src={speaker} alt="" className="w-6 h-6 my-1" />
      <input type="range" min="0" max="63" step="0.5" className="my-1" />
    </Button>
  );
}

export default Volume;
