import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import Link from "next/link";
import Aos from "aos";
import "aos/dist/aos.css";
import Header from "../../src/components/header";

const tiers = [
  {
    title: "Pro",
    subheader: "Most popular",
    price: "15",
    description: ["20 users included", "10 GB of storage", "Help center access", "Priority email support"],
    buttonText: "Get started",
    buttonVariant: "contained",
  },
];

function PricingContent() {
    React.useEffect(() => {
            Aos.init({ duration: 2000 });
    }, [])
    
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <Container data-aos="fade-down" disableGutters maxWidth="sm" component="main" sx={{ pt: 8 }}>
        <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
          Welcome
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
          Welcome to the todo task assigned by Persue Today.
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", mt:6 }}>
        <Link href="/homepage">
          <Button variant="contained">Homepage</Button>
        </Link>
      </Box>
      </Container>
      
    </React.Fragment>
  );
}

export default function Pricing() {
  return <PricingContent />;
}
