import { unstable_HistoryRouter } from "react-router-dom";

export function scrollToTop() {
    window.scrollTo({
      top: 0,
      // behavior: 'smooth' // Optional: adds smooth scrolling behavior
    });
  }

  export const utcDateToLocalDate = (utcDateString) => {
    const utcDate = new Date(utcDateString);
    const localDate = new Date(utcDate.getTime() - (utcDate.getTimezoneOffset() * 60000));
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
    const formattedDate = localDate.toLocaleDateString('en-US', options);
    return formattedDate;
  }