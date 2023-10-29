import { useEffect, useState } from "react";
import RadioButton from "./RadioButton";
import RadioGroup from "./RadioGroup";

const units = {
  metric: {
    length: "cm",
    weight: "kg",
  },
  imperial: {
    length: "in",
    weight: "lbs",
  },
};

export default function Calculator() {
  const [unitSystem, setUnitSystem] = useState(units.metric);
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBmi] = useState(0);

  useEffect(() => {
    const recalculateBmi = () => {
      let heightInMeters = height / 100;
      let weightInKg = weight;

      if (unitSystem === units.imperial) {
        heightInMeters = height / 39.37;
        weightInKg = weight / 2.205;
      }

      if (heightInMeters !== 0) {
        let newBmi = weightInKg / (heightInMeters * heightInMeters);
        newBmi = Math.floor(newBmi * 100) / 100;
        setBmi(newBmi);
      }
    };

    if (height === 0) return;

    recalculateBmi();
  }, [height, weight, unitSystem]);

  return (
    <div className="space-y-4 sm:space-y-6 bg-white rounded-xl p-5 drop-shadow-2xl">
      <h2 className="text-xl font-semibold text-center">
        Enter your details below
      </h2>
      <div>
        <RadioGroup
          name="unit-system"
          horizontal={true}
          className="flex w-full justify-center space-x-10 sm:space-x-20"
        >
          <RadioButton
            name="metric"
            onClick={() => setUnitSystem(units.metric)}
          >
            Metric
          </RadioButton>
          <RadioButton
            name="imperial"
            onClick={() => setUnitSystem(units.imperial)}
          >
            Imperial
          </RadioButton>
        </RadioGroup>
      </div>
      <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
        <div className="w-full relative space-y-2">
          <label htmlFor="height" className="text-xs font-medium text-gray-500">
            Height
          </label>
          <input
            type="number"
            name="height"
            id="height"
            className="w-full border rounded p-3 px-4 font-bold"
            onChange={(e) => {
              e.currentTarget.value.length > 0
                ? setHeight(parseInt(e.currentTarget.value))
                : setHeight(0);
            }}
          />
          <span className="absolute translate-y-1/2 translate-x-[-2.5em] text-blue-500 font-bold z-10 select-none">
            {unitSystem.length}
          </span>
        </div>
        <div className="w-full relative space-y-2">
          <label htmlFor="weight" className="text-xs font-medium text-gray-500">
            Weight
          </label>
          <input
            type="number"
            name="weight"
            id="weight"
            className="w-full border rounded p-3 px-4 font-bold"
            onChange={(e) => {
              e.currentTarget.value.length > 0
                ? setWeight(parseInt(e.currentTarget.value))
                : setWeight(0);
            }}
          />
          <span className="absolute translate-y-1/2 translate-x-[-2.5em] text-blue-500 font-bold z-10 select-none">
            {unitSystem.weight}
          </span>
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#3360f9] to-[#587cff] rounded-xl text-white p-8 space-y-4 sm:flex sm:items-center sm:justify-between sm:space-y-0 lg:space-x-7">
        <div className="space-y-4 sm:w-64">
          <h3 className="font-semibold">Your BMI is...</h3>
          <h1 className="text-4xl font-bold">{bmi}</h1>
        </div>
        <p className="text-sm font-light leading-6 max-w-sm">
          Your BMI suggests you're a healthy weight. Your ideal weight is
          between <span className="font-semibold">63.3kgs - 85.2kgs</span>
        </p>
      </div>
    </div>
  );
}
