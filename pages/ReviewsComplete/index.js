import React, { useState } from "react";
import ReviewsComplete from "./ReviewsComplete";
import { CheckCircleTwoTone } from "@ant-design/icons";
const listReivews = [
  {
    id: 1,
    url:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    name: "Susan Smith",
    direction: "WEB DEVELOPER",
    text:
      "Im baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    url:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    name: "Anna Johnson",
    direction: "WEB DESIGNER",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    url:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    name: "Peter Jones",
    direction: "WINTERN",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag artisan narwhal.",
  },
  {
    id: 4,  
    url:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    name: "Bill Anderson",
    direction: "THE BOSS",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.",
  },
];

function Reviews(props) {
  const [data, setData] = useState(listReivews);
  const [showView, setShowView] = useState(1);

  const nextLeft = (index) => {
    const nextpre = (index = index - 1);
    if (index > 0 && index < data.length + 1) {
      setShowView(nextpre);
    } 
    else {
      setShowView(4);
    }

  };

  const nextRight = (index) => {
    const nextdcre = (index = index + 1);
    if (index > 0 && index < data.length + 1) {
      setShowView(nextdcre);
    } 
    else {
      setShowView(1);
    }

  };

  const checkNumber = (number) => {
    if(number < 0) {
      return data.length - 1;
    } else if(number > data.length - 1) {
      return 0
    }

  } 
  const handleShowNext = (index) => {
    // const randomNext = Math.floor(Math.random() * data.length);
    // console.log((randomNext));
    // if(randomNext === data.id ) {
    //  randomNext = data.id + 1;
      
    // }
    // setShowView(checkNumber(randomNext));
    
    const nextdcre = (index = index + 1);
    if (index > 0 && index < 5) {
      setShowView(nextdcre);
    } 
    else {
      setShowView(1);
    }

    console.log(index);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", paddingTop: "70px", fontSize: "40px" }}>
        <b>Our Reviews</b>
      </h1>
      <hr
        style={{ width: "130px", height: "5px", backgroundColor: "#49a6e9" }}
      ></hr>
      <div
        style={{
          position: "absolute",
          right: "800px",
          fontSize: "250%",
          top: "200px",
          left: "630px",
          zIndex: "1",
        }}
      >
        <CheckCircleTwoTone />
      </div>
      {data.map((e) => {
        if (e.id === showView)
          return (
            <ReviewsComplete
              items={e}
              key={e}
              showNext={handleShowNext}
              nextLeft={nextLeft}
              nextRight={nextRight}
            />
          );
      })}
    </div>
  );
}

export default Reviews;
