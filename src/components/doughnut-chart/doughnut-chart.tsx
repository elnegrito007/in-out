import {
  ArcElement,
  Chart as ChartJS,
  ChartOptions,
  Legend,
  Tooltip,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const options: ChartOptions<"doughnut"> = {
  responsive: true,
  circumference: 180,
  rotation: -90,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Doughnut Chart",
    },
  },
};

export default function BarChart() {
  const labels = [3,4,5]

  const data = {
    labels,
    datasets: [
      {
        label: "Activos",
        data: labels,
        backgroundColor: [
          "rgba(255, 75, 75, 1)",
          "rgba(104, 227, 101, 1)",
          "rgba(60, 46, 103, 1)",
        ],
        borderColor: [
          "rgba(255, 255, 255 ,1)",
          "rgba(255, 255, 255 ,1)",
          "rgba(255, 255, 255 ,1)",
        ],
      },
    ],
  };

  return <Doughnut style={{maxHeight: "100%" }} options={options} data={data} />;
}
