import Calculator from "./Calculator";
import Container from "./Container";

// white: #ffffff
// light blue: #e3f4fe
// blue: #436cfa
// font: #253449
// font-subtle: #626e79

export default function Hero() {
  return (
    <div>
      <div className="hidden lg:block absolute bg-gradient-to-br from-white to-[#d3e5f9] w-2/3 h-[650px] rounded-br-[3em]"></div>
      <div className="lg:flex lg:items-center lg:pt-32 lg:max-w-6xl lg:m-auto lg:space-x-8">
        <Container className="rounded-b-[2em] bg-gradient-to-r from-[#ebf3fc] to-[#d3e5f9] lg:bg-none z-10">
          <div className="pt-14 pb-40 space-y-5 lg:pt-0 lg:pb-0 lg:flex flex-col">
            <h1 className="text-4xl font-semibold text-center px-6 lg:text-5xl lg:text-left lg:p-0">
              Body Mass <br />
              Index Calculator
            </h1>
            <p className="text-sm text-center text-[#626e79] lg:text-left leading-6">
              Better understand your weight in relation to your height using our
              body mass index (BMI) calculator. While BMI is not the sole
              determinant of healthy weight, it offers a valuable starting point
              to evaluate your overall health and well-being.
            </p>
          </div>
        </Container>
        <div className="mt-[-8em] lg:mt-0">
          <Container>
            <Calculator />
          </Container>
        </div>
      </div>
    </div>
  );
}
