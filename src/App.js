import { useState } from "react"
import Header from "./components/Header";
import Posts from "./components/Posts";

function App() {

  const[posts, setPosts] = useState([
        {
        id: 1,
        text: 'Username.1',
        write: 'DC> Marvel'
    },

    {
        id: 2,
        text: 'Username.2',
        write: 'Coca Cola > Pepsi'
    },

    {
        id: 3,
        text: 'Username.3',
        write: 'Apple>Samsung'
    }
    ])

  return (
    <div className="container">
        
        <Header/>
        <Posts posts= {posts}/>
    </div>
  );
}

export default App;
