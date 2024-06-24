<template>
  <h2>Money spent by month</h2>
  <Bar :data="data" :options="options" />
</template>

<script lang="ts" setup>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  type ChartData,
} from 'chart.js'
import { Bar } from 'vue-chartjs'
import colors from 'tailwindcss/colors'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const colorMode = useColorMode()
colorMode.preference = 'dark'

const options = useChartOptions()

const data: ChartData<'bar'> = {
  labels: ['January', 'February', 'March'],
  datasets: [
    {
      label: 'Month',
      data: [400, 200, 120],
      borderColor: 'bg-orange-400',
      backgroundColor: [colors.red[500], colors.orange[500], colors.amber[800]],
    },
  ],
}
</script>
