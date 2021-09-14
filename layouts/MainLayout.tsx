import { Fade, makeStyles } from '@material-ui/core';
import { Footer } from '../components/global';
import { Props } from 'next/script';

const useStyles = makeStyles(() => ({
  mainContainer: {
    minHeight: '90vh',
    paddingTop: 107,
  },

  main: {
    marginTop: 0,
  },
}));

export default function MainLayout({ children }: Props) {
  const styles = useStyles();
  return (
    <>
      <div className={styles.mainContainer}>
        <Fade in>
          <main className={styles.main}>{children}</main>
        </Fade>
      </div>
      <Footer />
    </>
  );
}
