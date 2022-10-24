//** Charts JS
import {
  CategoryScale,
  Chart as ChartJS,
  ChartOptions,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function LineChart() {
  const labels = Array.from({ length: 7 }, () =>
    Math.floor(Math.random() * 10)
  );

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() => Math.floor(Math.random() * 10)),
        borderColor: "rgba(42,197,112,255)",
        backgroundColor: "rgba(42,197,112,255)",
      },
      {
        label: "Dataset 2",
        data: labels.map(() => Math.floor(Math.random() * 10)),
        borderColor: "rgba(253, 173, 21)",
        backgroundColor: "rgba(253, 173, 21)",
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    elements: {
      line: {
        tension: 0.2,
      },
      point: {
        radius: 0,
      },
    },
    plugins: {
      legend: {
        position: "top" as const,
        align: "start",
        display: false,
      },
      title: {
        display: true,
        text: `Pedidos entregados`,
        align: "start",
        font: {
          size: 18,
          weight: "bold",
        },
        padding: {
          top: 15,
          bottom: 15,
        },
        color: "#f5f5f5",
      },
    },
    scales: {
      y: {
        ticks: {
          color: "#FFFfffA6",
          precision: 0,
        },
        grid: {
          color: "#FFFfffA6",
        },
      },
      x: {
        ticks: {
          color: "#FFFfffA6",
        },
        grid: {
          display: false,
        },
      },
    },
  };

  return <Line style={{maxHeight: "100%" }} options={options} data={data} />;
}
