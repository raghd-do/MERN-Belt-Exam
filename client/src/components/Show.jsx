import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

const Show = (props) => {
  const { item, like } = props;

  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h3">
          {item.nmae}
        </Typography>
        <Typography variant="body1" className="text-start">
          <p>
            <span className="h4">Pet type:</span> {item.type}
          </p>
          <p>
            <span className="h4">Description:</span> {item.desc}
          </p>
          <p>
            <span className="h4">Skills:</span> {item.skill_1} {item.skill_2}
            {item.skill_3}
          </p>
        </Typography>
        <div className="row mx-5">
          <Button
            variant="contained"
            color="success"
            startIcon={<ThumbUpIcon />}
            className="col"
            onClick={(e) => like(item._id)}
          >
            Like {item.name}
          </Button>
          <p className="col"> {item.likes} Like(s)</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Show;
