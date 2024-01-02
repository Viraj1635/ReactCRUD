import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
const NewDemo = () => {
  const param = useParams();
  const nav = useNavigate();

  const [data, setData] = useState({});

  useEffect(() => {
    fetch("https://64ec0b4be51e1e82c577c64e.mockapi.io/Faculties/" + param.id, {
      method: "PUT",
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
  });
};

export default NewDemo;
