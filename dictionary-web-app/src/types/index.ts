export type License = {
  name: string;
  url: string;
};

export type Definition = {
  antonyms: string[];
  definition: string;
  synonyms: string[];
};

export type Meaning = {
  antonyms: string[];
  definitions: Definition[];
  partOfSpeech: string;
  synonyms: string[];
};

export type Phonetic = {
  text: string;
  audio: string;
  sourceUrl?: string;
  license?: License;
};

export type KeywordInfo = {
  license: License;
  meanings: Meaning[];
  phonetic: string;
  phonetics: Phonetic[];
  sourceUrls: string[];
  word: string;
};
