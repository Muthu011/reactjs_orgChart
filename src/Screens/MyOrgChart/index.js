import React, { Component } from "react";
import "./styles.css";
import OrgChart from "react-orgchart";
import "react-orgchart/index.css";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import BusinessIcon from "@material-ui/icons/Business";
import PersonIcon from "@material-ui/icons/Person";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import PlusIcon from "@material-ui/icons/Add";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Avatar from "@material-ui/core/Avatar";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Badge from "@material-ui/core/Badge";
import Tooltip from "@material-ui/core/Tooltip";
import MapInfo from "../../components/map/index";

class App extends Component {
  render() {
    const initechOrg = {
      name: "Muthu",
      actor: "Muthu Vijayakumar",
      designation: "Principal",
      children: [
        {
          name: "Mohan",
          actor: "Mohan Raj",
          designation: "Vice Principal",

          children: [
            {
              name: "JP",
              actor: "JayaPrakash",
              designation: "Staff 1",
            },
            {
              name: "Siva",
              actor: "JayaPrakash",
              designation: "Staff 2",
            },
            {
              name: "Sachin",
              actor: "JayaPrakash",
              designation: "Staff 3",
            },
            {
              name: "Gopi",
              actor: "JayaPrakash",
              designation: "Staff 4",
            },
            {
              name: "Malathi",
              actor: "JayaPrakash",
              designation: "Staff 5",
            },
          ],
        },
        {
          name: "Pranesh",
          actor: "Pranesh",
          designation: "Placement President",
        },
        {
          name: "Kishor",
          actor: "M Kishor",
          designation: "Discipline Comitte",
        },
      ],
    };

    const MyNodeComponent = ({ node }) => {
      return (
        <div
          className="initechNode"
          onClick={() => alert("Hi my real name is: " + node.actor)}
        >
          {/* {node.name} */}

          <Card variant="outlined">
            <CardHeader
              avatar={
                <Tooltip placement="top" title={<MapInfo />} interactive>
                  <Badge
                    style={{ cursor: "pointer" }}
                    color="secondary"
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "right",
                    }}
                    showZero
                    overlap="circle"
                  >
                    <Avatar>
                      <PersonIcon color="primary" />
                    </Avatar>
                  </Badge>
                </Tooltip>
              }
              action={
                <IconButton size="small">
                  <MoreVertIcon style={{ opacity: "1" }} />
                </IconButton>
              }
              title={node.name}
              subheader={node.designation}
            />
          </Card>
        </div>
      );
    };

    return (
      <div className="App" id="initechOrgChart">
        <OrgChart tree={initechOrg} NodeComponent={MyNodeComponent} />
      </div>
    );
  }
}

export default App;
