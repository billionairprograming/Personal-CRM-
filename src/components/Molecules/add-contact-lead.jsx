{
  /*This is a modal that is gonna pop up when you want to add a new lead or contact */
}
{
  /* based on the checkbox the input should go to the home and to the other page as well  */
}

{
  /*This is need to be up for review. */
}

import InputField from "../Atoms/inputField";
import Buttons from "../Atoms/Buttons";
import { useState } from "react";
import { useData } from "../../context/data-context";

const Add = () => {
  const { addEntry } = useData();

  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
    isLead: false,
    isContact: false,
  });

  const handleChange = (field, value) => {
    setData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    if (!data.name || (!data.isContact && !data.isLead)) {
      alert("Please enter a name and select at least one type.");
      return;
    }

    const newEntry = {
      ...data,
      id: Date.now(),
    };

    addEntry(newEntry); // pass data up to parent/context
    document.getElementById("my_modal_1").close(); // close modal
  };

  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box">
        <label>
          <input
            type="checkbox"
            className="checkbox"
            checked={data.isContact}
            onChange={() => handleChange("isContact", !data.isContact)}
          />
          Contact
        </label>
        <label>
          <input
            type="checkbox"
            className="checkbox"
            checked={data.isLead}
            onChange={() => handleChange("isLead", !data.isLead)}
          />
          Lead
        </label>
        <InputField
          title={"name"}
          type={"text"}
          value={data.name}
          onChange={(e) => handleChange("name", e.target.value)}
        />
        <InputField
          title={"Email"}
          type={"email"}
          value={data.email}
          onChange={(e) => handleChange("email", e.target.value)}
        />
        <InputField
          title={"Phone"}
          type={"tel"}
          value={data.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
        />
        <InputField
          title={"Notes"}
          type={"text"}
          value={data.notes}
          onChange={(e) => handleChange("notes", e.target.value)}
        />
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
            <Buttons
              onClick={handleSubmit}
              className={"outline"}
              type={"button"}
            >
              <p> Submit</p>
            </Buttons>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Add;

{
  /* set up the button when something is added then it will be dircted to the right page */
}
