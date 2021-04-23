import React, { useState } from "react";
import ToursComplete from "./ToursComplete";
import { Button } from 'antd';

const listTours = [
  {
    id: 1,
    url:
      "https://dl.airtable.com/.attachments/a0cd0702c443f31526267f38ea5314a1/2447eb7a/paris.jpg",
    title: "Best Of Paris In 7 Days Tour",
    price: "$1,995",
    text:
      "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You ll also enjoy guided neighborhood walks through the citys historic heart as well as quieter moments to slow down and savor the citys intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!",
  },
  {
    id: 2,
    url:
      "https://dl.airtable.com/.attachments/6c24084000a3777064c5200a8c2ae931/04081a3e/ireland.jpeg",
    title: "Best Of Ireland In 14 Days Tour",
    price: "$3,895",
    text:
      "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You ll also enjoy guided neighborhood walks through the citys historic heart as well as quieter moments to slow down and savor the citys intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!",
  },
  {
    id: 3,
    url:
      "https://dl.airtable.com/.attachments/27f6cbfe631e303f98b97e9dafacf25b/6bbe2a07/vienna.jpeg",
    title: "Best Of Ireland In 14 Days Tour",
    price: "$3,895",
    text:
      "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You ll also enjoy guided neighborhood walks through the citys historic heart as well as quieter moments to slow down and savor the citys intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!",
  },
  {
    id: 4,
    url:
      "https://dl.airtable.com/.attachments/3efa7aa402d49c12b8769c581a96af42/d5b641e3/italy.jpeg",
    title: "Best Of Ireland In 14 Days Tour",
    price: "$3,895",
    text:
      "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You ll also enjoy guided neighborhood walks through the citys historic heart as well as quieter moments to slow down and savor the citys intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!",
  },
  {
    id: 5,
    url:
      "https://dl.airtable.com/.attachments/3feee7a93af0f4f809312132090c9a80/58e3e8ec/poland.jpeg",
    title: "Best Of Ireland In 14 Days Tour",
    price: "$3,895",
    text:
      "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You ll also enjoy guided neighborhood walks through the citys historic heart as well as quieter moments to slow down and savor the citys intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!",
  },
];

function ListTour() {
  const [data, setData] = useState(listTours);
  const [text, setText] = useState("Our Tours");
//   const [changeTexts, setChangeTexts] = useState("text");

  function deleteItems(selected) {
    // alert('Delete successfully')
    const newList = data.filter((e) => {
      if (e.id != selected) return e;
    });

    setData(newList);
    if(newList.length < 1) {
        setText( "No Tours Left")
      }
    if(newList.length < 1) {
    }
  }

  // function changeText(e) {
  //     return e.text + "less";
  // }

  return (
    <div className="wrapper">
      <h1
        style={{
          textAlign: "center",
          marginTop: "40px",
          fontWeight: "bold",
          fontSize: "40px",
        }}
      >
        {text}
      </h1>
      {data.map((e) => (
        <ToursComplete
          item={e}
          key={e}
          deleteItems={deleteItems}
          // changeText={changeText}
        />
      ))}
    </div>
  );
}

export default ListTour;
