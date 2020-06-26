import React, { useContext } from "react";
import LangContext from "./LangContext";
import PropTypes from "prop-types";
import Item from "./Item";

export default function Historyset({ items }) {
  const language = useContext(LangContext);

  return (
    <>
      <h2>
        {language === "PL"
          ? "Praca / wykształcenie:"
          : "Employment / education history:"}
      </h2>
      {items
        .sort((item1, item2) => item1.startDate < item2.startDate)
        .map(item => (
          <Item
            start={item.startDate}
            end={item.endDate}
            name={item.name}
            desc_short={item.summary}
            desc_long={item.description}
            image={item.image}
            key={item.name}
          />
        ))}
    </>
  );
}

Historyset.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      startDate: PropTypes.string.isRequired,
      endDate: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      name: PropTypes.string.isRequired,
      summary: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired
    })
  )
};
