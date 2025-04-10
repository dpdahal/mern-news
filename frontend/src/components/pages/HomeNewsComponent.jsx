import React,{useEffect,useState} from 'react'
import axios from 'axios'

function HomeNewsComponent() {
    const [news, setNews] = useState([]);

    const getNews=()=>{
        axios.get("http://localhost:8000/news")
        .then((response)=>{
            setNews(response.data.news);
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    useEffect(() => {
        getNews();
    },[]);
    console.log(news);
    return (
        <div className='row'>
            {news && news.map((nn, index) => {
                return (

                    <div className="col-md-4" key={index}>
                <div className="card">
                    <img src={nn.image} className="card-img-top" style={{height:"200px"}} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{nn.title}</h5>
                        <p>Category: {nn.categoryId.name}
                            Posted by: {nn.userId.name}
                        </p>
                        <p className="card-text">
                            {nn.description}
                        </p>
                        <a href="#" className="btn btn-primary">
                            Go somewhere
                        </a>
                    </div>
                </div>
            </div>
                )
            
            })}
          
        </div>
    )
}

export default HomeNewsComponent
