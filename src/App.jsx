import { useUser } from "@clerk/clerk-react";
import "./App.css";
import { Navigate, Outlet } from "react-router-dom";
import { Header } from "./components";
import { Toaster } from "./components/ui/toaster";

function App() {
  const { user, isLoaded, isSignedIn } = useUser();
  if (!isSignedIn && isLoaded) {
    return <Navigate to="/auth/register" />;
  }
  return (
    <>
      <main>
        <Outlet />
        <Toaster />
      </main>
    </>
  );
}

export default App;
