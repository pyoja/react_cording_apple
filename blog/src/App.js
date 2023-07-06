import "./App.css";

//1. class대신 className
//2. 변수 넣을땐 {}
//3. style 넣을땐 style={}
// font-size => fontSize 카멜케이스로 변경

function App() {
  let post = "강남 우동 맛집";

  return (
    <div className="App">
      <div className="black-nav">
        <h4>표자의 블로그</h4>
      </div>
      <h4>{post}</h4>
    </div>
  );
}

export default App;
