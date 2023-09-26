import live from "../../assets/icons/live.svg";
import Button from "../../components/Button";
function TimeCounter() {
  return (
    <Button className="flex gap-3 bg-primary-700/50 border py-3 px-4 border-primary-600/50 rounded-lg">
      <img src={live} alt="" />
      <time className="text-primary-300">13:03:34</time>
    </Button>
  );
}

export default TimeCounter;
