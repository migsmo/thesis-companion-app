import { Container, Paper, Title, createStyles, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  root: {
    background: 'linear-gradient(45deg, #0085FF, #00278B)',
    padding: '2px',
  },
  card: {
    left: '0',
    right: '0',
    top: '0',
    bottom: '0',
    height: '220px',
    // width: '220px',
    // [theme.fn.smallerThan('sm')]: {
    //   minWidth: 100,
    // },

    borderRadius: '5px',
    backgroundImage: `linear-gradient(0deg, #00244bff 0%, #001c3a00 100%), url('assets/rectangle64.png')`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto, cover',
    margin: 0,
    position: 'relative',
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.black,
    lineHeight: 1.2,
    fontSize: rem(32),
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    fontWeight: 700,
    textTransform: 'uppercase',
    position: 'absolute',
    bottom: 8,
    right: 16,
  },
}));

interface CardProps {
  image: string;
  title: string;
}

function ImageCards({ image, title }: CardProps) {
  const { classes } = useStyles();

  return (
    <Container className={classes.root}>
      <Paper
        shadow='md'
        p='xl'
        radius='md'
        sx={{
          backgroundImage: `linear-gradient(0deg, #00244bff 0%, #001c3a00 100%), url(${image})`,
        }}
        className={classes.card}
      >
        <div>
          <Title order={4} className={classes.category}>
            {title}
          </Title>
        </div>
      </Paper>
    </Container>
  );
}

export default ImageCards;
