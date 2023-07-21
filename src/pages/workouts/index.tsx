import ImageCards from "@/components/image-cards/image-cards";
import {
  Container,
  Grid,
  Group,
  MantineTheme,
  Title,
  UnstyledButton,
  createStyles,
} from "@mantine/core";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Exercises from "../../../data/exercises.json"

const exercises = Exercises

const useStyles = createStyles((theme: MantineTheme) => ({
  root: {
    minHeight: "100vh",
    backgroundColor: "#000515",
    backgroundImage:
      "radial-gradient(ellipse at center top, rgba(24, 115, 251, 0.2) 0%, rgba(2, 3, 7, 0.2) 100%)",
    paddingTop: theme.spacing.lg,
  },
  grid: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: theme.spacing.lg,
  },
  background: {
    height: "7rem",
    backgroundColor: "#131723",
    position: "sticky",
    bottom: "0",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  target: {
    color: "#FFFFFF",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    cursor: "pointer",
  },
  title: {
    opacity: "0.800000011920929",
  },
  icon: {
    width: "50px",
    height: "50px",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "5px",
  },
  test: {
    backgroundImage: "url(./ellipsis.png);",
  },
}));

function Workouts() {
  const { classes } = useStyles();
  const router = useRouter();

  const [target, setTarget] = useState("Core");

  return (
    <>
      <Container className={classes.root} fluid>
        <UnstyledButton>
          <Group
            align="center"
            spacing={0}
            onClick={() => {
              router.push("/");
            }}
            mt={50}
          >
            <PlayArrowIcon
              htmlColor="white"
              style={{ transform: "rotate(180deg)" }}
              fontSize="large"
            />
            <Title order={2} color="white">
              BACK
            </Title>
          </Group>
        </UnstyledButton>

        <Grid className={classes.grid} gutter={30}>
          {exercises
            .filter((exercise) => exercise.target === target)
            .map((exercise, index) => (
              <Grid.Col xl={3} sm={4} xs={6} key={index}>
                <ImageCards image="/elbow-planks.png" title={exercise.name} link={exercise.link} />
              </Grid.Col>
            ))}
        </Grid>
      </Container>

      <div className={classes.background}>
        <div onClick={() => setTarget("Upper Body")} className={classes.target}>
          <img src="./upper-icon.png" className={classes.icon} />
          <div className={classes.title}>UPPER BODY</div>
        </div>
        <div onClick={() => setTarget("Core")} className={classes.target}>
          <img src="./abs-icon.png" className={classes.icon} />
          <div className={classes.title}>CORE</div>
        </div>
        <div onClick={() => setTarget("Lower Body")} className={classes.target}>
          <img src="./lower-icon.png" className={classes.icon} />
          <div className={classes.title}>LOWER BODY</div>
        </div>
      </div>
    </>
  );
}

export default Workouts;
