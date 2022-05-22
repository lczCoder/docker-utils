// 解析cmd 终端命令返回值， 表格处理
export const regCmdStr = (str) => {
  let lx = str.replace(/\s /g, "|");
  let arr = lx.split("|");
  const newArr = arr.filter((i) => i && i.trim());
  newArr.forEach((item) => item.trim());
  return newArr;
};

// 获取镜像列表 解析格式
export const regImagesList = (stdout) => {
  const newAry = [];
  let source = stdout.split("\n");
  source.pop();
  source.shift();
  source.forEach((item) => {
    const current = regCmdStr(item);
    let obj = {};
    obj.repository = current[0]; // 储存库名
    obj.tag = current[1]; // 标签名称
    obj.image = current[2]; // image 镜像名称
    obj.time = current[3]; // 创建时间
    obj.size = current[4]; // 存储大小
    newAry.push(obj);
  });
  return newAry
};
