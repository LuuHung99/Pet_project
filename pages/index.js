import Link from "next/link";
import Head from "next/head";
import { Row, Col } from "reactstrap";

function HomePage() {
  return (
    <>
      <div className="home_container">
        <Head>
          <title>React Project || LVH Dev</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link
            rel="icon"
            href="images/download.png"
            type="image/png"
            sizes="60"
          />
        </Head>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            marginTop: "100px",
            marginLeft: "100px",
          }}
        >
          <div style={{ width: "550px" }}>
            <h1 style={{ fontSize: "46px" }}>React Projects</h1>
            <p style={{ fontSize: "22px", color: "black" }}>
              Projects are the most practical way to learn any language,
              andReact is no exception. Solidify your knowledge of{" "}
              <i
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  letterSpacing: 1.5,
                }}
              >
                React
              </i>{" "}
              by creating these cool projects.
            </p>
            <button
              style={{
                textTransform: "uppercase",
                border: "none",
                backgroundColor: "#60dbfb",
                width: "auto",
                height: "auto",
                fontSize: "20px",
                padding: "15px",
                borderRadius: "4px",
              }}
            >
              <a href="https://github.com/LuuHung99" style={{ color: "#000" }}>
                join the project
              </a>
            </button>
          </div>
          <div>
            <img
              src="/images/download.svg"
              alt=""
              style={{ width: "80%", height: "80%" }}
            />
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#e2e8f0",
          width: "100%",
          height: "auto",
          marginTop: "50px",
        }}
      >
        <div style={{ textAlign: "center", paddingTop: "60px" }}>
          <h1 style={{ fontSize: "40px", letterSpacing: 4 }}>Basic Projects</h1>
          <hr
            style={{
              width: "150px",
              height: "3px",
              backgroundColor: "#60dbfb",
              border: "none",
              marginTop: "-10px",
            }}
          />
        </div>
        <div className="basic_project">
          <ul>
            <Row
              style={{
                display: "flex",
                justifyContent: "space-around",
                margin: "80px",
              }}
            >
              <Col span={8}>
                <li>
                  <img src="/images/1.webp" alt="" />
                  <Link href="/ReminderComplete">
                    <a>ReminderComplete </a>
                  </Link>
                </li>
              </Col>
              <Col span={8}>
                <li>
                  <img src="/images/2.webp" alt="" />
                  <Link href="/ToursComplete">
                    <a>ToursComplete</a>
                  </Link>
                </li>
              </Col>
              <Col span={8}>
                <li>
                  <img src="/images/3.webp" alt="" />
                  <Link href="/ReviewsComplete">
                    <a>ReviewsComplete</a>
                  </Link>
                </li>
              </Col>
            </Row>
            <Row
              style={{
                display: "flex",
                justifyContent: "space-around",
                margin: "80px",
              }}
            >
              <Col span={8}>
                <li>
                  <img src="/images/4.webp" alt="" />
                  <Link href="/Accordion">
                    <a>Accordion</a>
                  </Link>
                </li>
              </Col>
              <Col span={8}>
                <li>
                  <img src="/images/5.webp" alt="" />
                  <Link href="/OurMenu">
                    <a>OurMenus</a>
                  </Link>
                </li>
              </Col>
              <Col span={8}>
                <li>
                  <img src="/images/6.webp" alt="" />
                  <Link href="/Tabs">
                    <a>Tabs</a>
                  </Link>
                </li>
              </Col>
            </Row>

            <Row
              style={{
                display: "flex",
                justifyContent: "space-around",
                margin: "80px",
              }}
            >
              <Col span={8}>
                <li>
                  <img src="/images/7.webp" alt="" />
                  <Link href="/Reviews">
                    <a>Reviews</a>
                  </Link>
                </li>
              </Col>
              <Col span={8}>
                <li>
                  <img src="/images/8.webp" alt="" />
                  <Link href="/Navbar">
                    <a>Navbar</a>
                  </Link>
                </li>
              </Col>
              <Col span={8}>
                <li>
                  <img src="/images/10.webp" alt="" />
                  <Link href="/Grocery_Bug">
                    <a>Grucery Bug</a>
                  </Link>
                </li>
              </Col>
            </Row>

            <Row
              style={{
                display: "flex",
                justifyContent: "space-around",
                margin: "80px",
              }}
            >
              <Col span={8}>
                <li>
                  <img src="/images/11.webp" alt="" />
                  <Link href="/SideBarModel">
                    <a>Slide Bar Model</a>
                  </Link>
                </li>
              </Col>
              <Col span={8}>
                <li>
                  <img src="/images/12.webp" alt="" />
                  <Link href="/Lorem">
                    <a>Lorem</a>
                  </Link>
                </li>
              </Col>
              <Col span={8}>
                <li>
                  <img src="/images/13.webp" alt="" />
                  <Link href="/StripeMenu">
                    <a>StripeMenu</a>
                  </Link>
                </li>
              </Col>
            </Row>

            {/* <li>
              <Link href="/Login">
                <a>Login</a>
              </Link>
            </li>
            <li>
              <Link href="/Register">
                <a>Register</a>
              </Link>
            </li> */}

            {/* <li>
              <Link href="/Cart">
                <a>Cart</a>
              </Link>
            </li> */}

            <Row
              style={{
                display: "flex",
                justifyContent: "space-around",
                margin: "80px",
              }}
            >
              <Col span={8}>
                <li>
                  <img src="/images/14.webp" alt="" />
                  <Link href="/Cart">
                    <a>Cart</a>
                  </Link>
                </li>
              </Col>
              <Col span={8}>
                <li>
                  <img
                    src="/images/14.webp"
                    alt=""
                    style={{ width: "350px", height: "240px" }}
                  />
                  <Link href="/Cart2">
                    <a>Cart2</a>
                  </Link>
                </li>
              </Col>
              <Col span={8}>
                <li>
                  <img
                    src="/images/15.webp"
                    alt=""
                    style={{ width: "350px", height: "240px" }}
                  />
                  <Link href="/Cocktails">
                    <a>Cocktails</a>
                  </Link>
                </li>
              </Col>
            </Row>
          </ul>
        </div>

        <div style={{ textAlign: "center", paddingTop: "60px" }}>
          <h1 style={{ fontSize: "40px", letterSpacing: 4 }}>
            Course Exclusive
          </h1>
          <hr
            style={{
              width: "150px",
              height: "3px",
              backgroundColor: "#60dbfb",
              border: "none",
              marginTop: "-10px",
            }}
          />
        </div>
        <div className="basic_project">
          <ul>
            <Row
              style={{
                display: "flex",
                justifyContent: "space-around",
                margin: "80px",
              }}
            >
              <Col span={8}>
                <li>
                  <img src="/images/16.webp" alt="" />
                  <Link href="/RandomPerSonuseEffect">
                    <a>Random Person</a>
                  </Link>
                </li>
              </Col>
              <Col span={8}>
                <li>
                  <img src="/images/17.webp" alt="" />
                  <Link href="/PaginationUser">
                    <a>Pagination</a>
                  </Link>
                </li>
              </Col>
              <Col span={8}>
                <li>
                  <img src="/images/18.webp" alt="" />
                  <Link href="/StockPhotos">
                    <a>StockPhotos</a>
                  </Link>
                </li>
              </Col>
            </Row>

            <Row
              style={{
                display: "flex",
                justifyContent: "space-around",
                margin: "80px",
              }}
            >
              <Col span={8}>
                <li>
                  <img src="/images/19.webp" alt="" />
                  <Link href="/DarkMode">
                    <a>DarkMode</a>
                  </Link>
                </li>
              </Col>
              <Col span={8}>
                <li>
                  <img src="/images/20.webp" alt="" />
                  <Link href="/SearchFilmUseffect">
                    <a>Movies DB</a>
                  </Link>
                </li>
              </Col>
              <Col span={8}>
                <li>
                  <img src="/images/21.webp" alt="" />
                  <Link href="/SearchHakerNewsEffect">
                    <a> Haker News </a>
                  </Link>
                </li>
              </Col>
            </Row>

            <Row
              style={{
                display: "flex",
                justifyContent: "space-around",
                margin: "80px",
              }}
            >
              <Col span={8}>
                <li>
                  <img src="/images/22.webp" alt="" />
                  <Link href="/Quiz">
                    <a>Quiz</a>
                  </Link>
                </li>
              </Col>
            </Row>
          </ul>
        </div>

        <div style={{ textAlign: "center", paddingTop: "60px" }}>
          <h1 style={{ fontSize: "40px", letterSpacing: 4 }}>
            Bonus Experience
          </h1>
          <hr
            style={{
              width: "150px",
              height: "3px",
              backgroundColor: "#60dbfb",
              border: "none",
              marginTop: "-10px",
            }}
          />
        </div>
        <ul style={{listStyleType: 'none', fontSize: "20px", display: "flex", flexDirection: 'column' ,justifyContent: "center", alignItems: 'center'}}>
          <li>
            <Link href="/SearchHackerNews">
              <a>SearchHackerNews</a>
            </Link>
          </li>

          <li>
            <Link href="/UseReducer">
              <a>UseReducer</a>
            </Link>
          </li>
          <li>
            <Link href="/movies">
              <a>Movies</a>
            </Link>
          </li>

          {/* 
          <li>
            <Link href="/redux-v2">
              <a>Redux-v2</a>
            </Link>
          </li> */}
          <li>
            <Link href="/weather">
              <a>Weather</a>
            </Link>
          </li>

          <li>
            <Link href="/searchFilm-saga">
              <a>SearchFilm-saga</a>
            </Link>
          </li>

          <li>
            <Link href="/useContact">
              <a>useContact</a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default HomePage;
