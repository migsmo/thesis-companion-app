import ImageCards from '@/components/image-cards/image-cards';
import {
  Container,
  Grid,
  Group,
  MantineTheme,
  Title,
  UnstyledButton,
  createStyles,
} from '@mantine/core';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useRouter } from 'next/navigation';

const useStyles = createStyles((theme: MantineTheme) => ({
  root: {
    minHeight: '100vh',
    backgroundColor: '#000515',
    backgroundImage:
      'radial-gradient(ellipse at center top, rgba(24, 115, 251, 0.2) 0%, rgba(2, 3, 7, 0.2) 100%)',
    padding: theme.spacing.xl,
  },
  grid: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: theme.spacing.lg,
  },
}));

function Workouts() {
  const { classes } = useStyles();
  const router = useRouter();

  const columns = [...Array(10)].map((_x, index) => {
    return (
      <Grid.Col xl={3} sm={4} xs={6} key={index}>
        <ImageCards image='/elbow-planks.png' title='Elbow planks' />
      </Grid.Col>
    );
  });

  return (
    <>
      <Container className={classes.root} fluid>
        <UnstyledButton>
          <Group
            align='center'
            spacing={0}
            onClick={() => {
              router.push('/');
            }}
            mt={50}
          >
            <PlayArrowIcon
              htmlColor='white'
              style={{ transform: 'rotate(180deg)' }}
              fontSize='large'
            />
            <Title order={2} color='white'>
              BACK
            </Title>
          </Group>
        </UnstyledButton>

        <Grid className={classes.grid} gutter={50}>
          {columns}
        </Grid>
      </Container>
    </>
  );
}

export default Workouts;
