export const getKeepTwoDigits = (num = 0, baseNum = 1) => {
  const val = num / baseNum;

  return val.toFixed(2)
}

export const getNumLen = (num: number) => {
  const idx = String(num).indexOf('.') + 1;   //小数点的位置

  return idx > 0 ? String(num).length - idx : 0;  //小数的位数
}

export const getCommonAxis = (list: number[], splitNumber = 4) => {
  let axisMax = Math.max(...list.flat(9));
  const axisMin = Math.min(...list.flat(9));

  // 不能整除，将其设为最小可整除数值
  if ((axisMax % splitNumber !== 0 || axisMax % 1000 !== 0) && axisMax > 10) {
    let average = Math.ceil(axisMax / splitNumber);
    const pow = (average + '').length - 2 - getNumLen(average); // 基准值的次方数，值越大，距离越大
    const baseNum = Math.pow(10, pow > 1 ? pow : 1);
    const remainder = average % baseNum; // 整除余数

    if(remainder !== 0) {
      average += baseNum - remainder;
    }

    axisMax = average * splitNumber;
  }

  if (axisMax < 10) {
    let average = axisMax / splitNumber;
    const decimalNum = getNumLen(average);

    if(decimalNum > 2) {
      const baseNum = Math.pow(10, decimalNum - 1);
      average = Number.parseFloat(getKeepTwoDigits(Math.ceil(average * baseNum) / baseNum));

      axisMax = average * splitNumber;
    }
  }

  const axis: {
    max: string;
    interval: number;
    min?: string;
  } = {
    max: getKeepTwoDigits(axisMax),
    interval: Number.parseFloat(getKeepTwoDigits(axisMax / splitNumber))
  }

  if(axisMin < 0 && Number.parseFloat(axis.max) > 0) {
    axis.interval = Math.ceil((Number.parseFloat(axis.max) - axisMin) / splitNumber);
    axis.max = String(axis.interval * Math.ceil(Number.parseFloat(axis.max) / axis.interval));
  }

  if(Number.parseFloat(axis.max) < 0) {
    axis.interval = Math.abs(axis.interval)

    axis.min = axis.max;
    axis.max = "0";
  }

  return axis;
}

export const getDoubleDigit = (data: string[] | Record<string, number>[], baseNum: number) => {
  const forEach = (dataList: string[] | Record<string, number>[]) => dataList.forEach((val: any, idx: number) => {
    if(Array.isArray(val)) {
      forEach(val);
    } else {
      data[idx] = getKeepTwoDigits(val, baseNum)
    }
  })

  if(Array.isArray(data)) {
    forEach(data);
  } else {
    return getKeepTwoDigits(data, baseNum)
  }

  return data;
}
