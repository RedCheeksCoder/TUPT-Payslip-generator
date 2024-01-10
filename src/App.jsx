import GlobalStyles from "./Styles/GlobalStyles";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Payslip from "./pages/Payslip";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import AppLayOut from "./ui/AppLayOut";
import Announcement from "./pages/Announcement";
import AddAnnouncement from "./ui/AddAnnouncement";
import InputDeductions from "./ui/InputDeductions";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createContext, useContext, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAdmin, getFaculty } from "./services/apiEmployees";
import Spinner from "./ui/Spinner";
import { getAnnouncements } from "./services/apiAnnouncement";
import toast, { Toaster } from "react-hot-toast";
import ChangePassword from "./ui/ChangePassword";
import EmployeeSearch from "./ui/EmployeeSearch";

/* CONTEXTS */
const EmployeeContext = createContext();
const UserContext = createContext();
const AnnouncementContext = createContext();
const SelectedUserContext = createContext();

function App() {
  /* LOG IN */
  const [token, setToken] = useState(null);
  const [userEmail, setUserEmail] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  if (token) {
    sessionStorage.setItem("token", JSON.stringify(token));
  }

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      let data = JSON.parse(sessionStorage.getItem("token"));
      setToken(data);
    }
  }, []);

  const { isLoading: isLoadingAdmin, data: admins } = useQuery({
    queryKey: ["admin"],
    queryFn: getAdmin,
  });
  const { isLoading: isLoadingFaculty, data: faculty } = useQuery({
    queryKey: ["faculty"],
    queryFn: getFaculty,
  });

  const {
    isLoading: isLoadingAnnouncements,
    data: announcements,
    error,
  } = useQuery({
    queryKey: ["announcement"],
    queryFn: getAnnouncements,
  });

  if (isLoadingAnnouncements || isLoadingAdmin || isLoadingFaculty)
    return <Spinner />;

  return (
    <>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyles />
      <UserContext.Provider value={{ userEmail }}>
        <EmployeeContext.Provider
          value={{
            isLoadingFaculty,
            faculty,
            isLoadingAdmin,
            admins,
            error,
          }}>
          <AnnouncementContext.Provider value={{ announcements }}>
            <SelectedUserContext.Provider
              value={{ selectedEmployee, setSelectedEmployee }}>
              <BrowserRouter>
                <Routes>
                  {userEmail ? (
                    <Route element={<AppLayOut />}>
                      <Route path="announcement" element={<Announcement />} />
                      <Route path="payslip" element={<Payslip />} />
                      <Route path="adminpanel" element={<Admin />} />
                      <Route
                        path="adminpanel/:toDisplay"
                        element={<EmployeeSearch />}
                      />
                      <Route
                        path="change-password"
                        element={<ChangePassword />}
                      />
                      <Route
                        path="addAnnouncement"
                        element={<AddAnnouncement />}
                      />
                      <Route
                        path="inputDeduction"
                        element={<InputDeductions />}
                      />
                    </Route>
                  ) : (
                    ""
                  )}

                  <Route index element={<Navigate replace to="login" />} />
                  <Route
                    path="login"
                    element={
                      <Login setToken={setToken} setUserEmail={setUserEmail} />
                    }
                  />
                  <Route path="*" element={<PageNotFound />} />
                </Routes>
              </BrowserRouter>
              <Toaster
                position="top-center"
                gutter={12}
                containerStyle={{ margin: "8px" }}
                toastOptions={{
                  success: { duration: 2500 },
                  error: { duration: 5000 },
                  style: {
                    fontSize: "16px",
                    maxWidth: "500px",
                    padding: "16px 24px",
                    backgroundColor: "var(--color-grey-0)",
                    color: "var(--color-grey-700)",
                  },
                }}
              />
            </SelectedUserContext.Provider>
          </AnnouncementContext.Provider>
        </EmployeeContext.Provider>
      </UserContext.Provider>
    </>
  );
}

export function useEmployees() {
  const employeeContext = useContext(EmployeeContext);
  if (employeeContext === undefined)
    toast.error("PostContext was used outside of the PostProvider");
  return employeeContext;
}
export function useUser() {
  const userContext = useContext(UserContext);
  if (userContext === undefined)
    toast.error("UserContext was used outside of the PostProvider");
  return userContext;
}
export function useAnnouncement() {
  const announcementContext = useContext(AnnouncementContext);
  if (announcementContext === undefined)
    toast.error("AnnouncementCOntext was used outside of the PostProvider");
  return announcementContext;
}
export function useSelectedUser() {
  const selectedUserContext = useContext(SelectedUserContext);
  if (selectedUserContext === undefined)
    toast.error("SelectedUserContext was used outside of the PostProvider");
  return selectedUserContext;
}

export default App;
