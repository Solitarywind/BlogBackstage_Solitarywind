// 获取当前月份的天数
function getNowDate() {
  const date = new Date();
  const year = date.getFullYear();
  const mouth = date.getMonth() + 1;
  const Tdate = new Date(year, mouth, 0);
  return Tdate.getDate();
}

function hasChart(chartId, dateStatus) {
  let xAdata = []; // 横坐标

  let option = null;
  let seriesdata = [];
  let name = null;
  if (chartId === '0') {
    name = '访问量';
  } else if (chartId === '1') {
    name = '文章发布量';
  } else {
    name = '笔记发布量';
  }

  switch (+dateStatus) {
    case 0:
      for (let i = 0; i < 24; i += 1) {
        if (i < 10) {
          xAdata.push(`0${i}:00`);
        } else {
          xAdata.push(`${i}:00`);
        }
        seriesdata.push(Math.ceil(Math.random() * 100) * i + Math.ceil(Math.random() * 100));
      }
      break;
    case 1:
      xAdata = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
      seriesdata = [122, 155, 288, 499, 333, 227, 600];
      break;
    case 2:
    {
      const date = getNowDate();
      for (let i = 0; i < date; i += 1) {
        xAdata.push(`${i + 1}号`);
        seriesdata.push(Math.ceil(Math.random() * 100) * i + Math.ceil(Math.random() * 100));
      }
      break;
    }
    default:
      for (let i = 0; i < 12; i += 1) {
        xAdata.push(`${i + 1}月`);
        seriesdata.push(Math.ceil(Math.random() * 100) * i + Math.ceil(Math.random() * 100));
      }
      break;
  }

  option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        crossStyle: {
          color: '#999',
        },
      },
    },
    // legend: {
    //   data: [name],
    // },
    xAxis: [
      {
        type: 'category',
        data: xAdata,
        axisPointer: {
          type: 'shadow',
        },
      },
    ],
    yAxis: {
      type: 'value',
      name,
    },
    series: [
      {
        data: seriesdata,
        type: 'bar',
      },
    ],
  };

  return option;
}

export { hasChart };
