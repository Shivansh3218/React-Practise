import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
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
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Paper } from "@mui/material";
function News() {
    const [datas, setData] = useState([])
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

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=ea14c121ce034b56b4ae40988411c39a"
      )
      .then((response) => {setData([...datas,response.data.articles])});
  }, []);

  return (
    <>
   
    {
        datas.length>=1? 
       
        datas[0].map((item)=>{
            return(
                <Card sx={{ display:"inline-block", width:500,maxHeight:1000, height:'auto', maxWidth: 500 , margin: 3 }} key={item.url}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      R
                    </Avatar>
                  }
                  title={item.title}
                  subheader={item.publishedAt}
                />
                <CardMedia
                  component="img"
                  height="194"
                  image={item.urlToImage}
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                   {item.description}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  <ExpandMore
                    expand={expanded}
                    onClick={()=>handleExpandClick()}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
                </CardActions>
                <Collapse in={expanded}  timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph>
                    {item.content}
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
            )
        })
        
        : null
    }
    
    </>
  );
}

export default News;
