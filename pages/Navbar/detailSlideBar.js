import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CaretLeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  sidebar_root: {
    // display: 'none',
    margin: "0",
    padding: "0",
    backgroundColor: "rgb(14, 30, 37)",
    width: "100%",
    height: "757px",
  },
  container: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    margin: "0 auto",
    padding: "20px",
    width: "400px",
    height: "250px",
    borderRadius: "2%",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px 0 rgb(0 0 0 / 20%), 0 8px 20px 0 rgb(0 0 0 / 19%)",
  },
  backtohome: {
    color: "green",
    cursor: "pointer",
  },
}));

function detailSlideBar(props) {
  const classes = useStyles();
  return (
    <>
      <div className={classes.sidebar_root}>
        <div className={classes.container}>
          <h1>Page Not Found</h1>
          <div className={classes.text}>
            <p>
              Looks like you've followed a broken link or entered a URL that
              doesn't exist on this site.
            </p>
          </div>

          <Link to="Navbar" className={classes.backtohome}>
            <CaretLeftOutlined />
            Back to our site
          </Link>

          <hr />
          <div>
            <p>
              If this is your site, and you weren't expecting a 404 for this
              path, please visit Netlify's "page not found" support guide for
              troubleshooting tips.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default detailSlideBar;
