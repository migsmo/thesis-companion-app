import { Container, Paper, Title, createStyles, rem } from '@mantine/core';
import { link } from 'fs';
import router from 'next/router';

const useStyles = createStyles((theme) => ({
  root: {
    background: 'linear-gradient(45deg, #0085FF, #00278B)',
    padding: '2px',
    borderRadius: '6px',
    cursor: 'pointer'
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
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto, contain',
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
    textAlign: "right"
  },
}));

interface CardProps {
  image: string;
  title: string;
  link: string;
}

const handleLink = (link: string) => {
    router.push(link)
}

function ImageCards({ image, title, link }: CardProps) {
  const { classes } = useStyles();

  return (
    <Container className={classes.root} onClick={() => handleLink(link)}>
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
