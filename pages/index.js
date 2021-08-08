import {Button, Link, makeStyles, Typography} from "@material-ui/core";
import {MainLayout} from "../layouts";

const useStyles = makeStyles(() => ({
  top: {
    height: '100vh'
  }
}))

export default function Home() {
  const styles = useStyles()
  return (
    <MainLayout>
      <section id="home" className={styles.top}>
        <Typography variant='h1'>Welcome to our restaurant</Typography>
        <nav>
          <ul>
            <li>
              <Button href="#menu">Menu</Button>
            </li>
            <li>
              <Button href="#about">About us</Button>
            </li>
            <li>
              <Button href="#contact">Contact us</Button>
            </li>
            <li>
              <Button href="https://www.google.com/maps/dir//New+York,+NY/@40.6974034,-74.1197632,11z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c24fa5d33f083b:0xc80b8f06e177fe62!2m2!1d-74.0059728!2d40.7127753" target="_blank" rel="noopener">Get directions</Button>
            </li>
          </ul>
        </nav>
      </section>
      <section id="about" className={styles.top}>
        <Typography variant='h2'>About us</Typography>
      </section>
      <section id="contact" className={styles.top}>
        <Typography variant='h2'>Contact us</Typography>
      </section>
      <section id="menu" className={styles.top}>
        <Typography variant='h2'>Menu</Typography>
      </section>
    </MainLayout>
  )
}
