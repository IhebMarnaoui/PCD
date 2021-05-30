import React, { useEffect } from "react";
import FusionCharts from "fusioncharts";
import TimeSeries from "fusioncharts/fusioncharts.timeseries";
import ReactFC from "react-fusioncharts";

ReactFC.fcRoot(FusionCharts, TimeSeries);

const jsonify = (res) => res.json();
const dataFetch = fetch(
     "https://s3.eu-central-1.amazonaws.com/fusion.store/ft/data/line-chart-with-time-axis-data.json"
).then(jsonify);
const schemaFetch = fetch(
     "https://s3.eu-central-1.amazonaws.com/fusion.store/ft/schema/line-chart-with-time-axis-schema.json"
).then(jsonify);

const dataSource = {
     chart: {},
     caption: {
          text: "Sales Analysis",
     },
     subcaption: {
          text: "Grocery",
     },
     yaxis: [
          {
               plot: {
                    value: "Grocery Sales Value",
               },
               format: {
                    prefix: "$",
               },
               title: "Sale Value",
          },
     ],
};

const ChartViewer = () => {
     let tab = window.location.href.split("/");
     let route = tab[tab.length - 1];
     useEffect(() => {
          fetch("http://localhost:5000/company/" + route)
               .then((resp) => resp.json())
               .then((data) => console.log(data));
     }, [route]);

     return <h1>data</h1>;
};

// class ChartViewer extends React.Component {
//      constructor(props) {
//           super(props);
//           this.onFetchData = this.onFetchData.bind(this);
//           this.state = {
//                timeseriesDs: {
//                     type: "timeseries",
//                     renderAt: "container",
//                     width: "600",
//                     height: "400",
//                     dataSource,
//                },
//           };
//      }

//      componentDidMount() {
//           this.onFetchData();
//      }

//      onFetchData() {
//           Promise.all([dataFetch, schemaFetch]).then((res) => {
//                const data = res[0];
//                const schema = res[1];
//                const fusionTable = new FusionCharts.DataStore().createDataTable(
//                     data,
//                     schema
//                );
//                const timeseriesDs = Object.assign({}, this.state.timeseriesDs);
//                timeseriesDs.dataSource.data = fusionTable;
//                this.setState({
//                     timeseriesDs,
//                });
//           });
//      }

//      render() {
//           useEffect(() => {
//                alert(route);
//                fetch("http://localhost:5000/company/" + route);
//           }, [route]);
//           return (
//                <div>
//                     {this.state.timeseriesDs.dataSource.data ? (
//                          <ReactFC {...this.state.timeseriesDs} />
//                     ) : (
//                          "loading"
//                     )}
//                </div>
//           );
//      }
// }

export default ChartViewer;
