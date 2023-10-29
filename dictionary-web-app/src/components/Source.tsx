import Container from "./Container";
import { BiLinkExternal } from "react-icons/bi";

type SourceProps = {
  sourceUrls: string[];
};

function Source({ sourceUrls }: SourceProps) {
  return (
    <Container>
      <div className="space-y-2">
        <h3 className="text-gray-400 dark:text-[#dbdbdb]">Source</h3>
        {sourceUrls.map((url) => (
          <a
            className="flex text-xs underline items-center gap-1"
            href="https://en.wiktionary.com/wiki/keyboard"
          >
            {url}
            <BiLinkExternal color={"gray"} size={14} />
          </a>
        ))}
      </div>
    </Container>
  );
}

export default Source;
