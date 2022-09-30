import axios from "axios";
import React, { useState, useEffect, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Container, Row, Table } from "react-bootstrap";
import { useTable } from "react-table";
import Topbar from "../../components/topbar/Topbar";

const Transactions = () => {
  const navigate = useNavigate();
  const [transactions, setTransactions] = useState([]);

  const transactionsData = useMemo(() => [...transactions], [transactions]);

  useEffect(() => {
    getQuotes();
  }, []);

  const transactionsColumns = useMemo(
    () => [
      {
        Header: "Quote ID",
        accessor: "_id",
      },
      {
        Header: "Package Type",
        accessor: "parcelType",
      },
      {
        Header: "Quote Status",
        accessor: "quoteStatus",
      },
      {
        Header: "Payment Status",
        accessor: "paymentStatus",
      },
      {
        Header: "Delivery Status",
        accessor: "deliveryStatus",
      },
      {
        Header: "Booking Date",
        accessor: "bookingDate",
      },
    ],
    []
  );

  const getQuotes = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const customerName = user.firstName + " " + user.lastName;
    console.log(customerName);
    const createdQuotes = await axios.get("/quote/get-quotes", {
      params: {
        customerName: customerName,
      },
    });
    setTransactions(createdQuotes.data);
  };

  const handleClick = (data) => {
    navigate(`/transaction-details/${data._id}`, { state: data });
  };

  const tableInstance = useTable({
    columns: transactionsColumns,
    data: transactionsData,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <div className="transactions">
      <Topbar />
      <div className="quote-wrapper d-flex flex-column justify-content-center">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>Transactions</h1>
              <p>Home/ Transactions</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Container className="my-3">
          <Row>
            <Link to="/quote">
              <Button className="login-topbar-btn rounded-0 px-4 py-2  mb-4 float-end">
                Add New
              </Button>
            </Link>
          </Row>
          <div>
            <Table {...getTableProps()} responsive striped bordered hover>
              <thead>
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <th {...column.getHeaderProps()}>
                        {column.render("Header")}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()} className="dataTable">
                {rows.map((row, idx) => {
                  prepareRow(row);

                  return (
                    <tr
                      {...row.getRowProps()}
                      // onClick={() => handleClick(row.original)}
                    >
                      {row.cells.map((cell, idx) => (
                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Transactions;
