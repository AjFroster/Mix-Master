import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  About,
  Cocktail,
  Error,
  HomeLayout,
  Landing,
  Newsletter,
  SinglePageError,
} from "./pages/index.js";

import { loader as landingLoader } from "./pages/Landing.jsx";
import { loader as singleCocktailLoader } from "./pages/Cocktail.jsx";
import { action as newsletterAction } from "./pages/Newsletter.jsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5mins
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        element: <Landing></Landing>,
        errorElement: <SinglePageError></SinglePageError>,
        loader: landingLoader(queryClient),
      },
      {
        path: "cocktail/:id",
        errorElement: <SinglePageError></SinglePageError>,
        loader: singleCocktailLoader(queryClient),
        element: <Cocktail></Cocktail>,
      },
      {
        path: "newsletter",
        element: <Newsletter></Newsletter>,
        action: newsletterAction,
      },
      {
        path: "about",
        element: <About></About>,
      },
    ],
  },
  {
    path: "/about",
    element: <About></About>,
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
  );
};
export default App;
