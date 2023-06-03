import { Chart , CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
Chart.register( CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend );

const LineChart = () => {
  return (
    <div>LineChart</div>
  )
}

export default LineChart