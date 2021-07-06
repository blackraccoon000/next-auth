import classes from 'styles/components/starting-page/starting-page.module.css'

const StartingPageContent = (): JSX.Element => {
  // Show Link to Login page if NOT auth

  return (
    <section className={classes.starting}>
      <h1>Welcome on Board!</h1>
    </section>
  )
}

export default StartingPageContent
