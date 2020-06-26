import React, { useContext } from "react";
import LangContext from "./LangContext";
import { Segment } from "semantic-ui-react";
import { segmentStyle } from "./styles";

export default function() {
  const language = useContext(LangContext);

  return (
    <Segment
      style={{
        ...segmentStyle,
        color: "rgba(0,0,0,0.7)",
        textAlign: "justify",
        textJustify: "inter-word"
      }}
    >
      {language === "PL"
        ? `Wyrażam zgodę na przetwarzanie moich danych osobowych dla potrzeb
        niezbędnych do realizacji obecnych i przyszłych procesów rekrutacji
        (zgodnie z ustawą z dnia 10 maja 2018 roku o ochronie danych osobowych
        (Dz. Ustaw z 2018, poz. 1000) oraz zgodnie z Rozporządzeniem Parlamentu
        Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie
        ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w
        sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy
        95/46/WE (RODO).`
        : `I agree to the processing of personal data provided in this document
        for realising the recruitment process pursuant to the Personal Data
        Protection Act of 10 May 2018 (Journal of Laws 2018, item 1000) and in
        agreement with Regulation (EU) 2016/679 of the European Parliament and
        of the Council of 27 April 2016 on the protection of natural persons
        with regard to the processing of personal data and on the free movement
        of such data, and repealing Directive 95/46/EC (General Data Protection
          Regulation)`}
    </Segment>
  );
}
