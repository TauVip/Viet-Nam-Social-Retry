import CommentDisplay from './comments/CommentDisplay'

const Comments = ({ post }) => {
  return (
    <div className='comments'>
      {post.comments.map((comment, index) => (
        <CommentDisplay key={index} comment={comment} post={post} />
      ))}
    </div>
  )
}
export default Comments