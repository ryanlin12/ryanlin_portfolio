import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/Home";
import { AboutPage } from "./pages/About";
import { WorkPage } from "./pages/Work";
import { WorkDetailPage } from "./pages/WorkDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "about", Component: AboutPage },
      { path: "work", Component: WorkPage },
      { path: "work/:id", Component: WorkDetailPage },
    ],
  },
]);
