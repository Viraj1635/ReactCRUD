import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Apis = () => {
  const [Fac, SetFac] = useState([]);
  useEffect(() => {
    fetch("https://64ec0b4be51e1e82c577c64e.mockapi.io/Faculties/")
      .then((as) => {
        return as.json();
      })
      .then((as) => {
        SetFac(as);
      });
  }, []);

  const print = Fac.map((nw) => {
    return (
      <>
        <div className="col-3 p-2 ">
          <div className="card p-3 " style={{ width: "19rem" }}>
            <img src={nw.avatar} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{nw.FacultiesName}</h5>
              <h6>ID:{nw.Facultiesid}</h6>
              <h6>{nw.FacultiesDesignation}</h6>
              <Link to={"/" + nw.Facultiesid} className="btn btn-dark">
                More info..
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  });

  return (
    <>
      <Navbar />
      <div class="container ">
        <div class="row">{print}</div>
      </div>
    </>
  );
};

export default Apis;
