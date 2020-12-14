import { thousandthPercentile } from "./verification";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { selfAdaption } = require('./variables');

export const computedPxTVw = (size: number) => {
  return selfAdaption ? size / 3840 * window.innerWidth : size;
}

export const computedPxTVh = (size: number) => {
  return selfAdaption ? size / 2160 * window.innerHeight : size;
}

// 计算千分位数值
export const computedThousandthNum = (num: number | string) => {
  return (num + '').replace(thousandthPercentile, '$&,');
}
