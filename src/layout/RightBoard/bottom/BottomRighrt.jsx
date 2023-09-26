import Button from "../../../components/Button";

function BottomRighrt() {
  return (
    <div className="px-2">
      <div className="flex justify-between py-2">
        <Button className="bg-primary-500/50 py-1 px-2 rounded-[4px]">
          <span>Everyone</span>
          <img src="/rightArrow.svg" alt="" />
        </Button>
        <div className="flex gap-4">
          <img src="/script.svg" alt="" />
          <img src="/smiley.svg" alt="" />
        </div>
      </div>
      <div className="flex justify-between">
        <input
          type="text"
          placeholder="Message to everyone..."
          className="flex-grow bg-inherit focus:outline-none"
        />
        <Button className="bg-[#2D8CFF] p-2 rounded-lg">
          <img src="/send.svg" alt="" />
        </Button>
      </div>
    </div>
  );
}

export default BottomRighrt;
