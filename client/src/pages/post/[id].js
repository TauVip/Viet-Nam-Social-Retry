import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getPost } from '../../redux/actions/postAction'
import LoadIcon from '../../images/loading.gif'
import PostCard from '../../components/PostCard'

const Post = () => {
  const { auth, detailPost } = useSelector(state => state)
  const dispatch = useDispatch()
  const { id } = useParams()

  const [post, setPost] = useState([])

  useEffect(() => {
    dispatch(getPost({ detailPost, id, auth }))

    if (detailPost.length > 0) {
      const newArr = detailPost.filter(post => post._id === id)
      setPost(newArr)
    }
  }, [auth, detailPost, dispatch, id])

  return (
    <div className='posts'>
      {post.length === 0 && (
        <img src={LoadIcon} alt='loading' className='d-block mx-auto my-4' />
      )}

      {post.map(item => (
        <PostCard key={item._id} post={item} />
      ))}
    </div>
  )
}
export default Post
