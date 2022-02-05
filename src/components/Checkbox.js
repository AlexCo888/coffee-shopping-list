import React from "react";

const Checkbox = ({ name, label, onHandleList, i, isChecked }) => {
  return (
    <div className="list--input">
      <label>
        <input
          type="checkbox"
          name={name}
          id={name}
          onChange={(event) => onHandleList(event, i)}
          checked={isChecked[i].checked}
        />
        <span>{label}</span>
      </label>
    </div>
  );
};

export default Checkbox;
