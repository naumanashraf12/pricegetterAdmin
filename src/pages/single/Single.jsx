import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { singleUser } from "../../store/api";
import { useUserGet } from "../../hooks/Usershooks";

const Single = () => {
  const { id } = useParams();
  const [data, setdata] = useState("");
  const getDetail = async () => {
    return await singleUser(id);
  };
  console.log(data);
  useEffect(() => {
    getDetail().then((data) => {
      setdata(data.data.data.doc);
    });
  }, []);
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          {data && (
            <div className="left">
              <h1 className="title">Information</h1>
              <div className="item">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <img src={data?.avatar?.url} alt="" className="itemImg" />
                  <div className="details">
                    <h1 className="itemTitle">{data?.name}</h1>
                    <div className="detailItem">
                      <span className="itemKey">Email:</span>
                      <span className="itemValue">{data?.email}</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Created At</span>
                      <span className="itemValue">{data?.createdAt}</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Role</span>
                      <span className="itemValue">{data?.role}</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Search History</span>
                      <span className="itemValue">
                        {data?.searchHistory?.map((val) => (
                          <>
                            <p>{val}</p>
                            <br />
                          </>
                        ))}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {data && (
            <div className="bottom">
              <img
                style={{ width: "60%" }}
                src={data?.verification?.url}
                alt=""
              />
            </div>
          )}
        </div>
        {/* <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <List />
        </div> */}
      </div>
    </div>
  );
};

export default Single;
