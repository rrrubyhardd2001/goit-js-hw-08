function getElementWidth(content, padding, border) {
  let conten = parseFloat(content);
  let paddin = parseFloat(padding);
  let borde = parseFloat(border);
  let totalwidth = conten + (paddin + borde) * 2;
  return totalwidth;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
