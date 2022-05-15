import moment from 'moment'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Avatar from '../../Avatar'
import LikeButton from '../../LikeButton'
import CommentMenu from './CommentMenu'

const CommentCard = ({ comment, post }) => {
  const { auth } = useSelector(state => state)

  const [content, setContent] = useState('')
  const [readMore, setReadMore] = useState(false)
  const [isLike, setIsLike] = useState(false)

  useEffect(() => {
    setContent(comment.content)
  }, [comment.content])

  const handleLike = () => {}

  const handleUnLike = () => {}

  const styleCard = {
    opacity: comment._id ? 1 : 0.5,
    pointerEvents: comment._id ? 'inherit' : 'none'
  }

  return (
    <div className='comment_card mt-2' style={styleCard}>
      <Link to={`/profile/${comment.user._id}`} className='d-flex text-dark'>
        <Avatar src={comment.user.avatar} size='small-avatar' />
        <h6 className='mx-1'>{comment.user.username}</h6>
      </Link>

      <div className='comment_content'>
        <div className='flex-fill'>
          <div>
            <span>
              {content.length < 100
                ? content
                : readMore
                ? content + ' '
                : content.slice(0, 100) + '...'}
            </span>
            {content.length > 100 && (
              <span className='readMore' onClick={() => setReadMore(!readMore)}>
                {readMore ? 'Hide content' : 'Read more'}
              </span>
            )}
          </div>

          <div style={{ cursor: 'pointer' }}>
            <small className='text-muted mr-3'>
              {moment(comment.createdAt).fromNow()}
            </small>

            <small className='font-weight-bold mr-3'>
              {comment.likes.length} likes
            </small>

            <small className='font-weight-bold mr-3'>reply</small>
          </div>
        </div>

        <div
          className='d-flex align-items-center'
          style={{ cursor: 'pointer' }}
        >
          <LikeButton
            isLike={isLike}
            handleLike={handleLike}
            handleUnLike={handleUnLike}
          />
          <CommentMenu post={post} comment={comment} auth={auth} />
        </div>
      </div>
    </div>
  )
}
export default CommentCard