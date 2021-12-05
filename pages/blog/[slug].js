import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Link from "next/link";
import { Box, Container, Grid, Typography } from "@mui/material";

export default function PostPage({
  frontmatter: { title, date, cover_image },
  slug,
  content,
}) {
  return (
    <Box my={5}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          sx={{ fontWeight: "600", color: "#064635", marginBottom: "10px" }}
        >
          {title}
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ fontSize: "0.675rem", color: "#888888" }}
        >
          Posted on {date}
        </Typography>
        <img
          src={cover_image}
          alt=""
          style={{ width: "100%", borderRadius: "4px", margin: "30px 0" }}
        />
        <Box className="post-body">
          <Box dangerouslySetInnerHTML={{ __html: marked(content) }}></Box>
        </Box>
      </Container>
    </Box>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
