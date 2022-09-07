import React, { useState } from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const Form = (props) => {
  const { init, onSubmit, btn } = props;
  const [data, setData] = useState({
    name: init.name,
    type: init.type,
    desc: init.desc,
    skill_1: init.skill_1,
    skill_2: init.skill_2,
    skill_3: init.skill_3,
    likes: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(data);
    setData(init);
  };

  return (
    <Card>
      <CardContent className="p-5">
        <form onSubmit={handleSubmit} className="text-start">
          <div className="row">
            <div className="col">
              <br />
              <br />
              <br />
              <input
                type="hidden"
                className="col form-control"
                value={data.likes}
                onChange={(e) => setData({ ...data, likes: e.target.value })}
              />
              <div className="form-group row mb-3">
                <label className="col-3 form-label h5">Pet Name</label>
                <input
                  type="text"
                  className="col form-control"
                  value={data.name}
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                />
              </div>
              <div className="form-group row mb-3">
                <label className="col-3 form-label h5">Pet Type</label>
                <input
                  type="text"
                  className="col form-control"
                  value={data.type}
                  onChange={(e) => setData({ ...data, type: e.target.value })}
                />
              </div>
              <div className="form-group row mb-3">
                <label className="col-3 form-label h5">Pet Description</label>
                <input
                  type="text"
                  className="col form-control"
                  value={data.desc}
                  onChange={(e) => setData({ ...data, desc: e.target.value })}
                />
              </div>
            </div>
            <div className="col offset-2">
              <h3 className="text-start mb-4">Skills (optional)</h3>
              <div className="form-group row mb-3">
                <label className="col-3 form-label h5">Skill 1</label>
                <input
                  type="text"
                  className="col form-control"
                  value={data.skill_1}
                  onChange={(e) =>
                    setData({
                      ...data,
                      skill_1: e.target.value,
                    })
                  }
                />
              </div>
              <div className="form-group row mb-3">
                <label className="col-3 form-label h5">Skill 2</label>
                <input
                  type="text"
                  className="col form-control"
                  value={data.skill_2}
                  onChange={(e) =>
                    setData({ ...data, skill_2: e.target.value })
                  }
                />
              </div>
              <div className="form-group row mb-3">
                <label className="col-3 form-label h5">Skill 3</label>
                <input
                  type="text"
                  className="col form-control"
                  value={data.skill_3}
                  onChange={(e) =>
                    setData({ ...data, skill_3: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
          <Button
            variant="contained"
            color="primary"
            endIcon={<SendIcon />}
            type="submit"
          >
            {btn}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default Form;
