import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
import { connect } from 'react-redux';
import './LineChartComponent.css'
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  

  
const LineChartComponent = ({apprentice}) =>
{
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: `Grafica de rendimiento de ${apprentice?.apprenticeName}`,
          },
        },
      };

    const labels = apprentice?.categoriesName;
    const data = {
        labels,
        datasets: [
          {
            label: 'Rendimiento',
            data: labels?.map((label, i) => apprentice?.grades[i]),
            borderColor: 'rgb(33, 17, 126)',
            backgroundColor: 'rgba(33, 17, 126, 0.8)',
          },
          {
            label: 'Alerta amarilla',
            data: labels?.map(() => 75),
            borderColor: 'rgb(230, 230, 61)',
            backgroundColor: 'rgba(230, 230, 61, 0.8)',
          },
          {
            label: 'Alerta roja',
            data: labels?.map((label, i) => 50),
            borderColor: 'rgb(205, 18, 18)',
            backgroundColor: 'rgba(205, 18, 18, 0.8)',
          }
        ],
      };

      return <div className="chart">
        {apprentice? (<Line options={options} data={data}/>):<div></div>}
      </div>
}

const mapState = (state) => 
({apprentice: state.profileReducer.apprentice})

export default connect(mapState)(LineChartComponent);