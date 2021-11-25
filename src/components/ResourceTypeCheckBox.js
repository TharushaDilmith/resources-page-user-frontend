import React from "react";

export default function ResourceTypeCheckBox({handleFilters, resourceType}) {
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
      {resourceType.map((resourceType) => (
        <div class="form-check py-1">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
            onChange={(e) => handleCheckboxChange(resourceType.id)}
            checked={checked.indexOf(resourceType.id) !== -1 ? true : false}
          />
          <label class="form-check-label" for="flexCheckDefault">
            {resourceType.resource_type_name}
          </label>
        </div>
      ))}
    </div>
  );
}
