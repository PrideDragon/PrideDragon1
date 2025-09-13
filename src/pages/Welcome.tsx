import { Button } from "@mui/material";
import { TransalateHook } from "../hooks";

export const Welcome = () => {
  const {language, lang, changeLanguage} = TransalateHook() 

  return (
    <>
      <Button onClick={()=>changeLanguage(lang === "en" ? "es" : "en")}>Cambiar de idioma</Button>
     {language?.welcome_message}
    </>
  )
}
