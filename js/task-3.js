// function getElementWidth(content, padding, border) {
//   let conten = parseFloat(content);
//   let paddin = parseFloat(padding);
//   let borde = parseFloat(border);
//   let totalwidth = conten + (paddin + borde) * 2;
//   return totalwidth;
// }

// console.log(getElementWidth("50px", "8px", "4px")); // 74
// console.log(getElementWidth("60px", "12px", "8.5px")); // 101
// console.log(getElementWidth("200px", "0px", "0px")); // 200

function checkForSpam(message) {
  let registr = message.toUpperCase();
  return (
    registr.includes("spam".toUpperCase()) ||
    registr.includes("sale".toUpperCase())
  );
}
console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
