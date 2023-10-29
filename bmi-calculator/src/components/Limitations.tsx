import Container from "./Container";

export default function Limitations() {
  return (
    <Container>
      <div className="space-y-6">
        <div className="space-y-6">
          <h1 className="text-2xl font-bold sm:text-center lg:text-left lg:text-3xl">
            Limitations of BMI
          </h1>
          <p className="text-sm leading-6 sm:text-center lg:text-left">
            Although BMI is often a practical indicator of healthy weight, it is
            not suited for every person. Specific groups should carefully
            consider their BMI outcomes, and in certain cases, the measurement
            may not be beneficial to use.
          </p>
        </div>
        <div className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-4 sm:space-y-0">
          <div className="space-y-3 p-6 rounded-lg bg-gray-100 transition-all hover:bg-gray-200">
            <h2 className="text-xl font-semibold">Gender</h2>
            <p className="text-sm leading-6">
              The development and body fat composition of girls and boys vary
              with age. Consequently, a child's age and gender are considered
              when evaluating their BMI.
            </p>
          </div>
          <div className="space-y-3 p-6 rounded-lg bg-gray-100 transition-all hover:bg-gray-200">
            <h2 className="text-xl font-semibold">Age</h2>
            <p className="text-sm leading-6">
              In aging individuals, increased body fat and muscle loss may cause
              BMI to underestimate body fat content.
            </p>
          </div>
          <div className="space-y-3 p-6 rounded-lg bg-gray-100 transition-all hover:bg-gray-200">
            <h2 className="text-xl font-semibold">Muscle</h2>
            <p className="text-sm leading-6">
              BMI may misclassify muscular individuals as overweight or obese,
              as it doesn't differentiate muscle from fat.
            </p>
          </div>
          <div className="space-y-3 p-6 rounded-lg bg-gray-100 transition-all hover:bg-gray-200">
            <h2 className="text-xl font-semibold">Pregnancy</h2>
            <p className="text-sm leading-6">
              Expectant mothers experience weight gain due to their growing
              baby. Maintaining a healthy pre-pregnancy BMI is advisable to
              minimise health risks for both mother and child.
            </p>
          </div>
          <div className="space-y-3 p-6 rounded-lg bg-gray-100 transition-all hover:bg-gray-200">
            <h2 className="text-xl font-semibold">Race</h2>
            <p className="text-sm leading-6">
              Certain health concerns may affect individuals of some Black and
              Asian origins at lower BMIs than others. To learn more, it is
              advised to discuss this with your GP or practice nurse.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
