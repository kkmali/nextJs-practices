import Dropdown from "../core/Dropdown";
import constants from "./constants";

function Actions() {
  const {ActiondropDownMenuItems} = constants();

  return (
    <Dropdown
      className="text-green-600 text-3xl"
      DropdownTitle="..."
      DropdownItems={ActiondropDownMenuItems}
    />
  );
}

export default Actions;
