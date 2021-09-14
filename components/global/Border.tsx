import { makeStyles } from '@material-ui/core';
import colors from '../../styles/colors';
import { Props } from 'next/script';

interface BorderProps extends Props {
  width: string | number;
  maxWidth?: string | number;
  marginBottom?: string | number;
}

const useStyle = makeStyles(() => ({
  border: {
    borderBottom: `2px solid ${colors.primary}`,
  },
}));

export default function Border({
  width,
  maxWidth = '100%',
  marginBottom = 0,
}: BorderProps) {
  const styles = useStyle();

  return (
    <div className={styles.border} style={{ width, maxWidth, marginBottom }} />
  );
}
