import React from 'react';
import {Row, Col} from 'antd';
import 'antd/dist/antd.css';
import {LeftOutlined, RightOutlined} from '@ant-design/icons';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    container: {
        margin: '0 auto',
        marginTop: theme.spacing(3),
        padding: theme.spacing(3),
        width: '640px', height: '420px',
        boxShadow: '0 4px 8px 0 rgb(0 0 0 / 20%), 0 8px 20px 0 rgb(0 0 0 / 19%);',
        textAlign: 'center'
      
    },

    circleImg: {
        width: '150px', height: '150px', borderRadius: '50%',
        backgroundColor: '#49a6e9',
        position: 'absolute', 
        right: '215px',
        top: '-5px', 
        zIndex: '-1'
    },

    img: {
        width: '150px', height: '150px', borderRadius: '50%'
    },

    infor: {
        paddingTop: '10px',
        fontSize: '18px'
     },

     names: {
     },

     direction:  {
         color: '#49a6e9'
     }, 

     text: {
        paddingTop: '5px',
        opacity: '70%'
     },

     icons: {
        fontSize: '160%',
        fontWeight: 'bold',
        color: '#49a6e9',
        cursor: 'pointer'
     },

     button: {
         paddingTop: '15px',
         color: '#49a6e9',
         cursor: 'pointer' 
     } 

  }));

function ReviewsComplete(props) {
    const classes = useStyles();
    const {items} = props;
    
    return (
        <>
            <Row className={classes.container}>
                <Col >
                    <div className={classes.circleImg}>
                    </div>
                    <div className="">
                        <img 
                            className={classes.img}
                            src={items.url}
                            alt=""  
                        >
                        </img>
                    </div>
                    <div className={classes.infor}>
                        <div className={classes.names}>
                            <b>{items.name}</b>
                        </div>
                        <div className={classes.direction}>
                            {items.direction}
                        </div>
                    </div>
                    <div className={classes.text}>
                        <p >{items.text}</p>
                    </div>
                    <div className={classes.icons}>
                        <LeftOutlined onClick={() => props.nextLeft()}/>
                        <RightOutlined onClick={() => props.nextRight()}/>
                    </div>
                    <div className={classes.button}>
                        <button  onClick={()=> props.showNext(items.id)} >Subprise me</button>
                    </div>
                </Col>
            </Row>

        </>

    );
}

export default ReviewsComplete;