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
import AddEmployee from "./ui/AddEmployee";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 60 * 1000 },
  },
});
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayOut />}>
            <Route index element={<Navigate replace to="payslip" />} />
            <Route path="announcement" element={<Announcement />} />
            <Route path="payslip" element={<Payslip />} />
            <Route path="admin" element={<Admin />} />
            <Route path="list" element={<EmployeeList />} />
            <Route path="addAnnouncement" element={<AddAnnouncement />} />
            <Route path="inputDeduction" element={<InputDeductions />} />
            <Route path="addEmployee" element={<AddEmployee />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
