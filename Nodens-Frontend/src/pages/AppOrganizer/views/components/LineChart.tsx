import { Chart , CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { OffersT } from '../../../../types';
Chart.register( CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend );

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const
    },
    title: {
      display: true,
      text: 'Info de tus ofertas',
    }
  }
}

const labels = ['Numero de ofertas', 'Ofertas con aplicantes', 'Promedio aplicantes por oferta'];

const LineChart = ({offers}: {offers: OffersT[]}) => {
  const data = {
    labels,
    datasets: [{
      label: 'Ofertas',
      data: [
        offers.length,
        offers.filter(off=> off.Applicants.length > 0).length,
        offers.reduce((accumulator, currentValue) => accumulator + currentValue.Applicants.length, 0) / offers.length
      ],
      backgroundColor: 'rgba(53, 162, 235, 0.5)'

    }]
  }
  return (
    <Bar options={options} data={data} />
  )
}

export default LineChart