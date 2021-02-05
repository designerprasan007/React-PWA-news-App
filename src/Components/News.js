import {useState, useEffect} from 'react';
import {Form, Dropdown} from 'react-bootstrap';
import env from "react-dotenv";

import Card from './Card'
const News = () =>{
	const [getLang, setLang] = useState('');
	const [getTopic, setTopic] = useState('');
	const [showNews, setShowNews ] = useState([]);

	const token = env.NEWS_TOKEN;

	useEffect(() => {
		fetch(`https://gnews.io/api/v4/top-headlines?lang=en&country=in&token=${token}`)
	    .then(function (response) {
	        return response.json();
	    })
	    .then(function (data) {
	        setShowNews(data.articles);
	    });
		// eslint-disable-next-line
	}, [])

	const getNews = () =>{
		fetch(`https://gnews.io/api/v4/search?q=${getTopic}&lang=${getLang}&token=${token}`)
	    .then(function (response) {
	        return response.json();
	    })
	    .then(function (data) {
	        setShowNews(data.articles);
	    });
	}
	return(
		<div className="container">
			<div className="row pb-5">
				<div className="col-md-6 text-light">
					<Form>
					  {['radio'].map((type) => (
					    <div key={`inline-${type}`} className="mb-3">
					      <Form.Check name="Lang" inline  value="en"  onChange={(e) => setLang(e.target.value)} label="English" type={type} id={`inline-${type}-1`} />
					      <Form.Check name="Lang" inline label="Hindi"  onChange={(e) => setLang(e.target.value)} value="hi" type={type} id={`inline-${type}-2`} />
					      <Form.Check name="Lang"  value="mr" onChange={(e) => setLang(e.target.value)}
					        inline
					        label="Marathi"
					        type={type}
					        id={`inline-${type}-3`}
					      />
					    </div>
					  ))}
					</Form>
				</div>
				<div className="col-md-4">
					<Dropdown>
					  <Dropdown.Toggle variant="success" id="dropdown-basic">
					    Topics
					  </Dropdown.Toggle>
					  <Dropdown.Menu>
					    <Dropdown.Item onClick={(e) => setTopic(e.target.text)}>breaking-news</Dropdown.Item>
					    <Dropdown.Item onClick={(e) => setTopic(e.target.text)}>world</Dropdown.Item>
					    <Dropdown.Item onClick={(e) => setTopic(e.target.text)}>sports</Dropdown.Item>
					    <Dropdown.Item onClick={(e) => setTopic(e.target.text)}>business</Dropdown.Item>
					    <Dropdown.Item onClick={(e) => setTopic(e.target.text)}>technology</Dropdown.Item>
					  </Dropdown.Menu>
					</Dropdown>
				</div>
				<div className="col-md-2 pt-2">
					<button className="btn btn-primary" onClick={() => getNews()}>Search</button> 
				</div>
			</div>
			<div className="row">
				{showNews.map((news, index)=>(
					<Card news={news} key={index} />
				))}
			</div>	
		</div>
		)
}


export default News