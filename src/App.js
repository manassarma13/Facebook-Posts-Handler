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
    },

    ])

    const deletePost =(id) => {
      console.log('Deleted',id)
      setPosts(posts.filter((post)=> post.id !== id))
    }

  return (
    <div className="container">
        <Header/>
        {posts.length > 0 ? <Posts posts= {posts} onDelete={deletePost}/>: 'Empty feed'}
    </div>
  );
}

export default App;
