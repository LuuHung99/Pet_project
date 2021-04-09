import React, {useState} from 'react';
import Tabs from './tabs';
import {Row, Col} from 'antd';
import 'antd/dist/antd.css';
import { Button } from 'antd';
// import {Tabs} from './tabs';

const ListTab = [ 
    {
        id: 1,
        status: 'tommy',
        title: 'Full Stack Web Developer',
        button: 'TOMMY',
        date: 'December 2015 - Present',
        text: 'I m baby woke mumblecore stumptown enamel pin. Snackwave prism pork belly, blog vape four loko sriracha messenger bag jean shorts DIY bushwick VHS.\n Banjo post-ironic hella af, palo santo craft beer gluten-free.YOLO drinking vinegar chambray pok pok selfies quinoa kinfolk pitchfork street art la croix unicorn DIY.\n Woke offal jianbing venmo tote bag, palo santo subway tile slow-carb post-ironic pug ugh taxidermy squid.YOLO drinking vinegar chambray pok pok selfies quinoa kinfolk pitchfork street art la croix unicorn DIY. Woke offal jianbing venmo tote bag, palo santo subway tile slow-carb post-ironic pug ugh taxidermy squid.'
    },
    {
        id: 2,
        status: 'bigdrop',
        title: 'Front-End Engineer',
        button: 'BIGDROP',
        date: 'May 2015 - December 2015',
        text: 'I m baby woke mumblecore stumptown enamel pin. Snackwave prism pork belly, blog vape four loko sriracha messenger bag jean shorts DIY bushwick VHS.\n Banjo post-ironic hella af, palo santo craft beer gluten-free.YOLO drinking vinegar chambray pok pok selfies quinoa kinfolk pitchfork street art la croix unicorn DIY.\n Woke offal jianbing venmo tote bag, palo santo subway tile slow-carb post-ironic pug ugh taxidermy squid.YOLO drinking vinegar chambray pok pok selfies quinoa kinfolk pitchfork street art la croix unicorn DIY. Woke offal jianbing venmo tote bag, palo santo subway tile slow-carb post-ironic pug ugh taxidermy squid.'
    },
    {
        id: 3,
        status: 'cuker',
        title: 'Engineering Intern',
        button: 'CUKER',
        date: 'May 2014 - September 2015',
        text: 'I m baby woke mumblecore stumptown enamel pin. Snackwave prism pork belly, blog vape four loko sriracha messenger bag jean shorts DIY bushwick VHS.\n Banjo post-ironic hella af, palo santo craft beer gluten-free.YOLO drinking vinegar chambray pok pok selfies quinoa kinfolk pitchfork street art la croix unicorn DIY.\n Woke offal jianbing venmo tote bag, palo santo subway tile slow-carb post-ironic pug ugh taxidermy squid.YOLO drinking vinegar chambray pok pok selfies quinoa kinfolk pitchfork street art la croix unicorn DIY. Woke offal jianbing venmo tote bag, palo santo subway tile slow-carb post-ironic pug ugh taxidermy squid.'
    },

]

function ListTabs(props) {
    const [data, setData] = useState(ListTab);

    const [showList, setShowList] = useState('tommy');


    const handleShowTommy = (id) => {
        console.log(id.target.value);
    }

    const handleShowBigdrop = (id) => {
        // console.log(id.target.value);
    }

    const handleShowCuker = (id) => {
        // console.log(id.target.value);
    }
    return (
        <>
            <h1 style={{textAlign: 'center'}}>Experience</h1>
            <hr className="hrizon"/>
            <Row  >
                <Col span={18} push={6}>
                    {data.map((e) => <Tabs items={e}/>)}
                </Col>
                <Col style={{textAlign: 'center'}} span={6} pull={18}>
                    <ul className="tab_like">
                        <li onClick={handleShowTommy}>tommy</li>
                        <li onClick={handleShowBigdrop}>bigdrop</li>
                        <li onClick={handleShowCuker}>cuker</li>
                    </ul>
                </Col>
            </Row>
            <Button style={{marginLeft: '550px', marginTop: '30px'}} type="primary" danger>
                Primary
            </Button>
        </>
    );
}

export default ListTabs;