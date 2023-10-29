import { ChangeEventHandler, KeyboardEventHandler } from "react";
import Container from "./Container";
import { FiSearch } from "react-icons/fi";

type SearchBarProps = {
  onTextChanged: ChangeEventHandler<HTMLInputElement>;
  onKeyDown: KeyboardEventHandler<HTMLInputElement>;
};

function SearchBar({ onTextChanged, onKeyDown }: SearchBarProps) {
  return (
    <Container>
      <div className="flex justify-center">
        <div className="w-full mx-4 relative">
          <input
            type="text"
            name="keyword"
            id="keyword"
            onChange={onTextChanged}
            onKeyDown={onKeyDown}
            className="w-full p-2 pl-3 pr-10 rounded-md font-[Merriweather] font-extrabold bg-gray-100 dark:bg-darklighter"
          />
          <FiSearch
            size={20}
            color={"#8b65a7"}
            className="absolute left-full translate-y-[-30px] translate-x-[-35px]"
          />
        </div>
      </div>
    </Container>
  );
}

export default SearchBar;
