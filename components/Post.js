import React from "react";
import Link from "next/link";
import {
  Card,
  Box,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

const Post = ({ post }) => {
  return (
    <Card sx={{ height: "100%", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)" }}>
      <CardMedia
        component="img"
        height="240"
        image={post.frontmatter.cover_image}
        alt="green iguana"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="subtitle2"
          sx={{ fontSize: "0.675rem", color: "#888888" }}
        >
          Posted on {post.frontmatter.date}
        </Typography>
        <Typography variant="h5" sx={{ color: "#064635" }}>
          {post.frontmatter.title}
        </Typography>
        <Typography variant="body2">
          <p>{post.frontmatter.excerpt}</p>
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={`/blog/${post.slug}`} passHref>
          <Button
            size="medium"
            variant="contained"
            sx={{
              backgroundColor: "#064635",
              textTransform: "capitalize",
              "&:hover": { backgroundColor: "#064635" },
            }}
          >
            Read More
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default Post;
