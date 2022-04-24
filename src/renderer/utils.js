// 解析cmd 终端命令返回值， 表格处理
export const Fn = (str) => {
  let lx = str.replace(/\s /g, ",");
  let arr = lx.split(",");
  const newArr = arr.filter((i) => i && i.trim());
  newArr.forEach((item) => item.trim());
  return newArr;
};
