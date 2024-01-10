function PayrollMonth() {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentDate = new Date();
  const currentMonthIndex = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const currentMonth = monthNames[currentMonthIndex];

  return { currentMonth, currentYear };
}

export default PayrollMonth;
