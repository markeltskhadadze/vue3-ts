<script setup lang="ts">
  import { type PropType, ref} from 'vue'
  import { Bar } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

  const data = ref({
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Sales',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        data: [10, 15, 7, 12, 9],
      },
    ],
  })

  const options = ref({
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        display: false
      },
      y: {
        display: false
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  })

  const props = defineProps({
    chartId: {
      type: String as PropType<string>
    },
    datasetIdKey: {
      type: String as PropType<string>
    },
    cssClasses: {
      type: String as PropType<string>
    },
    styles: {
      type: Object as PropType<Object>
    },
    width: {
      type: Number as PropType<number>
    },
    height: {
      type: Number as PropType<number>,
      default: 80
    }
  })

</script>
<template>
  <Bar :data="data"
       :options="options"
       :chart-id="props.chartId"
       :dataset-id-key="props.datasetIdKey"
       :css-classes="props.cssClasses"
       :styles="props.styles"
       :width="props.width"
       :height="props.height" />
</template>
