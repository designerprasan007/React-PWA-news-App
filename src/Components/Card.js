const Card = ({news}) =>{
	return(
			<div className="col-md-6 col-sm-6 py-3">
				<div className="card">
				  <img src={news.image} className="card-img-top news-image" alt="..." />
				  <div className="card-body news-body">
				    <h5 className="card-title">{news.title}</h5>
				    <p className="text-primary"><small>{news.publishedAt}</small></p>
				    <p className="card-text">{news.description}</p>
				  </div>
				</div>
			</div>
		)
}


export default Card