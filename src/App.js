import { useState } from "react";
import {
  Button,
  Drawer,
  IconButton,
  Grid,
  Hidden,
  Typography
} from "@material-ui/core";
import "./styles.css";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

export default function App() {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const drawer = (
    <div className="Drawer">
      <div className="DrawerHeader">
        <div className="Brand">
          <span role="img" aria-label="the egg way">
            (🥚,🐣)
          </span>
          <span style={{ fontSize: "18px", marginLeft: "3px" }}>EggDao</span>
        </div>
        <div style={{ flexGrow: 1 }} />
        <IconButton onClick={handleDrawerClose}>
          <CloseIcon />
        </IconButton>
      </div>
      <div className="DrawerNav">
        <ul style={{ listStyleType: "none" }}>
          <li>
            <div>
              <h2>Products</h2>
              <ul style={{ listStyleType: "none" }}>
                <li>Twetch Community Tools</li>
                <li>Staking</li>
                <li>Bonding</li>
              </ul>
            </div>
          </li>
          <li>
            <div>
              <h2>Get Involved</h2>
              <ul style={{ listStyleType: "none" }}>
                <li>Forum</li>
                <li>Governance</li>
                <li>Documentation</li>
              </ul>
            </div>
          </li>
          <li>
            <div>
              <h2>Social</h2>
              <ul style={{ listStyleType: "none" }}>
                <li>Github</li>
                <li>Medium</li>
                <li>Twitter</li>
                <li>Discord</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );

  return (
    <div className="LandingPage">
      <div className="Main" style={{ backgroundImage: "url('./icon.png')" }}>
        <div className="Headers">
          <Hidden smUp>
            <div className="Brand">
              <span role="img" aria-label="the egg way">
                (🥚,🐣)
              </span>
            </div>
            <div style={{ flexGrow: 1 }} />
            <div>
              <IconButton onClick={handleDrawerOpen}>
                <MenuIcon />
              </IconButton>
            </div>
          </Hidden>
          <Hidden smDown>
            <Grid container>
              <Grid item xs={8}>
                <div className="Brand">
                  <span role="img" aria-label="the egg way">
                    (🥚,🐣)
                  </span>
                  <span style={{ fontSize: "18px", marginLeft: "3px" }}>
                    EggDao
                  </span>
                </div>
              </Grid>
              <Grid item xs={4}>
                <Grid container justifyContent="space-between">
                  <Button className="NavButton">Products</Button>
                  <Button className="NavButton">Get Involved</Button>
                  <Button className="NavButton">Social</Button>
                </Grid>
              </Grid>
            </Grid>
          </Hidden>
        </div>
        <div style={{ flexGrow: 1 }} />
        <div>
          <div style={{ display: "flex" }}>
            <div style={{ flexGrow: 1 }} />
            <Hidden smUp>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  maxWidth: "260px"
                }}
                className="Glass"
              >
                <Typography variant="body1" className="Title">
                  The Twetch Reserve Currency
                </Typography>
                <Typography variant="body1" className="Subtitle">
                  Community tools to grow your wealth - twetch and earn
                  compounding interest
                </Typography>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column"
                  }}
                >
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: "#ffa000",
                      textTransform: "none"
                    }}
                  >
                    Enter App
                  </Button>
                  <Button
                    variant="outlined"
                    style={{
                      marginTop: "12px",
                      backgroundColor: "#fff",
                      textTransform: "none"
                    }}
                  >
                    Documentation
                  </Button>
                </div>
              </div>
            </Hidden>
            <Hidden smDown>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  maxWidth: "420px"
                }}
                className="Glass"
              >
                <Typography variant="body1" className="Title">
                  The Twetch Reserve Currency
                </Typography>
                <Typography variant="body1" className="Subtitle">
                  Community tools to grow your wealth - twetch and earn
                  compounding interest
                </Typography>
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <Button
                    variant="contained"
                    className="ActionButton"
                    style={{ backgroundColor: "#ffa000" }}
                  >
                    Enter App
                  </Button>
                  <Button
                    variant="outlined"
                    className="ActionButton"
                    style={{ backgroundColor: "#fff" }}
                  >
                    Documentation
                  </Button>
                </div>
              </div>
            </Hidden>
            <div style={{ flexGrow: 1 }} />
          </div>
        </div>
        <div style={{ flexGrow: 1 }} />
      </div>
      <div className="Footers">
        <div className="Metrics" style={{ width: "100%" }}>
          <Typography variant="body1" style={{ color: "#fff" }}>
            Total Eggs Stacked
          </Typography>
          <Typography
            variant="body1"
            style={{ color: "#fff", fontSize: "21px" }}
          >
            3/2066
          </Typography>
        </div>
        <div className="Metrics" style={{ width: "100%" }}>
          <Typography variant="body1" style={{ color: "#fff" }}>
            Community Ventures
          </Typography>
          <Typography
            variant="body1"
            style={{ color: "#fff", fontSize: "21px" }}
          >
            33
          </Typography>
        </div>
        <div className="Metrics" style={{ width: "100%" }}>
          <Typography variant="body1" style={{ color: "#fff" }}>
            Current APY
          </Typography>
          <Typography
            variant="body1"
            style={{ color: "#fff", fontSize: "21px" }}
          >
            333%
          </Typography>
        </div>
      </div>
      <Drawer variant="persistent" anchor="top" open={open}>
        {drawer}
      </Drawer>
    </div>
  );
}
