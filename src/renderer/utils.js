// 解析cmd 终端命令返回值， 表格处理
export const Fn = (str) => {
  let lx = str.replace(/\s /g, ",");
  let arr = lx.split(",");
  return arr.filter((i) => i && i.trim());
};
