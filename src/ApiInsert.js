import { useState } from "react";
import { useNavigate } from "react-router";
import Navbar from "./Navbar";
import {} from "react-beautiful-dnd";
import {} from "antd";

const ApiInsert = () => {
  const [data, setData] = useState();
  const nav = useNavigate();

  const sub = (e) => {
    e.preventDefault();
    // useEffect(() => {
    fetch("https://64ec0b4be51e1e82c577c64e.mockapi.io/Faculties", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((as) => {
        setData(as);
      })
      .then((as) => {
        nav("/");
      });
  };

  return (
    <>
      <Navbar />
      <div class="container m-3">
        <form onSubmit={sub}>
          <div class="row mb-3">
            <label for="" class="col-sm-2 col-form-label">
              FacultiesName
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="inputEmail3"
                onChange={(e) =>
                  setData({ ...data, FacultiesName: e.target.value })
                }
              />
            </div>
          </div>
          <div class="row mb-3">
            <label for="" class="col-sm-2 col-form-label">
              FacultiesDesignation
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="inputPassword3"
                onChange={(e) =>
                  setData({ ...data, FacultiesDesignation: e.target.value })
                }
              />
            </div>
          </div>
          <div class="row mb-3">
            <label for="" class="col-sm-2 col-form-label">
              Image
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="inputPassword3"
                onChange={(e) => setData({ ...data, avatar: e.target.value })}
              />
            </div>
          </div>

          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default ApiInsert;
