import ProfileForm from './profile-form'
import classes from 'styles/components/profile/user-profile.module.css'

const UserProfile = (): JSX.Element => {
  // Redirect away if NOT auth

  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm />
    </section>
  )
}

export default UserProfile
