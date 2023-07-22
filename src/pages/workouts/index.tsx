import ImageCards from "@/components/image-cards/image-cards";
import {
  Box,
  Container,
  Grid,
  Group,
  MantineTheme,
  Title,
  UnstyledButton,
  createStyles,
  Image,
} from "@mantine/core";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Exercises from "../../../data/exercises.json";

const exercises = Exercises;

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
    justifyContent: "center",
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
  selectedIcon: {
    width: "60px",
    height: "60px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  selected: {
    width: "140px",
    height: "140px",
    background:
      "linear-gradient(137deg, #0085FF 0%, #00278B 100%), linear-gradient(180deg, #D9D9D9 0%, rgba(217, 217, 217, 0.00) 100%)",
    borderRadius: "100px",
    filter: "drop-shadow(0px 0px 13px rgba(54, 205, 233, 0.20))",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
    marginBottom: "80px",
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
                <ImageCards
                  image="/elbow-planks.png"
                  title={exercise.name}
                  link={exercise.link}
                />
              </Grid.Col>
            ))}
        </Grid>
      </Container>

      <Box className={classes.background}>
        {target === "Upper Body" ? (
          <Box
            className={classes.selected}
            w={{ base: "100px", sm: "140px" }}
            h={{ base: "100px", sm: "140px" }}
          >
            <Box
              onClick={() => setTarget("Upper Body")}
              className={classes.target}
            >
              <img src="./upper-icon.png" className={classes.selectedIcon} />
            </Box>
          </Box>
        ) : (
          <Box
            onClick={() => setTarget("Upper Body")}
            className={classes.target}
          >
            <img src="./upper-icon.png" className={classes.icon} />
            <Box className={classes.title}>UPPER BODY</Box>
          </Box>
        )}
        {target === "Core" ? (
          <Box
            className={classes.selected}
            w={{ base: "100px", sm: "140px" }}
            h={{ base: "100px", sm: "140px" }}
          >
            <Box onClick={() => setTarget("Core")} className={classes.target}>
              <img src="./abs-icon.png" className={classes.selectedIcon} />
            </Box>
          </Box>
        ) : (
          <Box onClick={() => setTarget("Core")} className={classes.target}>
            <img src="./abs-icon.png" className={classes.icon} />
            <Box className={classes.title}>CORE</Box>
          </Box>
        )}
        {target === "Lower Body" ? (
          <Box
            className={classes.selected}
            w={{ base: "100px", sm: "140px" }}
            h={{ base: "100px", sm: "140px" }}
          >
            <Box
              onClick={() => setTarget("Lower Body")}
              className={classes.target}
            >
              <img src="./lower-icon.png" className={classes.selectedIcon} />
            </Box>
          </Box>
        ) : (
          <Box
            onClick={() => setTarget("Lower Body")}
            className={classes.target}
          >
            <img src="./lower-icon.png" className={classes.icon} />
            <Box className={classes.title}>LOWER BODY</Box>
          </Box>
        )}
      </Box>
    </>
  );
}

export default Workouts;
