import React, { useState, useEffect } from "react";
import Details from "./detailCock";

const apiCocktail = [
  {
    id: 1,
    images:
      "https://www.thecocktaildb.com/images/media/drink/vyxwut1468875960.jpg",
    name: "GG",
    category: "Ordinary Drink",
    info: "Optional Alcohol",
    glass: "Collins Glass",
    instruction:
      "Pour The Galliano Liqueur Over Ice. Fill The Remainder Of The Glass With Ginger Ale And Thats All There Is To It. You Now Have A Your Very Own GG.",
    ingredients: " Galliano Ginger Ale Ice",
  },
  {
    id: 2,
    images:
      "https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg",
    name: "A11",
    category: "Ordinary Drink",
    info: "Alcoholic",
    glass: "Cocktail glass",
    instruction:
      "Pour The Galliano Liqueur Over Ice. Fill The Remainder Of The Glass With Ginger Ale And Thats All There Is To It. You Now Have A Your Very Own GG.",
    ingredients: " Galliano Ginger Ale Ice",
  },
  {
    id: 3,
    images:
      "https://www.thecocktaildb.com/images/media/drink/tqpvqp1472668328.jpg",
    name: "ABC",
    category: "Ordinary Drink",
    info: "Alcoholic",
    glass: "Ordinary Drink",
    instruction:
      "Pour The Galliano Liqueur Over Ice. Fill The Remainder Of The Glass With Ginger Ale And Thats All There Is To It. You Now Have A Your Very Own GG.",
    ingredients: " Galliano Ginger Ale Ice",
  },
  {
    id: 4,
    images:
      "https://www.thecocktaildb.com/images/media/drink/apneom1504370294.jpg",
    name: "Kir",
    category: "Wine Glass",
    info: "Alcoholic",
    glass: "Wine Glass",
    instruction:
      "Pour The Galliano Liqueur Over Ice. Fill The Remainder Of The Glass With Ginger Ale And Thats All There Is To It. You Now Have A Your Very Own GG.",
    ingredients: " Galliano Ginger Ale Ice",
  },
  {
    id: 5,
    images:
      "https://www.thecocktaildb.com/images/media/drink/xxsxqy1472668106.jpg",
    name: "747",
    category: "Shot glass",
    info: "Alcoholic",
    glass: "Shot glass",
    instruction:
      "Pour The Galliano Liqueur Over Ice. Fill The Remainder Of The Glass With Ginger Ale And Thats All There Is To It. You Now Have A Your Very Own GG.",
    ingredients: " Galliano Ginger Ale Ice",
  },
  {
    id: 6,
    images:
      "https://www.thecocktaildb.com/images/media/drink/rtpxqw1468877562.jpg",
    name: "252",
    category: "Shot glass",
    info: "Alcoholic",
    glass: "Shot glass",
    instruction:
      "Pour The Galliano Liqueur Over Ice. Fill The Remainder Of The Glass With Ginger Ale And Thats All There Is To It. You Now Have A Your Very Own GG.",
    ingredients: " Galliano Ginger Ale Ice",
  },
  {
    id: 7,
    images:
      "https://www.thecocktaildb.com/images/media/drink/l3cd7f1504818306.jpg",
    name: "Ace",
    category: "Martini Glass",
    info: "Alcoholic",
    glass: "Shot glass",
    instruction:
      "Pour The Galliano Liqueur Over Ice. Fill The Remainder Of The Glass With Ginger Ale And Thats All There Is To It. You Now Have A Your Very Own GG.",
    ingredients: " Galliano Ginger Ale Ice",
  },
];
function Detail(props) {
  const [id, setID] = useState("1");
  const [data, setData] = useState(apiCocktail);
  useEffect(() => {
    getParams();
  }, []);

  var getParams = function () {
    const url = window.location.href.split("detail")[1];
    console.log(url);
    setID(url.slice(1));
  };

  return (
    <div>
      {data
        .filter((x) => x.id == id)
        .map((e, index) => (
          <Details item={e} key={index} />
        ))}
    </div>
  );
}

export default Detail;
