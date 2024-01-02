import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "./Navbar";

function APIUpdate() {
  const param = useParams();
  const nav = useNavigate();

  const [data, setData] = useState({});

  useEffect(() => {
    fetch("https://64ec0b4be51e1e82c577c64e.mockapi.io/Faculties/" + param.id, {
      method: "GET"
    })
      .then((res) => res.json())
      .then((res) => setData(res));
  });
  return (
    <>
      <Navbar />
      <div class="container m-3">
        <form>
          <div class="row mb-3">
            <label for="" class="col-sm-2 col-form-label">
              FacultiesName
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                value={data.FacultiesName}
                class="form-control"
                id="inputEmail3"
                onChange={(e) => {
                  setData({ ...data, FacultiesName: e.target.value });
                }}
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
                value={data.FacultiesDesignation}
                class="form-control"
                id="inputPassword3"
                onChange={(e) => {
                  setData({ ...data, FacultiesDesignation: e.target.value });
                }}
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
                value={data.avatar}
                class="form-control"
                id="inputPassword3"
                onChange={(e) => {
                  setData({ ...data, avatar: e.target.value });
                }}
              />
            </div>
          </div>

          <input
            type="button"
            value="submit"
            class="btn btn-primary"
            onClick={() => {
              fetch(
                "https://64ec0b4be51e1e82c577c64e.mockapi.io/Faculties/" +
                  param.id,
                {
                  method: "PUT",
                  body: JSON.stringify(data),
                  headers: {
                    "Content-Type": "application/json"
                  }
                }
              ).then((res) => {
                nav("/");
              });
            }}
          />
        </form>
      </div>
    </>
  );
}

export default APIUpdate;
