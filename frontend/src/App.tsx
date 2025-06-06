import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import HomePage from "./pages/HomePage";
import { Routes, Route, Navigate } from "react-router-dom";
import { useUserStore } from "./stores/userStore";
import { Toaster } from "react-hot-toast";

function App() {
  const { isAuthenticated } = useUserStore();

  return (
    <>
      <div>
        <Routes>
          <Route
            path="/"
            element={isAuthenticated ? <HomePage /> : <Navigate to="/signin" />}
          />
          <Route
            path="/signup"
            element={isAuthenticated ? <Navigate to="/" /> : <SignUp />}
          />
          <Route
            path="/signin"
            element={isAuthenticated ? <Navigate to="/" /> : <SignIn />}
          />
        </Routes>
      </div>
      <Toaster />
    </>
  );
}

export default App;
