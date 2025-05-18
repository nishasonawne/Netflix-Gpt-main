import React from 'react'
import lang from '../../utils/LanguageConstant';
import { useSelector } from 'react-redux';
import { RootState } from '../../utils/TypeScrptProps';

const GptSearchBar = () => {
  
  const languageKey = useSelector(
    (store: RootState) =>
      store?.lang?.languageSelected as "en" | "hindi" | "marathi"
  );
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[languageKey]?.placeholder}
        />
        <button className="py-2 px-4 m-4 col-span-3 bg-red-700 text-white rounded-lg">
          {lang[languageKey]?.search}
        </button>
      </form>
    </div>
  );
}

export default GptSearchBar