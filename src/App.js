
import "bootstrap/dist/css/bootstrap.min.css";
import HeroSection from './Components/Section/Hero';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import NavBarComponent from "./Components/HeaderComponent/NavBar";
import FooterComponent from "./Components/FooterComponent/Footer";
import ErrorComponent from "./Components/ErrorComponent/Error";
import { Provider } from "react-redux";
import { store } from './Reduxtoolkit/store';

function App() {
  return (
    <Provider store={store}>
      <NavBarComponent />
      <Outlet />
    <FooterComponent />
   
    </Provider>
     
  );
}
export default App;
const Login=lazy(()=>import("./Components/PageComponent/LoginPage"));
const DetailsPage = lazy(() => import("./Components/PageComponent/DetailsPage")); // Import DetailsPage component


export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HeroSection />

      },
      {
        path: "/login",
        element:<Suspense fallback={<h1>loading...</h1>}><Login /></Suspense> 

      },
     
      {
        path:"/details/:id",
        element:<Suspense fallback={<h1>loading...</h1>}><DetailsPage /></Suspense> 

      },
    ],
    errorElement: <ErrorComponent />
  },

])

