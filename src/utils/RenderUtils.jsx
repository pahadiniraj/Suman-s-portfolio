import React from "react";
import { useDispatch } from "react-redux";

export const renderTextWithParagraphs = (text) => {
  return text
    .split("\n")
    .map((paragraph, index) => <p key={index}>{paragraph}</p>);
};
