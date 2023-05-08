import { configureStore } from "@reduxjs/toolkit";
import ContactSlice from "./form";
import CategorySlice from './category'
import ProductSlice from './product'
import ProjectsSlice from './project'
export const store = configureStore({
  reducer: {
    contact: ContactSlice,
    category: CategorySlice,
    product: ProductSlice,
    project: ProjectsSlice
  },
});