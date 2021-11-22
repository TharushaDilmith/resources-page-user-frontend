import React from "react";

export default function Checkbox({ awardingBody, handleFilters }) {
  //use state to store the checked
  const [checked, setChecked] = React.useState([]);

  //handle the checkbox change
  const handleCheckboxChange = (id) => {
    const currentIndex = checked.indexOf(id);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(id);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);

    handleFilters(newChecked);
  };
  return (
    <div>
      {awardingBody.map((awardingBody) => (
        <div class="form-check py-1">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
            onChange={(e) => handleCheckboxChange(awardingBody.id)}
            checked={checked.indexOf(awardingBody.id) !== -1 ? true : false}
          />
          <label class="form-check-label" for="flexCheckDefault">
            {awardingBody.awarding_body_name}
          </label>
        </div>
      ))}
    </div>
  );
}
