import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import { Box, Container, Grid } from "@mui/material";
import Post from "../components/Post";
import { sortByDate } from "../utils";

export default function Home({ posts }) {
  return (
    <Box my={5}>
      <Head>
        <title>Blog</title>
      </Head>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {posts.map((post, i) => (
            <Grid key={i} item xs={12} sm={6} lg={4}>
              <Post post={post} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((file) => {
    const slug = file.replace(".md", "");

    const markdownWithMeta = fs.readFileSync(path.join("posts", file), "utf-8");

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}
