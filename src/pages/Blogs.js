import React from "react";
import { blogDetails } from "../data/blogdata";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Blogs() {
  let allBlogs = blogDetails.map((v, i) => {
    return (
      <div key={i} className="col-lg-3 mb-3">
        <Card style={{ height: "100%", width: "100%" }}>
          <Card.Body>
            <Card.Title>{v.title}</Card.Title>
            <Card.Text>{v.body}</Card.Text>
            <Button as={Link} to={`/blog/${v.id}`} variant="primary">
              Read More
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  });
  return <div className=" p-5 row mt-3">{allBlogs}</div>;
}

export default Blogs;
