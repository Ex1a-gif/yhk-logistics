import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Quote from "./pages/quote/Quote";
import "./App.css";
import Payment from "./pages/payment/Payment";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Transactions from "./pages/transactions/Transactions";
import TransactionDetails from "./pages/transaction-details/TransactionDetails";
import Layout from "./auth/Layout";
import RequireAuth from "./auth/RequireAuth";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Public route */}
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        {/* Private routes */}
        <Route element={<RequireAuth />}>
          <Route path="/quote" element={<Quote />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/transaction-details" element={<TransactionDetails />} />
          <Route path="/payment" element={<Payment />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
