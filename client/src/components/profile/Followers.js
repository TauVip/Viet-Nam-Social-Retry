import UserCard from '../UserCard'

const Followers = ({ users, setShowFollowers }) => {
  return (
    <div className='follow'>
      <div className='follow_box'>
        <h5>Followers</h5>
        <hr />
        {users.map(user => (
          <UserCard
            key={user._id}
            user={user}
            setShowFollowers={setShowFollowers}
          ></UserCard>
        ))}
      </div>
    </div>
  )
}
export default Followers
