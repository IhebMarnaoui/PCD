import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import ADM from "../Images/plot_arima/ADM.png";
import APPL from "../Images/plot_arima/APPL.png";
import CSCO from "../Images/plot_arima/CSCO.png";
import FB from "../Images/plot_arima/FB.png";
import HP from "../Images/plot_arima/HP.png";
import IBM from "../Images/plot_arima/IBM.png";
import MSFT from "../Images/plot_arima/MSFT.png";
import QCOM from "../Images/plot_arima/QCOM.png";
import Header from "./Header";
import LatestForcasts from "./LatestForcasts";

const ChartViewer = () => {
  let tab = window.location.href.split("/");
  let route = tab[tab.length - 1];
  const [chartData, setChartData] = useState({});

  const chart = (date, val) => {
    setChartData({
      labels: date,
      datasets: [
        {
          label: route + " 7 days prediction",
          data: val,
          backgroundColor: ["rgba(75,192,192,1)"],
          borderWidth: 4,
        },
      ],
    });
  };
  useEffect(() => {
    fetch("http://localhost:5000/company/" + route)
      .then((resp) => resp.json())
      .then((data) => chart(data["Date"], data["Val"]));
    console.log(route);
  }, [route]);
  return (
    <>
    <Header />
    <LatestForcasts />
    <center>
      <div style={{ width: "90%" }}>
        <Line data={chartData} />
        </div>
          {route == "AAPL" && <img style={{ width: "60%" }} src={APPL} />}
          {route == "ADM" && <img style={{ width: "60%" }} src={ADM} />}
          {route == "CSCO" && <img style={{ width: "60%" }} src={CSCO} />}
          {route == "FB" && <img style={{ width: "60%" }} src={FB} />}
          {route == "HPQ" && <img style={{ width: "60%" }} src={HP} />}
          {route == "IBM" && <img style={{ width: "60%" }} src={IBM} />}
          {route == "QCOM" && <img style={{ width: "60%" }} src={QCOM} />}
          {route == "MSFT" && <img style={{ width: "60%" }} src={MSFT} />}
    </center>
    </>
  );
};

export default ChartViewer;
