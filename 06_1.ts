function judgeNumberOrString(value1: number | string, value2: number | string) {
  if (typeof value1 === "string" || typeof value2 === "string") {
    return String(value1) + String(value2);
  } else {
    return value1 * value2;
  }
}
