import { lazy } from "react";

const Home = lazy(() => import("../pages/home/index"))
const Products = lazy(() => import("../pages/products/index"))
const ProductMore = lazy(() => import("../pages/product-more/index"))

export const RouterData = [
    {
        id : 1,
        path : "/",
        component : <Home/>
    },
    {
        id : 2,
        path : "/products",
        component : <Products/>
    },
    {
        id : 3,
        path : "/productmore/:id",
        component : <ProductMore/>
    }
]