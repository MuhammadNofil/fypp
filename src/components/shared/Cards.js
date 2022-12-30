import { FaMonero } from "react-icons/fa";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const PostCard = ({ questions }) => {
  return (
    <>
      <Card sx={{ margin: 5 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "black" }} aria-label="recipe"></Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <button
                className="btn btn-dark btn-lg w-100"
                style={{ backgroundColor: "#09213a" }}
              >
                Visit profile
              </button>
            </IconButton>
          }
          title="Muhammad Nofil"
          subheader="September 14, 2016"
        />
        <CardContent>
          <Typography variant="h3" color="black">
            {questions.Title}
          </Typography>
          <div className="mt-3">
            <Typography variant="body2" color="black">
              {questions.description}
            </Typography>
          </div>
        </CardContent>
        <div className="d-flex justify-content-center  mt-3">
          <CardActions disableSpacing>
            <Link to={`/TextEditorAnswer/${questions.id}`}>
              <button
                className="btn btn-dark vw-100 "
                style={{ backgroundColor: "#09213a" }}
              >
                View Answers
              </button>
            </Link>
          </CardActions>
        </div>
      </Card>
    </>
  );
};

export default PostCard;
