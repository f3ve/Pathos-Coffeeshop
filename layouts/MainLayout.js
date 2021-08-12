import { Topbar, Footer } from '../components/global';
import { Fade } from '@material-ui/core';

export default function MainLayout({ children }) {
  return (
    <>
      <Topbar />
      <Fade in>
        <main>{children}</main>
      </Fade>
      <Footer />
    </>
  );
}
