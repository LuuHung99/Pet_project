import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import DetailSlideBar from "./detailSlideBar";
import {
  CloseSquareTwoTone,
  HomeTwoTone,
  Html5TwoTone,
  FolderOpenTwoTone,
  CalendarTwoTone,
  DatabaseTwoTone,
  TwitterOutlined,
  LoadingOutlined,
  SmileTwoTone,
  HeartTwoTone,
  CheckCircleTwoTone,
} from "@ant-design/icons";

import "antd/dist/antd.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container_slide: {
    backgroundColor: "#e6e6e6",
    width: "auto",
    height: "720px",
  },
  iconShow: {
    // display: "none",
    margin: "30px",
    cursor: "pointer",
    fontSize: "300%",
    color: "green",
  },

  title: {
    fontSize: "24px",
    display: "flex",
    padding: "0 20px",

    justifyContent: "space-between",
  },
  sidebar: {
    width: "350px",
    height: "720px",
    backgroundColor: "#fff",
    transition: "width 2s, height 2s, transform 2s ",
    // transitionDelay: '2s',
    webkitTransform: "rotate(360deg)",
    transform: "rotate(360deg)",
    // display: 'none',
  },
  sidebar_text: {
    paddingTop: "20px",
    color: "#5b8c00",
    fontSize: "24px",
    textShadow: "1px 1px #a3a1a1",
  },
  icon_delete: {
    cursor: "pointer",
    paddingTop: "20px",
  },
  sidebar_list: {
    fontSize: "24px",
    paddingTop: "40px",
    cursor: "pointer",
  },
  sidebar_list_ul: {
    listStyleType: "none",
    lineHeight: "3",
    width: "100%",

    "& li:hover": {
      backgroundColor: "#b3b3b3",
    },
  },
  footer: {
    position: "absolute",
    bottom: "0",
    margin: "50px",
    fontSize: "200%",
  },
}));

function SlideBar(props) {
  const classes = useStyles();
  const [showList, setShowList] = useState(false);

  const ShowText = (e) => {
    //   console.log('hwe');
    setShowList(true);
  };

  const HideText = () => {
    setShowList(false);
  };
  return (
    <Router>
      <div className={classes.container_slide}>
        {!showList ? (
          <div className={classes.icon_sidebar}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 448 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
              className={classes.iconShow}
              onClick={ShowText}
            >
              <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
            </svg>
          </div>
        ) : (
          <div className={classes.sidebar}>
            <div className={classes.title}>
              <div className={classes.sidebar_text}>Coding Addict</div>
              <div className={classes.icon_delete} onClick={HideText}>
                <CloseSquareTwoTone />
              </div>
            </div>

            <div className={classes.sidebar_list}>
              <ul className={classes.sidebar_list_ul}>
                <li>
                  <Link to="/home">
                    <HomeTwoTone /> Home
                  </Link>
                </li>
                <li>
                  <Link to="/team">
                    <Html5TwoTone /> Team
                  </Link>
                </li>
                <li>
                  <Link to="/project">
                    <FolderOpenTwoTone /> Project
                  </Link>
                </li>
                <li>
                  <Link to="/calendar">
                    <CalendarTwoTone /> Calendar
                  </Link>
                </li>
                <li>
                  <Link to="/documents">
                    <DatabaseTwoTone /> Documents
                  </Link>
                </li>
              </ul>
            </div>

            <div className={classes.footer}>
              <TwitterOutlined />
              <LoadingOutlined />
              <SmileTwoTone />
              <HeartTwoTone twoToneColor="#eb2f96" />
              <CheckCircleTwoTone twoToneColor="#52c41a" />
            </div>
          </div>
        )}
      </div>
      <Switch>
        {/* <Route path="/home" /> */}

        <Route path="/team" component={DetailSlideBar} />

        <Route path="/project" component={DetailSlideBar} />

        <Route path="/calendar" component={DetailSlideBar} />

        <Route path="/documents" component={DetailSlideBar} />
      </Switch>
    </Router>
  );
}

export default SlideBar;
