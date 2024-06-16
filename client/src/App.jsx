import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectRoute from "./components/auth/ProtectRoute";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Chat = lazy(() => import("./pages/Chat"));
const Groups = lazy(() => import("./pages/Groups"));
const NotFound = lazy(() => import("./pages/NotFound"));

let user = true;

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* parent route which has child Outlet inside it */}
        {/* if user is not logged in, then redirect these routes to login page  */}
        <Route element={<ProtectRoute user={user} />}>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/groups" element={<Groups />} />
        </Route>

        {/* if user is logged in, then redirect /login path to home page */}
        <Route
          path="/login"
          element={
            <ProtectRoute user={!user} redirectPath="/">
              <Login />
            </ProtectRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
