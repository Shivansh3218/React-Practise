import React from "react";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { ThemeContext } from "./Context";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Like from "./Like";
import Cards from "./Cards";
function News() {
  const {theme,setTheme} = useContext(ThemeContext)
  const [pageTheme,setPageTheme] =  useState(theme.light)
  const [datas, setData] = useState([]);
  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  const [expanded, setExpanded] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [count,setCount ]=  useState(0)

  const handleTheme = ()=>{
    console.log("theme")
    count==0? setCount(1):setCount(0)
    count==0? setPageTheme(theme.dark):setPageTheme(theme.light)
   }

  <IconButton
  aria-label="expand row"
  size="small"
  onClick={() => setOpen(!open)}
>
  {open ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon />}
</IconButton>


  //   const handleExpandClick = (e) => {
  //     // console.log(e.target.id)

  //     )

  //   };

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=ea14c121ce034b56b4ae40988411c39a"
      )
      .then((response) => {
        setData([...datas, response.data.articles]);
      });
  }, []);

  return (
    < React.Fragment >
     <button onClick={handleTheme} style={{position:'fixed' ,top:1,right:1}}>Toggle Theme</button>
      {datas.length >= 1
        ? datas[0].map((item) => <Cards item={item} pageTheme= {pageTheme}/>)
        : null}
    </React.Fragment>
  );
}

export default News;
