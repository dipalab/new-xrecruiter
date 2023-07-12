import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  type ScriptableContext
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler
)

export const options = {
  responsive: true,
  elements: {
    line: {
      fill: true
    },
    point: {
      radius: 0
    }
  },
  scales: {
    x: {
      grid: {
        display: false
      }
    },
    y: {
      max: 1600000,
      min: 0
    }
  }
}

const labels = ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5']

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [80000, 100000, 130000, 160000, 250000],
      borderColor: '#FF5A50',
      backgroundColor: (context: ScriptableContext<'line'>) => {
        const ctx = context.chart.ctx
        const gradient = ctx.createLinearGradient(0, 0, 0, 200)
        gradient.addColorStop(0, '#FF5A5033')
        gradient.addColorStop(1, '#00A38C00')
        return gradient
      },
      borderWidth: 1.5,
      fill: true
    },
    {
      label: 'Dataset 2',
      data: [400000, 550000, 600000, 800000, 1200000],
      borderColor: '#00A38C',
      backgroundColor: (context: ScriptableContext<'line'>) => {
        const ctx = context.chart.ctx
        const gradient = ctx.createLinearGradient(0, 0, 0, 200)
        gradient.addColorStop(0, '#00A38C33')
        gradient.addColorStop(1, '#00A38C00')
        return gradient
      },
      borderWidth: 1.5,
      fill: true
    }
  ]
}

const LineChart = () => {
  return (
    <>
      <Line options={options} data={data} />
    </>
  )
}

export default LineChart
