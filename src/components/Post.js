const Post = ({post}) => {
    return (
        <div className='post'>
            <h3>  {post.text}  </h3>
            <p> {post.write}</p>
            
        </div>
    )
}

export default Post
