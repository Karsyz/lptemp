import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import { useEffect } from "react";
import { siteSettings } from "./Config/settings.js";
import { toTitleCase } from "./utils/stringUtils";
import { setFavicon } from './utils/domUtils';

// Pages
import Index from "./Pages/Index";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Index />} />
    </>
  )
);

export default function App() {
  
  useEffect(() => {
    //sets doc title
    document.title = toTitleCase(siteSettings.title);
    //sets favicon
    setFavicon(siteSettings.favicon);
  }, []);

  return <RouterProvider router={router} />;
}
