export const formateDate = (dateStr) => {
    const dt = new Date(dateStr);
  
    // Format the date as desired (26 Apr, 2024)
  const formattedDate = dt.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
    return formattedDate;
  };
  