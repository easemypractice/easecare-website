import moment from "moment";
export const formatDate = (inputDate) => {
  const originalDate = moment(inputDate);
  const formattedDate = originalDate.format("MMM DD, YYYY");
  return formattedDate;
};

