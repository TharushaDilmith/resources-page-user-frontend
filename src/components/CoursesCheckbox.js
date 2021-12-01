import React from "react";

export default function CoursesCheckbox({ handleFilters, courses }) {
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
      {courses.map((courses) => (
        <div className="form-check py-1" key={courses.id}>
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
            onChange={(e) => handleCheckboxChange(courses.id)}
            checked={checked.indexOf(courses.id) !== -1 ? true : false}
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            {courses.course_name}
          </label>
        </div>
      ))}
    </div>
  );
}
