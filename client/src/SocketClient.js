import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { POST_TYPES } from './redux/actions/postAction'

const SocketClient = () => {
  const { auth, socket } = useSelector(state => state)
  const dispatch = useDispatch()

  // joinUser
  useEffect(() => {
    socket.emit('joinUser', auth.user._id)
  }, [auth.user._id, socket])

  // Likes
  useEffect(() => {
    socket.on('likeToClient', newPost =>
      dispatch({ type: POST_TYPES.UPDATE_POST, payload: newPost })
    )

    return () => socket.off('likeToClient')
  }, [dispatch, socket])
  useEffect(() => {
    socket.on('unLikeToClient', newPost =>
      dispatch({ type: POST_TYPES.UPDATE_POST, payload: newPost })
    )

    return () => socket.off('unLikeToClient')
  }, [dispatch, socket])

  return <></>
}
export default SocketClient
