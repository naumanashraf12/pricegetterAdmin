import "./datatable.scss";

import { useQuery } from "react-query";
import { getPendingSellers } from "../../store/api";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useApproveASuser, useSellerApprove } from "../../hooks/Usershooks";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import Loader from "../../pages/Loader/Loader";
import ClearIcon from "@mui/icons-material/Clear";
const DatatableSellerPending = () => {
  const { data, error, isLoading } = useQuery("getSellerPending", () => {
    return getPendingSellers().then((res) => res);
  });
  const { mutate } = useApproveASuser();
  const { mutate: asUser } = useSellerApprove();
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
                    <TableCell className="tableCell">{row.name}</TableCell>
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
                      <DoneOutlineIcon
                        style={{
                          color: "green",
                          borderRadius: "20px",
                          borderColor: "white",
                          padding: "5px",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          asUser(row._id);
                        }}
                      ></DoneOutlineIcon>
                      <ClearIcon
                        style={{
                          color: "red",
                          borderRadius: "20px",
                          borderColor: "white",
                          marginLeft: "10px",
                          padding: "5px",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          mutate(row._id);
                        }}
                      ></ClearIcon>
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

export default DatatableSellerPending;
