import UserResults from '../components/users/UserResults'
import UserSearch from '../components/users/UserSearch'

function Home() {
  return (
    <>
      <h1 className='text-lg font-bold mb-6 ml-2'>Search for User</h1>
      <UserSearch />
      <UserResults />
    </>
  )
}

export default Home
