import { Stepper } from "react-form-stepper";

const Stepper = () => {
  return <Stepper steps={[{ label: "Step 1" }, { label: "Step 2" }]} activeStep={1} />;
};

export default Stepper;
