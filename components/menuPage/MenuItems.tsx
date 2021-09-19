import { Container, Grid, makeStyles, Typography } from '@material-ui/core';
import { Border } from '../global';
import { MenuData } from '../../constants';

const useStyles = makeStyles(() => ({
  itemList: {
    listStyle: 'none',
    padding: '0 0 0 10px',
  },
}));

export default function MenuItems() {
  const styles = useStyles();

  return (
    <Container maxWidth='md'>
      <Grid
        container
        wrap='wrap'
        direction='row'
        justifyContent='space-between'
        style={{ marginBottom: 50 }}
        spacing={4}
      >
        {MenuData.map((section, index) => (
          <Grid item key={index} component='section'>
            <Typography variant='h3'>{section.title}</Typography>
            <Border width={285} maxWidth={285} marginBottom={0} />
            <ul className={styles.itemList}>
              {section.items.map((item, i) => (
                <li key={`${section.title}-item-${i}`}>
                  <Typography variant='body1'>{item.name}</Typography>
                </li>
              ))}
            </ul>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
