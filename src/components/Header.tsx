import { useAppSelector } from 'app/hooks'
import { selectAuth } from 'features/auth/authSlice'
import { Link } from 'react-router-dom'
import { SignIn } from './SignIn'
import { SignOut } from './SignOut'

export const Header = () => {
  const auth = useAppSelector(selectAuth)

  return (
    <nav>
      <Link to="/">(logo)</Link>
      {auth.isLoggedIn === true && (
        <>
          {auth.webId} <SignOut />
        </>
      )}
      {auth.isLoggedIn === false && <SignIn />}
      {auth.isLoggedIn === undefined && <>...</>}
    </nav>
  )
}
