import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  ChartOptions,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

//** Mui Components

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options: ChartOptions<"bar"> = {
  responsive: true,
  indexAxis: "y",
  
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
  elements: {
    line: {
      backgroundColor: "#FFFfffA6",
    },
  },
  plugins: {
    legend: {
      position: "bottom" as const,
    },
    title: {
      display: true,
      text: "Riders propios para hoy",
      align: "start",
      font: {
        size: 18,
        weight: "bold",
      },
      color: "#f5f5f5",
      padding: {
        top: 15,
        bottom: 15,
      },
    },
  },
};

export default function BarChart() {
  const labels = Array.from({ length: 1 }, () =>
    Math.floor(Math.random() * 10)
  );

  const data = {
    labels,

    datasets: [
      {
        label: "Activos",
        data: labels.map(() => Math.floor(Math.random() * 10)),
        backgroundColor: "rgba(255, 75, 75, 1)",
      },
	  {
        label: "Pendientes",
        data: labels.map(() => Math.floor(Math.random() * 10)),
        backgroundColor: "rgba(65, 203, 226, 1)",
      },
    ],
  };

  return <Bar style={{maxHeight: "100%" }} options={options} data={data} />;
}
