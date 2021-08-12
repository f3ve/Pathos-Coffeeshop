import { makeStyles, Typography } from '@material-ui/core';
import { MainLayout } from '../layouts';
import { useState } from 'react';
import Image from 'next/image';
import { MainButton } from '../components/buttons';

const useStyles = makeStyles(() => ({
  top: {
    height: '100vh',
    position: 'relative',
    zIndex: 1,
  },
  image: {
    position: 'absolute',
    top: -200,
    zIndex: -1,
    opacity: 1,
    filter: 'brightness(80%)',
    transition: 'opacity 0.3s ease-in',
  },
  hidden: {
    opacity: 0,
    position: 'absolute',
    top: -200,
    zIndex: -1,
  },
}));

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const styles = useStyles();

  return <MainLayout></MainLayout>;
}
