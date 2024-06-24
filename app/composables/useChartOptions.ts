import colors from 'tailwindcss/colors'

export default () => {
  const colorMode = useColorMode()
  const options = computed(() => ({
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: colorMode.value === 'dark' ? colors.white : colors.black,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: colorMode.value === 'dark' ? colors.white : colors.black,
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          color: colorMode.value === 'dark' ? colors.white : colors.black,
        },
      },
    },
  }))

  return options
}
