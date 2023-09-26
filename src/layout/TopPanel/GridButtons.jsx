import GridButton from "./GridButton";
import icon1 from "../../assets/icons/grid1.svg";
import icon2 from "../../assets/icons/grid2.svg";
import icon3 from "../../assets/icons/grid3.svg";
import icon4 from "../../assets/icons/grid4.svg";

function GridButtons() {
  return (
    <div className=" flex items-center">
      <GridButton icon={icon1} active={true} />
      <GridButton icon={icon2} />
      <GridButton icon={icon3} />
      <GridButton icon={icon4} />
    </div>
  );
}

export default GridButtons;
