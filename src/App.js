import { Button } from "@material-ui/core";
import { useEffect, useState } from "react";
import "./App.css";
import Chart from "./Components/Chart/Chart";
import News from "./Components/News/News";

function App() {
  const [news, setNews] = useState([]);
  useEffect(()=>{
    const url = 'http://newsapi.org/v2/everything?q=tesla&from=2021-02-03&sortBy=publishedAt&apiKey=e1d6ad8b129a4d778c90137edb223cd3';
    fetch(url)
    .then(response => response.json())
    .then(data => {
      setNews(data.articles);
      console.log(data.articles);
    });
  }, []);
  return (
    <div className="news-card">
      <Chart></Chart>
      <div>
      {
        news.map(article => <News article={article}></News>)
      }
      </div>
    </div>
  );
}

export default App;
