import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js"
import { colors } from '../../utils/chartColors';
import { chartOptions } from '../../utils/barChartConfig';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export interface ChartProps {
    labels: string[]
    dataset: number[]
}
function BarChart({ dataset, labels }: ChartProps) {

    const data = {
        labels,
        datasets: [
            {
                data: dataset,
                backgroundColor: colors,
            },
        ],
    }
    return (
        <div className="my-10  w-full h-60">
            <Bar data={data} options={chartOptions} />
        </div>
    )
}
export default BarChart;