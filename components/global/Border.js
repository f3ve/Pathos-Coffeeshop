import { makeStyles } from '@material-ui/core';
import colors from '../../styles/colors';

const useStyle = makeStyles(() => ({
  border: {
    borderBottom: `2px solid ${colors.primary}`,
  },
}));

export default function Border({ width, maxWidth, marginBottom }) {
  const styles = useStyle();

  return (
    <div className={styles.border} style={{ width, maxWidth, marginBottom }} />
  );
}
