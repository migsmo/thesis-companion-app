import {
  Container,
  Group,
  UnstyledButton,
  Title,
  createStyles,
  Flex,
} from "@mantine/core";
import { useRouter } from "next/router";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Exercises from "../../../data/exercises.json";

const useStyles = createStyles((theme) => ({
  root: {
    height: "100vh",
    background:
      "radial-gradient(80.865% 93.795% at 50% 0%, rgba(24, 115, 251, 0.20) 0%, rgba(2, 4, 7, 0.20) 100%), #000515",
  },
  target: {
    color: "white",
    textAlign: "center",
    height: "50px",
    fontSize: "20px",
    fontStyle: "normal",
    background: "linear-gradient(137deg, #0085FF 0%, #00278B 100%), #081B3E",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    filter: "drop-shadow(0px 0px 10px rgba(157, 211, 233, 0.30))",
    borderRadius: "40px 40px 0px 0px",
  },
  exercise: {
    background: "#081B3E",
    height: "130px",
    textAlign: "center",
    color: "white",
    fontSize: "40px",
    padding: "10px",
  },
}));

const Exercise = () => {
  const { classes } = useStyles();
  const router = useRouter();
  const slug = router.query.slug;

  const exercise =
    Exercises.find(
      (exercise) => exercise.link === "/exercise/" + router.query.slug
    ) ?? null;

  return (
    <>
      <div className={classes.root}>
        <Container fluid>
          <UnstyledButton>
            <Group
              align="center"
              spacing={0}
              onClick={() => {
                router.push("/workouts");
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
        </Container>
        <Flex justify="center" align="center" direction="row">
          <img
            src={exercise?.dummy}
            style={{
              display: "flex",
              width: "100%",
              height: "auto",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "auto, contain",
              maxWidth: "1000px",
            }}
          />
        </Flex>

        <div
          style={{
            alignContent: "bottom",
            position: "absolute",
            bottom: "0",
            width: "100%",
          }}
        >
          <div className={classes.target}> {exercise?.target}</div>
          <div className={classes.exercise}> {exercise?.name}</div>
        </div>
      </div>
    </>
  );
};

export default Exercise;
