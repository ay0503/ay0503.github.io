import MovingComponent from "react-moving-text";
const AnimationText = () => {
  return (
    <h1 className="ah-headline d-flex">
      {`I'm`}{" "}
      <MovingComponent
        type="typewriter"
        dataText={[
          "a mechanical engineer",
          "a software engineer",
          "an unabating solution seeker",
          "andrew youn"
        ]}
      />
    </h1>
  );
};
export default AnimationText;
