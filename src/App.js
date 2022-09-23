import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Quote from "./pages/quote/Quote";
import "./App.css";
import Payment from "./pages/payment/Payment";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Transactions from "./pages/transactions/Transactions";
import TransactionDetails from "./pages/transaction-details/TransactionDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/request-quote" element={<Quote />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/transaction-details" element={<TransactionDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
