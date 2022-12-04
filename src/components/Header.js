import {
  AppBar,
  Container,
  Link,
  List,
  ListItem,
  styled,
  Toolbar,
} from "@mui/material";
import AppleIcon from "@mui/icons-material/Apple";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import React from "react";
import { AddShoppingCart } from "@mui/icons-material";

const StyledLinks = styled(Link)({
  color: "silver",
  textDecoration: "none",
});

const StyledDiv = styled('div')({
  display: "flex",
  color: "silver",
  justifyContent: "space-between",
  alignItems: "center",
  maxWidth: "100px",
  width: "100%"
});
const StyledNav = styled('nav')({
  maxWidth: "600px", width: "100%"
})

const Header = () => {
  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar sx={{ backgroundColor: "#1c1e21" }}>
        <Container maxWidth="xl" sx={{ display: "flex", justifyContent: "space-between", alignItems: "center"}}>
          <Link href="#" sx={{ color: "silver" }}>
            <AppleIcon sx={{ fontSize: "3.5rem" }} />
          </Link>
          <StyledNav>
            <List sx={{ display: "flex" }}>
              <ListItem>
                <StyledLinks href="#">mtavari</StyledLinks>
              </ListItem>
              <ListItem>
                <StyledLinks href="#">mtavari</StyledLinks>
              </ListItem>
              <ListItem>
                <StyledLinks href="#">mtavari</StyledLinks>
              </ListItem>
              <ListItem>
                <StyledLinks href="#">mtavari</StyledLinks>
              </ListItem>
              <ListItem>
                <StyledLinks href="#">mtavari</StyledLinks>
              </ListItem>
            </List>
          </StyledNav>
          <StyledDiv>
            <SearchIcon />
            <AddShoppingCart />
            <PersonIcon />

            
          </StyledDiv>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
