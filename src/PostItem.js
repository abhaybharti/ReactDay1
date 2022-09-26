import React from "react";
import styled from "styled-components";
import "./postitem.css";

const h1Styled = {
  backgroundColor: "yellow",
  padding: "5px",
};

const Para = styled.p`
  font-size: 1rem;
  color: darkred;
  font-weight: bold;
`;
const PostItem = ({ post }) => {
  return (
    <div className="container">
      <h1 style={h1Styled}>ID : {post.id} </h1>
      <h2
        style={{
          backgroundColor: "gray",
          textTransform: "uppercase",
          color: "white",
        }}
      >
        Title : {post.title}{" "}
      </h2>

      <Para>{post.body}</Para>
    </div>
  );
};

export default PostItem;
