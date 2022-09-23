import React, { useState, useEffect, useMemo } from "react";
import { Container, Table } from "react-bootstrap";
import { useTable } from "react-table";
import Topbar from "../../components/topbar/Topbar";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  const transactionsData = useMemo(() => [...transactions], [transactions]);

  const transactionsColumns = useMemo(
    () => [
      {
        Header: "Quote ID",
        accessor: "quoteId",
      },
      {
        Header: "Package Type",
        accessor: "packageType",
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
        Header: "Date Created",
        accessor: "timeStamp",
        Cell: ({ value }) => (
          <p>{new Date(value.seconds * 1000).toLocaleDateString("en-US")} </p>
        ),
      },
    ],
    []
  );

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
        </Container>
      </div>
    </div>
  );
};

export default Transactions;
