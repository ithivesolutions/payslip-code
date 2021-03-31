const prompt = require("prompt-sync")({ sigint: true });

const input = prompt("How can I serve you ? : ");

const regexp = /[^" ]+|("[^"]*")/g;

const inSplit = input.match(regexp);

const inData = {
  moduleName: inSplit[0],
  empName: inSplit[1],
  annualSal: parseInt(inSplit[2]),
};

/**
 * If are using this in frontend we can make the below
 * input to be fetched from the DB upon component loading
 */
const taxBracket = [
  { from: 0, to: 20000, taxCent: 0 },
  { from: 20001, to: 40000, taxCent: 0.1 },
  { from: 40001, to: 80000, taxCent: 0.2 },
  { from: 80001, to: 180000, taxCent: 0.3 },
  { from: 180001, to: Infinity, taxCent: 0.4 },
];

/**
 * The tax bracket can be changed to the range 20000 to 40000
 * so the additional math calculation further down the function
 * can be ignored
 */

processPayslip = (inData) => {
  let calculatedTax = 0;

  const grossSalary = inData.annualSal / 12;

  if (isNaN(inData.annualSal) || inData.annualSal < 0) {
    console.log(" ");
    console.log(
      "Invalida data - Annual Salary should be numbers and greater than 0"
    );
  } else {
    taxBracket.map((eachBracket) => {
      if (inData.annualSal >= eachBracket.to) {
        calculatedTax =
          calculatedTax +
          (eachBracket.to - eachBracket.from + 1) * eachBracket.taxCent;
      } else if (
        inData.annualSal < eachBracket.to &&
        inData.annualSal > eachBracket.from - 1
      ) {
        calculatedTax =
          calculatedTax +
          (inData.annualSal - (eachBracket.from - 1)) * eachBracket.taxCent;
      }
    });

    calculatedTax = calculatedTax / 12;

    const netPay = grossSalary - calculatedTax;

    /**
     * Rounded or Fixed the decimal to two decimal points
     */
    console.log("------------- > Payslip Generated < ------------- ");
    console.log(" ");
    console.log(`Monthly Payslip for   : ${inData.empName}`);
    console.log(`Gross Monthly Income  : $${grossSalary.toFixed(2)}`);
    console.log(`Monthly Income Tax    : $${calculatedTax.toFixed(2)}`);
    console.log(`Net Monthly Income    : $${netPay.toFixed(2)}`);
    console.log(" ");
    console.log("-------------------- > End < -------------------- ");
  }
};

processPayslip(inData);
