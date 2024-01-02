import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Navbar from "./Navbar";
import ApiUpdate from "./ApiUpdate";

const ApisId = () => {
  let param = useParams();
  let nav = useNavigate();

  const [Fac, SetFac] = useState({});
  useEffect(() => {
    fetch("https://64ec0b4be51e1e82c577c64e.mockapi.io/Faculties/" + param.id, {
      // method: "get"
    })
      .then((as) => {
        return as.json();
      })
      .then((as) => {
        SetFac(as);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="col-3 p-2" style={{ height: "18rem" }}>
        <div className="card p-3" style={{ width: "18rem" }}>
          <img src={Fac.avatar} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{Fac.FacultiesName}</h5>
            <h6>ID:{Fac.Facultiesid}</h6>
            <h6>{Fac.FacultiesDesignation}</h6>
            {/* <Link to={"/"+} className="btn btn-dark">
              Go somewhere
            </Link> */}
            <Link
              className="btn btn-primary m-3"
              onClick={() => {
                fetch(
                  "https://64ec0b4be51e1e82c577c64e.mockapi.io/Faculties/" +
                    param.id,
                  { method: "delete" }
                )
                  .then((as) => {
                    return as.json();
                  })
                  .then((as) => {
                    nav("/");
                  });
              }}
            >
              Delete
            </Link>
            <Link
              className="btn btn-primary m-3"
              to={"/update/" + Fac.Facultiesid}
            >
              Update
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApisId;
