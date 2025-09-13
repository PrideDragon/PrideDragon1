import { useEffect, useState } from 'react'
import type { LanguageData, Translations } from '../utils';
import { translate } from '../api/translate';

export const TransalateHook = () => {
    const [lang, setLang] = useState<keyof Translations>("en");
      const [language, setLanguage] = useState<LanguageData>();
      useEffect(() => {
         getLenguaje(lang);
      }, [lang])
      
      const getLenguaje = async (lan: keyof Translations) =>{
          const language = await translate(lan);
          setLanguage(language)
      }
      
      const changeLanguage = (language: keyof Translations) => {
        setLang(language)
      }
      
  return {
    // parameters 
    language,
    lang,
    // methods
    changeLanguage
  }
}
