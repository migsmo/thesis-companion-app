import {
  BackgroundImage,
  Button,
  Group,
  Image,
  MantineTheme,
  Stack,
  createStyles,
} from '@mantine/core';
import { useRouter } from 'next/navigation';


const useStyles = createStyles((theme: MantineTheme) => ({
  root: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing.lg,
  },
  button: {
    borderRadius: theme.radius.xl,
    minWidth: 300,
    minHeight: 70,
    background: 'linear-gradient(to bottom right, #0085FF, #00198B)',
    ':hover': {
      boxShadow: '0px 0px 5px 0.1px #D6E3FF',
    },
    fontSize: 20,
    [theme.fn.smallerThan('sm')]: {
      width: '100%',
    },
  },
}));

export default function Home() {
  const { classes } = useStyles();
  const router = useRouter();
  return (
    <>
      <BackgroundImage src='/home_bg.png' className={classes.root}>
        <Stack align='center' justify='center' spacing='xl' mx='auto' my='auto'>
          <Image maw={480} radius='md' src='/ex-logo.svg' alt='ex-logo.svg' />
          <Group>
            <Button
              className={classes.button}
              onClick={() => router.push('workouts')}
            >
              WORKOUTS
            </Button>
            <Button className={classes.button}>HISTORY</Button>
          </Group>
        </Stack>
      </BackgroundImage>
    </>
  );
}
