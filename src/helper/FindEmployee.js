export function findEmployeeByEmail(employees, userEmail) {
  // Find the employee with the given email
  const foundEmployee = Object.values(employees).find(
    (employee) => employee.email === userEmail
  );

  if (foundEmployee) {
    return foundEmployee;
  }

  // Return null or some value to indicate that the email was not found
  return null;
}
