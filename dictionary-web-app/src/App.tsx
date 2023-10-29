import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Info from "./components/Info";
import Pronounciation from "./components/Pronounciation";
import SearchBar from "./components/SearchBar";
import Source from "./components/Source";
import { KeywordInfo } from "./types";

function App() {
  const [searchText, setSearchText] = useState<string>("");
  const [info, setInfo] = useState<KeywordInfo | null>(null);

  const onTextChanged = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const onKeyDown = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${searchText}`
      );

      if (response.status === 404) {
        setInfo(null);
        return;
      }

      const data = await response.json();

      setInfo(data[0]);
    }
  };

  const onPlaySound = () => {
    const phoneticWithAudio = info?.phonetics.find(
      (phonetic) => phonetic.audio && phonetic.audio.length > 0
    );

    if (phoneticWithAudio) {
      const audio = new Audio(phoneticWithAudio.audio);
      audio.play();
    }
  };

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <>
      <Header />
      <SearchBar onTextChanged={onTextChanged} onKeyDown={onKeyDown} />
      {info && (
        <div>
          <Pronounciation
            name={info?.word}
            phonetic={info?.phonetic}
            onPlaySound={onPlaySound}
          />
          {info?.meanings.map((meaning) => (
            <Info meaning={meaning} />
          ))}
          <Source sourceUrls={info.sourceUrls} />
        </div>
      )}
    </>
  );
}

export default App;
