import { useEmployees, useUser } from "../App";
import { findEmployeeByEmail } from "./FindEmployee";
import { findUserRole } from "./FindUserRole";

function CurrentUser() {
  const { userEmail } = useUser();
  const { faculty, admins } = useEmployees();
  const role = findUserRole(userEmail, faculty, admins);
  const employee = findEmployeeByEmail(role, userEmail);

  return employee;
}

export default CurrentUser;
