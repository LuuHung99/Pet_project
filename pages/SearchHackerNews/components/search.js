import React, {useState} from 'react';
import {Row, Col,  Input} from 'antd';
import {useDispatch} from 'react-redux';
import {getDataNews} from "../actions/index";

const { Search } = Input;

function SearchPage(props) {
    const dispatch = useDispatch();
    const [news, setNews] = useState("");

    const searchNews = (key) => {
        dispatch(getDataNews(key))
    }
    return (
        <Row style={{margin: '30px 90px'}}>
            <Col span={12}>
                <h1 style={{fontSize: '36px'}}>Search Hacker News</h1>
                <Search 
                    placeholder="Search hacker news"
                    onSearch={(val) =>searchNews(val)} 
                    enterButton 
                    value={news}
                    onChange={(e) =>setNews(e.target.value)}
                     
                     />
            </Col>
        </Row>
    );
}

export default SearchPage;