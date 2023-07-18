import { Flex, createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
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
    textAlign: "center"
  },
  icon: {
    width: "50px",
    height: "50px",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "5px",
  },
}));

const TargetSelect = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.background}>
      <div className={classes.target}>
        <img src="./upper-icon.png" className={classes.icon} />
        UPPER BODY
      </div>
      <div className={classes.target}>
        <img src="./abs-icon.png" className={classes.icon} />
        CORE
      </div>
      <div className={classes.target}>
        <img src="./lower-icon.png" className={classes.icon} />
        LOWER BODY
      </div>
    </div>
  );
};

export default TargetSelect;
