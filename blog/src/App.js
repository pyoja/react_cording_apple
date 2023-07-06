/* eslint-disable */

import { useState } from "react";
import "./App.css";

//1. class대신 className
//2. 변수 넣을땐 {}
//3. style 넣을땐 style={}
// font-size => fontSize 카멜케이스로 변경

function App() {
  let post = "강남 우동 맛집";
  let [title, setTitle] = useState([
    "마곡나루맛집추천",
    "콜드브루카페",
    "유명한 수영장",
  ]);
  let [likes, setLikes] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>React Blog</h4>
      </div>
      <div className="list">
        <h4>
          {title[0]} <span onClick={() => setLikes(likes + 1)}>👍</span>
          {likes}
        </h4>
        <p>2020-07-06</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>2020-07-06</p>
      </div>
      <div className="list">
        <h4>{title[2]}</h4>
        <p>2020-07-06</p>
      </div>
    </div>
  );
}

export default App;
