export const barChartDataDailyTraffic = [
    {
      name: 'projected income  €',
      data: [3280, 2120, 3040, 2980, 2560, 3280, 4120],
    },
  ];
  
  export const barChartOptionsDailyTraffic = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    tooltip: {
      style: {
        fontSize: '12px',
        fontFamily: undefined,
        backgroundColor: '#000000',
      },
      onDatasetHover: {
        style: {
          fontSize: '12px',
          fontFamily: undefined,
        },
      },
      theme: 'dark',
    },
    xaxis: {
      categories: ['01', '04', '08', '12', '14', '16', '18'],
      show: true,
      labels: {
        show: true,
        style: {
          colors: '#A3AED0',
          fontSize: '14px',
          fontWeight: '500',
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
      color: 'black',
      labels: {
        show: true,
        style: {
          colors: '#CBD5E0',
          fontSize: '14px',
        },
      },
    },
    grid: {
      show: false,
      strokeDashArray: 5,
      yaxis: {
        lines: {
          show: true,
        },
      },
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        type: 'vertical',
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        colorStops: [
          [
            {
              offset: 0,
              color: '#4318FF',
              opacity: 1,
            },
            {
              offset: 100,
              color: 'rgba(67, 24, 255, 1)',
              opacity: 0.28,
            },
          ],
        ],
      },
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        columnWidth: '40px',
      },
    },
  };
  
  export const pieChartOptions = {
    labels: ['Projected', 'Balance', 'Empty'],
    colors: ['#4318FF', '#6AD2FF', '#48bb78'],
    chart: {
      width: '50px',
    },
    states: {
      hover: {
        filter: {
          type: 'none',
        },
      },
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    hover: { mode: null },
    plotOptions: {
      donut: {
        expandOnClick: false,
        donut: {
          labels: {
            show: false,
          },
        },
      },
    },
    fill: {
      colors: ['#4318FF', '#6AD2FF', '#48bb78'],
    },
    tooltip: {
      enabled: true,
      theme: 'dark',
      style: {
        fontSize: '12px',
        fontFamily: undefined,
        backgroundColor: '#000000',
      },
    },
  };
  
  export const pieChartData = [63, 32.2, 4.8];
  
  export const barChartDataWeeklyRevenue = [
    {
      name: 'CARTS ABANDONDED',
      data: [64, 53, 43, 39, 24, 15, 16, 18, 13],
      color: '#ff0000',
    },
    {
      name: 'FERO SAVINGS',
      data: [40, 27, 33, 39, 42, 45, 56, 62, 74],
      color: '#48bb78',
    },
    {
      name: 'FIXED INCOME',
      data: [300, 270, 230, 290, 220, 250, 160, 220, 280],
      color: '#6AD2Fa',
    },
    {
      name: 'PROJECTED INCOME',
      data: [400, 370, 330, 390, 320, 350, 360, 320, 460],
      color: '#4318FF',
    },
  ];
  
  export const barChartOptionsWeeklyRevenue = {
    chart: {
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    // colors:['#ff3322','#faf']
    tooltip: {
      style: {
        fontSize: '12px',
        fontFamily: undefined,
        backgroundColor: '#000000',
      },
      theme: 'dark',
      onDatasetHover: {
        style: {
          fontSize: '12px',
          fontFamily: undefined,
        },
      },
    },
    xaxis: {
      categories: ['17', '18', '19', '20', '21', '22', '23', '24', '25'],
      show: false,
      labels: {
        show: true,
        style: {
          colors: '#A3AED0',
          fontSize: '14px',
          fontWeight: '500',
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
      color: 'black',
      labels: {
        show: false,
        style: {
          colors: '#A3AED0',
          fontSize: '14px',
          fontWeight: '500',
        },
      },
    },
  
    grid: {
      borderColor: 'rgba(163, 174, 208, 0.3)',
      show: true,
      yaxis: {
        lines: {
          show: false,
          opacity: 0.5,
        },
      },
      row: {
        opacity: 0.5,
      },
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
    fill: {
      type: 'solid',
      colors: ['#5E37FF', '#6AD2FF', '#E1E9F8'],
    },
    legend: {
      show: false,
    },
    colors: ['#5E37FF', '#6AD2FF', '#E1E9F8'],
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        columnWidth: '20px',
      },
    },
  };
  
  export const lineChartDataTotalSpent = [
    {
      name: 'Revenue',
      data: [59, 73, 43, 74, 49, 70],
      color: '#4318FF',
    },
    {
      name: 'Fero Difference',
      data: [40, 60, 30, 56, 30, 66],
      color: '#48bb78',
    },
    {
      name: 'Profit Pre Fero',
      data: [30, 40, 24, 46, 20, 60],
      color: '#6AD2FF',
    },
  ];
  
  export const lineChartOptionsTotalSpent = {
    legend: {
      show: false,
    },
  
    theme: {
      mode: 'light',
    },
    chart: {
      type: 'line',
  
      toolbar: {
        show: false,
      },
    },
  
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
  
    tooltip: {
      style: {
        fontSize: '12px',
        fontFamily: undefined,
        backgroundColor: '#000000',
      },
      theme: 'dark',
      x: {
        format: 'dd/MM/yy HH:mm',
      },
    },
    grid: {
      show: false,
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: '#A3AED0',
          fontSize: '12px',
          fontWeight: '500',
        },
      },
      type: 'text',
      range: undefined,
      categories: ['SEP', 'OCT', 'NOV', 'DEC', 'JAN', 'FEB'],
    },
  
    yaxis: {
      show: false,
    },
  };

  export const hoverchartData = [
    {
      month: "Jan 21",
      Performance: 4000,
      Benchmark: 3000,
    },
    {
      month: "Feb 21",
      Performance: 3000,
      Benchmark: 2000,
    },
    {
      month: "Mar 21",
      Performance: 2000,
      Benchmark: 1700,
    },
    {
      month: "Apr 21",
      Performance: 2780,
      Benchmark: 2500,
    },
    {
      month: "May 21",
      Performance: 1890,
      Benchmark: 1890,
    },
    {
      month: "Jun 21",
      Performance: 2390,
      Benchmark: 2000,
    },
    {
      month: "Jul 21",
      Performance: 3490,
      Benchmark: 3000,
    },
  ];
  