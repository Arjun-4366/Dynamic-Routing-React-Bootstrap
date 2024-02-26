import React from "react";
import { useLocation } from "react-router-dom";
import { blogDetails } from "../data/blogdata";

function Blogdetails() {
  let uselocation = useLocation();
  let currentId = uselocation.pathname.split("/")[2];
  let currentData = blogDetails.filter((v) => v.id == currentId)[0];
  return (
    <div className=" container d-flex align-items-center justify-content-center mt-3">
      <p>{currentData.body}</p>
    </div>
  );
}

export default Blogdetails;
