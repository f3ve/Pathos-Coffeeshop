import { Fade } from '@material-ui/core';
import { Footer } from '../components/global';

export default function MainLayout({ children }) {
  return (
    <>
      <Fade in>
        <main>{children}</main>
      </Fade>
      <Footer />
    </>
  );
}
