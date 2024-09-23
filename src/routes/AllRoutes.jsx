import App from "@/App";
import { Dashboard, Home } from "@/pages";
import { About } from "@/pages/about/About";
import { Register } from "@/pages/auth";
import { Contact } from "@/pages/contact/Contact";
import { PageNotFound } from "@/pages/pageNotFound/PageNotFound";
import { Edit } from "@/pages/resume//Edit";
import { View } from "@/pages/resume/View";

import { Route, Routes } from "react-router-dom";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route element={<App />}>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/dashboard/resume/:id/edit" element={<Edit />}></Route>
      </Route>
      <Route path="/my-resume/:id/view" element={<View />}></Route>
      <Route path="/auth/register" element={<Register />}></Route>
      <Route path="*" element={<PageNotFound />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/about-us" element={<About />}></Route>
    </Routes>
  );
};
