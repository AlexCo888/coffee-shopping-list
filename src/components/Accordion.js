import React from "react";
import { itemList } from "../utils/data";
import Checkbox from "./Checkbox";

const Accordion = ({
  onHandleAccordion,
  onHandleList,
  id,
  name,
  displayCategory,
  index,
  isChecked,
}) => {
  return (
    <div
      className={`list--grid ${
        id === 9
          ? "prepared--food"
          : id === 10
          ? "maintanance--coffee-shop"
          : ""
      } `}
    >
      <h2
        className="list--category--name"
        onClick={() => onHandleAccordion(index)}
      >
        {name}
      </h2>
      {displayCategory[index].display && (
        <div>
          {itemList.map((item, index) => {
            if (item.categoryId === id) {
              return (
                <Checkbox
                  key={item.key}
                  name={item.name}
                  label={item.label}
                  onHandleList={onHandleList}
                  i={index}
                  isChecked={isChecked}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
      )}
    </div>
  );
};

export default Accordion;
