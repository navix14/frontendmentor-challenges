import { Meaning } from "../types";
import Container from "./Container";

type InfoProps = {
  meaning: Meaning;
};

function Info({ meaning }: InfoProps) {
  return (
    <Container>
      <div className="space-y-6">
        {/* Type of word */}
        <h2 className="font-[Merriweather] italic font-bold">
          {meaning.partOfSpeech}
        </h2>

        {/* Meaning */}
        <div className="space-y-4">
          <h2 className=" text-gray-400 dark:text-[#dbdbdb]">Meaning</h2>
          <ul className="space-y-4 text-sm leading-6">
            {meaning.definitions.map((definition) => (
              <li className="flex gap-4 text-gray-600 dark:text-[#bdbdbd]">
                <div className="shrink-0 bg-magenta w-[5px] h-[5px] rounded-full mt-[10px]"></div>
                {definition.definition}
              </li>
            ))}
          </ul>
          {meaning.synonyms.length > 0 && (
            <div className="flex gap-5">
              <h2 className="text-gray-400 dark:text-[#dbdbdb]">Synonyms</h2>
              <ul className="text-sm text-magenta font-semibold flex flex-wrap gap-3 mt-[2px]">
                {meaning.synonyms.map((synonym) => (
                  <li className="text-xs bg-magenta-light rounded-md p-1 dark:bg-magenta dark:text-[#0f0f0f]">
                    {synonym}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}

export default Info;
