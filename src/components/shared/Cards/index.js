// import {  Favorite, MoreVert, Share } from '@mui/icons-material'
import { FaHeart, FaMonero, FaShare } from "react-icons/fa";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import question from "../../../questions";
// import Link from 'antd/lib/typography/Link'
import { Link } from "react-router-dom";

const Post = ({ questions }) => {
  return (
    <>
      <Card sx={{ margin: 5 }}>
        <CardHeader
          avatar={<Avatar sx={{ bgcolor: "red" }} aria-label="recipe"></Avatar>}
          action={
            <IconButton aria-label="settings">
              <FaMonero />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />

        <CardContent>
          <Typography variant="h3" color="text.secondary">
            {questions.Title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {questions.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Link to={`/TextEditorAnswer/${questions.id}`}>
            <button className="btn btn-dark btn-lg w-100">View Answers</button>
          </Link>
        </CardActions>
      </Card>
    </>
  );
};

export default Post;
