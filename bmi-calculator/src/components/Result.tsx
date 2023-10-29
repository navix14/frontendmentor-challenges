import Container from "./Container";
import imgUrl from "@/assets/stock.png";

export default function Result() {
  return (
    <Container>
      <div className="flex items-center space-x-20">
        <div className="space-y-6">
          <h1 className="font-bold text-2xl sm:text-center lg:text-left lg:text-3xl">
            What your BMI result means
          </h1>
          <p className="text-sm leading-6 sm:text-center lg:text-left">
            A BMI range of 18.5 to 24.9 is considered a 'healthy weight'.
            Maintaining a healthy weight may lower your chances of experiencing
            health issues later on, such as obesity and type 2 diabetes. Aim for
            a nutritious diet with reduced fat and sugar content, incorporating
            ample fruits and vegetables. Additionally, strive for regular
            physical activity, ideally about 30 minutes daily for five days a
            week.
          </p>
        </div>
        <div className="hidden lg:block translate-y-16">
          <img src={imgUrl} className="object-cover max-w-[350px]" />
        </div>
      </div>
    </Container>
  );
}
