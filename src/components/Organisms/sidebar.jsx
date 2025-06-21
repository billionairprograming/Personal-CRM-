import Buttons from "../Atoms/Buttons";

const SideNav = () => {
  return (
    <div>
      <Buttons />
      <Buttons />
      <Buttons
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        Add
      </Buttons>
    </div>
  );
};
export default SideNav;
