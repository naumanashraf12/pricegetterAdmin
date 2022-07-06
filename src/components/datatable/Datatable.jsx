import "./datatable.scss";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useQuery } from "react-query";
import { getUsers } from "../../store/api";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useUserDel } from "../../hooks/Usershooks";
import ClearIcon from "@mui/icons-material/Clear";
import Loader from "../../pages/Loader/Loader";

const Datatable = () => {
  const navigate = useNavigate();
  const { data, error, isLoading } = useQuery("getUsers", () => {
    return getUsers().then((res) => res);
  });
  const { mutate } = useUserDel();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="datatable">
          <TableContainer component={Paper} className="table">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className="tableCell">Name</TableCell>
                  <TableCell className="tableCell">Email</TableCell>
                  <TableCell className="tableCell">Created At</TableCell>

                  <TableCell className="tableCell">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.data.data.data.map((row) => (
                  <TableRow key={row._id}>
                    <TableCell
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        navigate(`/user/${row._id}`);
                      }}
                      className="tableCell"
                    >
                      {row.name}
                    </TableCell>

                    <TableCell className="tableCell">
                      <div className="cellWrapper">
                        {<img src={row.avatar.url} alt="" className="image" />}
                        {row.email}
                      </div>
                    </TableCell>
                    <TableCell className="tableCell">
                      {new Date(row?.createdAt).toISOString().split("T")[0]}
                    </TableCell>

                    <TableCell>
                      <ClearIcon
                        style={{
                          color: "red",
                          borderRadius: "20px",
                          borderColor: "white",
                          padding: "5px",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          mutate({ id: row._id });
                        }}
                      >
                        Remove
                      </ClearIcon>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )}
    </>
  );
};

export default Datatable;
