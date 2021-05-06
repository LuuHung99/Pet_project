import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  TrophyTwoTone,
  LeftCircleTwoTone,
  RightCircleTwoTone,
} from "@ant-design/icons";

const useStyles = makeStyles((theme) => ({
  img: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
  },

  infor: {
    paddingTop: "30px",
    fontSize: "18px",
  },

  direction: {
    color: "#49a6e9",
  },

  text: {
    paddingTop: "5px",
    opacity: "70%",
  },

  icons: {
    paddingLeft: '60px',
    fontSize: "160%",
    fontWeight: "bold",
    color: "#49a6e9",
    cursor: "pointer",
  },

  button: {
    paddingTop: "25px",
    color: "#49a6e9",
    cursor: "pointer",
    position: "absolute",
  },
  iconLeft: {
    position: "absolute",
    left: "350px",
    top: "370px",
  },
  iconRight: {
    position: "absolute",
    right: "350px",
    top: "370px",
  },
  iconsBottom: {
    fontSize: "300%",
  },
}));

function DetailReview(props) {
  const classes = useStyles();
  const { items } = props;
  return (
    <div>
      <div className="">
        <img className={classes.img} src={items.url} alt=""></img>
      </div>
      <div className={classes.icons}>
        <LeftCircleTwoTone
          className={classes.iconLeft}
          onClick={() => props.showLeft(items.id)}
        />
        <RightCircleTwoTone
          className={classes.iconRight}
          onClick={() => props.showRight(items.id)}
        />
      </div>
      <div className={classes.infor}>
        <div className={classes.names}>
          <b>{items.name}</b>
        </div>
        <div className={classes.direction}>{items.direction}</div>
      </div>
      <div className={classes.text}>
        <p>{items.text}</p>
      </div>
      <TrophyTwoTone className={classes.iconsBottom} />
    </div>
  );
}

export default DetailReview;
