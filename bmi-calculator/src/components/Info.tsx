import { PiBowlFood, PiMoonStars } from "react-icons/pi";
import { CiDumbbell } from "react-icons/ci";
import Container from "./Container";

export default function Info() {
  return (
    <Container className="bg-[#f6f9ff] lg:rounded-2xl">
      <div className="space-y-16 sm:space-y-20 lg:flex py-8 lg:space-y-0 lg:space-x-12">
        <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-8 lg:flex-col lg:items-start lg:space-x-0 lg:space-y-6">
          <div className="flex items-center justify-center w-[42px] h-[42px] rounded-full bg-[#fcdded] flex-2 sm:w-[50px] sm:h-[50px]">
            <PiBowlFood size={20} color={"#cf4183"} />
          </div>
          <div className="space-y-4 flex-1">
            <h1 className="font-bold text-xl">Healthy eating</h1>
            <p className="text-sm leading-6">
              Healthy eating promotes weight control, disease prevention, better
              digestion, immunity, mental clarity, and mood.
            </p>
          </div>
        </div>
        <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-8 lg:flex-col lg:items-start lg:space-x-0 lg:space-y-6">
          <div className="flex items-center justify-center w-[42px] h-[42px] rounded-full bg-[#fcdded] flex-2 sm:w-[50px] sm:h-[50px]">
            <CiDumbbell size={20} color={"#cf4183"} />
          </div>
          <div className="space-y-4 flex-1">
            <h1 className="font-bold text-xl">Regular exercise</h1>
            <p className="text-sm leading-6">
              Exercise improves fitness, aids weight control, elevates mood, and
              reduces disease risk, fostering wellness and longevity.
            </p>
          </div>
        </div>
        <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-8 lg:flex-col lg:items-start lg:space-x-0 lg:space-y-6">
          <div className="flex items-center justify-center w-[42px] h-[42px] rounded-full bg-[#fcdded] flex-2 sm:w-[50px] sm:h-[50px]">
            <PiMoonStars size={20} color={"#cf4183"} />
          </div>
          <div className="space-y-4 flex-1">
            <h1 className="font-bold text-xl">Adequate sleep</h1>
            <p className="text-sm leading-6">
              Sleep enhances mental clarity, emotional stability, and physical
              wellness, promoting overall restoration and rejuvenation.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
