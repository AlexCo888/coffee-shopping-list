import React, { useState } from "react";
import Accordion from "./components/Accordion";
import { partners, categories, itemList } from "./utils/data";

const App = () => {
  const [displayCategory, setdisplayCategory] = useState(categories);
  const [isChecked, setIsChecked] = useState(itemList);
  const [list, setList] = useState({});

  const onHandleAccordion = (index) => {
    setdisplayCategory((prevCategoryState) => {
      return {
        ...prevCategoryState,
        [index]: {
          ...prevCategoryState[index],
          display: !prevCategoryState[index].display,
        },
      };
    });
  };

  const handleList = (event, index) => {
    const { name, checked } = event.target;
    setIsChecked((prevCheckedState) => ({
      ...prevCheckedState,
      [index]: {
        ...prevCheckedState[index],
        checked: !prevCheckedState[index].checked,
      },
    }));
    setList((prevList) => ({
      ...prevList,
      [name]: checked,
    }));
  };

  const sendList = (partner) => {
    const listArray = [];
    let partnerPhone =
      partner === "Alejandro"
        ? 5215514528815
        : partner === "Abel"
        ? 5215581183870
        : 5215585784052;
    for (const item in list) {
      listArray.push(item);
    }
    const listToString = listArray.toString(" ");
    const whatsAppList = listToString.replaceAll(",", ", ");
    const messageListUrl = `https://api.whatsapp.com/send/?phone=${partnerPhone}&text=${encodeURIComponent(
      `*Te comparto la lista de faltantes*:`
    )}%0a%0a${encodeURIComponent(whatsAppList)}
    &app_absent=0`;
    window.location.href = messageListUrl;
    setList({});
  };

  const sendToPartnerButton = partners.map((partner) => {
    return (
      <button
        key={partner}
        className="main--card--button"
        onClick={() => sendList(partner)}
      >
        Enviar a {partner}
      </button>
    );
  });

  return (
    <div>
      <div className="main--card--background">
        <main className="main--card">
          <h1>Lista de Compras y Actividades de la Cafetería</h1>
          {categories.map((category, index) => (
            <Accordion
              onHandleAccordion={onHandleAccordion}
              onHandleList={handleList}
              name={category.name}
              displayCategory={displayCategory}
              id={category.id}
              key={category.id}
              index={index}
              isChecked={isChecked}
            />
          ))}
          {sendToPartnerButton}
        </main>
      </div>
    </div>
  );
};

export default App;
