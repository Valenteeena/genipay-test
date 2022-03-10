import React from "react";
import { Activity } from "../../styles/Homepage.styles";
import Chart from "react-apexcharts";

const ActivityChart = () => {
  //   var options = {
  //     chart: {
  //       type: "line",
  //     },
  //     series: [
  //       {
  //         name: "activity",
  //         data: [4, 3, 3.5, 3, 2.5, 3.5, 3],
  //       },
  //     ],
  //     xaxis: {
  //       categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  //     },
  //   };
  return (
    <Activity>
      <div className="top">
        <h3>
          Activity
          <span>Month {arrow}</span>
        </h3>
        <p>View Transaction History</p>
      </div>

      <div>
        {/* <ReactApexChart
          options={options}
          width={"100%"}
          height={400}
          type="line"
        /> */}

        <Chart
          options={{
            colors: "#4d73cf",
            xaxis: {
              categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            },
            dataLabels: { enabled: false },
          }}
          series={[
            {
              name: "activity",
              data: [4, 3, 3.5, 3, 2.5, 3.5, 3],
            },
          ]}
          type="area"
          style={{ minHeight: "40px" }}
          height={300}
        />
      </div>
    </Activity>
  );
};

export default ActivityChart;
const arrow = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.28 5.9668L8.9333 10.3135C8.41997 10.8268 7.57997 10.8268 7.06664 10.3135L2.71997 5.9668"
      stroke="#017189"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
