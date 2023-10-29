import { BsFillPlayFill } from "react-icons/bs";
import Container from "./Container";

type PronounciationProps = {
  name?: string;
  phonetic?: string;
  onPlaySound?: () => void;
};

function Pronounciation({ name, phonetic, onPlaySound }: PronounciationProps) {
  return (
    <Container>
      {/* Pronounciation */}
      <div className="flex justify-between items-center">
        <div className="space-y-1">
          <h1 className="text-2xl font-[Merriweather] font-extrabold">
            {name}
          </h1>
          <p className="text-magenta">{phonetic}</p>
        </div>
        <div
          className="w-[50px] h-[50px] rounded-full bg-magenta-light flex items-center justify-center transition-all hover:ring-magenta-light hover:ring-2 active:bg-magenta"
          onClick={onPlaySound}
        >
          <BsFillPlayFill size={24} color={"#8b65a7"} />
        </div>
      </div>
    </Container>
  );
}

export default Pronounciation;
