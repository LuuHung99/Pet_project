import React, { useState, useEffect } from "react";
import DetailReview from "./reviews";
import { makeStyles } from "@material-ui/core/styles";
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
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
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

const useStyles = makeStyles((theme) => ({
  container: {
    margin: "0 auto",
    marginTop: theme.spacing(10),
    padding: "0 350px",
    textAlign: "center",
    fontSize: "20px",
    // backgroundColor: '#f1f5f8'
  },
  title: {
    fontSize: "40px",
    fontWeight: "bold",
    color: "#324d67",
    paddingBottom: "40px",
  },
}));

function Reviews(props) {
  const [data, setData] = useState(listReivews);
  const [showList, setShowList] = useState(1);
  const classes = useStyles();
  useEffect(() => {
    setTimeout(() => {
      if (props.index > 0) {
        const resetAuto = showList === props.index;
        const indexs = resetAuto ? showList + 1 : setShowList(1);
        setShowList(indexs);
      }
    }, 2000);
  }, [props]);

  const showLeft = (index) => {
    const nextpre = (index = index - 1);
    if (index > 0 && index < 5) {
      setShowList(nextpre);
    } else {
      setShowList(4);
    }
    console.log(index);
  };

  const showRight = (index) => {
    const nextdcre = (index = index + 1);
    if (index > 0 && index < 5) {
      setShowList(nextdcre);
    } else {
      setShowList(1);
    }
    console.log(index);
  };

  return (
    <div className={classes.container}>
      <div className={classes.title}>/ Reviews</div>
      {data.map((e) => {
        if (e.id == showList)
          return (
            <DetailReview
              items={e}
              key={e}
              showLeft={showLeft}
              showRight={showRight}
            />
          );
      })}
    </div>
  );
}

export default Reviews;
