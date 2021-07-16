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
  switch (dateStatus) {
    case 0:
      for (let i = 0; i < 24; i += 1) {
        xAdata.push(`0${i}:00`);
      }
      break;
    case 1:
      xAdata = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
      break;
    case 2:
    {
      const date = getNowDate();
      for (let i = 0; i < date; i += 1) {
        xAdata.push(`${i + 1}号`);
      }
      break;
    }
    default:
      for (let i = 0; i < 12; i += 1) {
        xAdata.push(`${i + 1}月`);
      }
      break;
  }
  console.log(chartId, xAdata);
}

export { hasChart };
