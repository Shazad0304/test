import { configureStore } from "@reduxjs/toolkit";
import InvoiceSlice from "../redux/InvoiceSlice";


const Store = configureStore({
  reducer: {
    invoices: InvoiceSlice.reducer,
  }
})

export default Store