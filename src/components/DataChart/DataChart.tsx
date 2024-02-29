import React, { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";
// @ts-ignore
import { ChartConfiguration } from "chart.js/dist/types";

const DataChart = (props: ChartConfiguration) => {
  const { data, options } = props;
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const chart = new Chart(chartRef.current, {
        ...props,
        // options: {
        // ...darkOptions,
        // ...lightOptions,
        // },
      });
      return () => {
        chart.destroy();
      };
    }
  }, [data]);
  return <canvas ref={chartRef} />;
};
Chart.register(...registerables);

export default DataChart;
