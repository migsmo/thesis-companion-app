import TargetSelect from "@/components/TargetSelect";
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

const exercises = [
  { name: "Sumo Squat", target: "Lower Body" },
  { name: "Static Lunge (L)", target: "Lower Body" },
  { name: "Static Lunge (R)", target: "Lower Body" },
  { name: "Elbow Planks", target: "Core" },
  { name: "Side Planks (L)", target: "Core" },
  { name: "Side Planks (R)", target: "Core" },
  { name: "Superman Hold", target: "Upper Body" },
  { name: "High Plank", target: "Core" },
  { name: "Glute Bridge", target: "Lower Body" },
  { name: "Single Leg Glute Bridge (L)", target: "Lower Body" },
  { name: "Single Leg Glute Bridge (R)", target: "Lower Body" },
  { name: "Straight Bridge", target: "Lower Body" },
  { name: "Easy Side Planks (L)", target: "Core" },
  { name: "Easy Side Planks (R)", target: "Core" },
  { name: "Bird Dog (L)", target: "Lower Body" },
  { name: "Bird Dog (R)", target: "Lower Body" },
  { name: "Pushup Hold", target: "Upper Body" },
];

const useStyles = createStyles((theme: MantineTheme) => ({
  root: {
    minHeight: "100vh",
    backgroundColor: "#000515",
    backgroundImage:
      "radial-gradient(ellipse at center top, rgba(24, 115, 251, 0.2) 0%, rgba(2, 3, 7, 0.2) 100%)",
  },
  grid: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: theme.spacing.lg,
  },
}));

function Workouts() {
  const { classes } = useStyles();
  const router = useRouter();

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

        <Grid className={classes.grid} gutter={50}>
          {exercises.filter((exercise) => exercise.target === 'Lower Body').map((exercise, index) => (
            <Grid.Col xl={3} sm={4} xs={6} key={index}>
            <ImageCards image="/elbow-planks.png" title={exercise.name} />
          </Grid.Col>
          ))}
        </Grid>

        <TargetSelect />
      </Container>
    </>
  );
}

export default Workouts;
