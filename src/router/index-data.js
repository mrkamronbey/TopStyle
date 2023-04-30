import { lazy } from "react";

const Home = lazy(() => import("../pages/home/index"));
const Products = lazy(() => import("../pages/products/index"));
const ProductMore = lazy(() => import("../pages/product-more/index"));
const Order = lazy(() => import("../pages/order/index"));
const CreateLogo = lazy(() => import("../pages/create-logo/index"));
const Contact = lazy(() => import("../pages/contact/index"));
const About = lazy(() => import("../pages/about/index"));

export const RouterData = [
  {
    id: 1,
    path: "/",
    component: <Home />,
  },
  {
    id: 2,
    path: "/products",
    component: <Products />,
  },
  {
    id: 3,
    path: "/productmore/:id",
    component: <ProductMore />,
  },
  {
    id: 4,
    path: "/order",
    component: <Order />,
  },
  {
    id: 5,
    path: "/createlogo",
    component: <CreateLogo />,
  },
  {
    id: 6,
    path: "/contact",
    component: <Contact />,
  },
  {
    id: 7,
    path: "/aboutme",
    component: <About />,
  },
];
