import GlobalStyles from "./Styles/GlobalStyles";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Payslip from "./pages/Payslip";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import AppLayOut from "./ui/AppLayOut";
import Announcement from "./pages/Announcement";
import EmployeeList from "./ui/EmployeeList";
import AddAnnouncement from "./ui/AddAnnouncement";
import InputDeductions from "./ui/InputDeductions";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createContext, useContext, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getEmployees } from "./services/apiEmployees";
import Spinner from "./ui/Spinner";

const EmployeeContext = createContext();
const UserContext = createContext();
function App() {
  /* LOG IN */
  const [token, setToken] = useState(null);
  const [userEmail, setUserEmail] = useState("");
  if (token) {
    sessionStorage.setItem("token", JSON.stringify(token));
  }

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      let data = JSON.parse(sessionStorage.getItem("token"));
      setToken(data);
    }
  }, []);

  /* CONTEXT API */
  const {
    isLoading,
    data: employees,
    error,
  } = useQuery({
    queryKey: ["employees"],
    queryFn: getEmployees,
  });
  if (isLoading) return <Spinner />;

  return (
    <>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyles />
      <UserContext.Provider value={{ userEmail }}>
        <EmployeeContext.Provider
          value={{
            isLoading,
            employees,
            error,
          }}>
          <BrowserRouter>
            <Routes>
              {userEmail ? (
                <Route element={<AppLayOut />}>
                  <Route index element={<Navigate replace to="payslip" />} />
                  <Route path="announcement" element={<Announcement />} />
                  <Route path="payslip" element={<Payslip />} />
                  <Route path="admin" element={<Admin />} />
                  <Route path="list" element={<EmployeeList />} />
                  <Route path="addAnnouncement" element={<AddAnnouncement />} />
                  <Route path="inputDeduction" element={<InputDeductions />} />
                </Route>
              ) : (
                ""
              )}

              <Route
                path="login"
                element={
                  <Login setToken={setToken} setUserEmail={setUserEmail} />
                }
              />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </BrowserRouter>
        </EmployeeContext.Provider>
      </UserContext.Provider>
    </>
  );
}

export function useEmployees() {
  const employeeContext = useContext(EmployeeContext);
  if (employeeContext === undefined)
    throw new Error("PostContext was used outside of the PostProvider");
  return employeeContext;
}
export function useUser() {
  const userContext = useContext(UserContext);
  if (userContext === undefined)
    throw new Error("PostContext was used outside of the PostProvider");
  return userContext;
}

export default App;
