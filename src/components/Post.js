import { FaWindowClose } from "react-icons/fa";

const Post = ({post,onDelete}) => {
    return (
        <div className='post'>
            <h3>  {post.text} <FaWindowClose onClick= {() => onDelete(post.id)}/> </h3>
            <p> {post.write}</p>
            
        </div>
    )
}

export default Post
