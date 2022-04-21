// 解析cmd 终端命令返回值， 表格处理
export const Fn = (str) => {
  
  console.log(str.replace(new RegExp(" ", "m"), ""))
  return str.replace(new RegExp(" +", "gm"), ",").split(",");
};
