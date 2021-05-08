import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Row, Col } from "antd";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import ListCockTails from "./listCockTails";
import SearchField from 'react-search-field';

const apiCocktail = [
    {
        id: 1,
        images: 'https://www.thecocktaildb.com/images/media/drink/vyxwut1468875960.jpg',
        name: 'GG',
        category: 'Ordinary Drink',
        info: 'Optional Alcohol',
        glass: 'Collins Glass',
        instruction: 'Pour The Galliano Liqueur Over Ice. Fill The Remainder Of The Glass With Ginger Ale And Thats All There Is To It. You Now Have A Your Very Own GG.',
        ingredients: ' Galliano Ginger Ale Ice'
    },
    {
        id: 2,
        images: 'https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg',
        name: 'A11',
        category: 'Ordinary Drink',
        info: 'Alcoholic',
        glass: 'Cocktail glass',
        instruction: 'Pour The Galliano Liqueur Over Ice. Fill The Remainder Of The Glass With Ginger Ale And Thats All There Is To It. You Now Have A Your Very Own GG.',
        ingredients: ' Galliano Ginger Ale Ice'
    },
    {
        id: 3,
        images: 'https://www.thecocktaildb.com/images/media/drink/tqpvqp1472668328.jpg',
        name: 'ABC',
        category: 'Ordinary Drink',
        info: 'Alcoholic',
        glass: 'Ordinary Drink',
        instruction: 'Pour The Galliano Liqueur Over Ice. Fill The Remainder Of The Glass With Ginger Ale And Thats All There Is To It. You Now Have A Your Very Own GG.',
        ingredients: ' Galliano Ginger Ale Ice'
    },
    {
        id: 4,
        images: 'https://www.thecocktaildb.com/images/media/drink/apneom1504370294.jpg',
        name: 'Kir',
        category: 'Wine Glass',
        info: 'Alcoholic',
        glass: 'Wine Glass',
        instruction: 'Pour The Galliano Liqueur Over Ice. Fill The Remainder Of The Glass With Ginger Ale And Thats All There Is To It. You Now Have A Your Very Own GG.',
        ingredients: ' Galliano Ginger Ale Ice'
    },
    {
        id: 5,
        images: 'https://www.thecocktaildb.com/images/media/drink/xxsxqy1472668106.jpg',
        name: '747',
        category: 'Shot glass',
        info: 'Alcoholic',
        glass: 'Shot glass',
        instruction: 'Pour The Galliano Liqueur Over Ice. Fill The Remainder Of The Glass With Ginger Ale And Thats All There Is To It. You Now Have A Your Very Own GG.',
        ingredients: ' Galliano Ginger Ale Ice'
    },
    {
        id: 6,
        images: 'https://www.thecocktaildb.com/images/media/drink/rtpxqw1468877562.jpg',
        name: '252',
        category: 'Shot glass',
        info: 'Alcoholic',
        glass: 'Shot glass',
        instruction: 'Pour The Galliano Liqueur Over Ice. Fill The Remainder Of The Glass With Ginger Ale And Thats All There Is To It. You Now Have A Your Very Own GG.',
        ingredients: ' Galliano Ginger Ale Ice'
    },
    {
        id: 7,
        images: 'https://www.thecocktaildb.com/images/media/drink/l3cd7f1504818306.jpg',
        name: 'Ace',
        category: 'Martini Glass',
        info: 'Alcoholic',
        glass: 'Shot glass',
        instruction: 'Pour The Galliano Liqueur Over Ice. Fill The Remainder Of The Glass With Ginger Ale And Thats All There Is To It. You Now Have A Your Very Own GG.',
        ingredients: ' Galliano Ginger Ale Ice'
    },
    
]

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "0 100px",
    
  },
  
  searchBar: {
      height: "150px",
      width: "640px",
      backgroundColor: "#fff",
      boxShadow: '0 4px 8px 0 rgb(0 0 0 / 20%), 0 8px 20px 0 rgb(0 0 0 / 19%)',
      marginTop: '100px',
      margin: '0 auto'

  },

  title_search: {
    marginTop: '30px',
    marginLeft: '30px',
    fontSize: '20px',
    color: 'green',
    fontWeight: 'bold'
  },

  input_search: {
    marginTop: '20px',
    width: '190%',
    height: '25%',
    marginLeft: '30px',
    backgroundColor: '#eae7e6',
    border: 'none'
  },
  listCockTails: {
      paddingTop: '30px',
      display: 'grid',
      gridColumnGap: '30px',
      gridTemplateColumns: 'auto auto auto'
  }
}));

function HomePage(props) {
  const classes = useStyles();
  const [data, setData] = useState(apiCocktail);
  const [isSuccess, setIsSuccess] = useState(true);


  // const handleShowDetail = (id) => {
  //   setIsSuccess(false);
    

  // }
  return (
    <div>
      <div className={classes.container}>
        <Row className={classes.searchBar}>
          <Col>
            <div className={classes.title_search}>Search Your Favorite Cocktail</div>
            <input className={classes.input_search}></input>
          </Col>
        </Row>
        <div style={{textAlign: "center", fontSize: '20px', fontWeight: "bold", marginTop: '40px'}}><h1>Cocktails</h1></div>
        <div className={classes.listCockTails}>
            {data.map((e, idx) => <ListCockTails item={e} key={idx}  />)}
        </div>
      </div>
      </div>
      
  );
}

export default HomePage;
