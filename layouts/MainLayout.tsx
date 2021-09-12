import { Fade } from '@material-ui/core';
import { Footer } from '../components/global';
import { Props } from 'next/script';

export default function MainLayout({ children }: Props) {
  return (
    <>
      <Fade in>
        <main>{children}</main>
      </Fade>
      <Footer />
    </>
  );
}
