import React from "react";
import Link from "next/link";
import { Box, Container, Typography } from "@mui/material";

export default function Header() {
  return (
    <Box
      sx={{
        backgroundColor: "#064635",
        padding: "10px 0px",
      }}
    >
      <Container maxWidth="lg">
        <Link href="/">
          <Typography
            variant="h6"
            style={{
              color: "white",
              cursor: "pointer",
              display: "inline",
            }}
          >
            Next.js Blog
          </Typography>
        </Link>
      </Container>
    </Box>
  );
}
