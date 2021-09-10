import { Button, colors, Grid, Typography } from "@material-ui/core";
import "./styles.css";

export default function App() {
  return (
    <div className="LandingPage">
      <div className="Headers">
        <Grid container>
          <Grid item xs={6}>
            <div className="Brand">
              <span role="img" aria-label="the egg way">
                (🥚,🐣)
              </span>
              <Typography
                variant="span"
                style={{ fontSize: "18px", marginLeft: "3px" }}
              >
                EggDao
              </Typography>
            </div>
          </Grid>
          <Grid item xs={6}>
            <Grid container justify="space-between">
              <Button className="NavButton">Products</Button>
              <Button className="NavButton">Get Involved</Button>
              <Button className="NavButton">Social</Button>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <div className="Main">
        <div style={{ flexGrow: 1 }} />
        <div>
          <div style={{ display: "flex" }}>
            <div style={{ flexGrow: 1 }} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                maxWidth: "333px"
              }}
            >
              <Typography variant="body1" className="Title">
                The Twetch Reserve Currency
              </Typography>
              <Typography variant="body1" className="Subtitle">
                Community tools to grow your wealth - twetch and earn
                compounding interest
              </Typography>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
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
            <div style={{ flexGrow: 1 }} />
          </div>
        </div>
        <div style={{ flexGrow: 1 }} />
      </div>
      <div className="Footers">
        <div className="Metrics">
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
        <div className="Metrics">
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
        <div className="Metrics">
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
    </div>
  );
}
