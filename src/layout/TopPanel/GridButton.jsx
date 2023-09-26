// eslint-disable-next-line react/prop-types
function GridButton({ icon, active }) {
  return (
    <button
      className={`hover:outline-none bg-inherit p-0 m-0 h-20 rounded-none hover:border-b-2 hover:border-b-[#2D8CFF] shadow-inner ${
        active ? " border-b-2 border-b-[#2D8CFF] shadow-inner" : ""
      }`}
    >
      <img src={icon} alt="" />
    </button>
  );
}

export default GridButton;
