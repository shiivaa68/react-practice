import {
  calculateInvestmentResults,
  formatter,
} from "../../utils/investment.js";

export default function Results({ input }) {
  console.log(input, "input");
  const resultData = calculateInvestmentResults( input );
  console.log(resultData,'resultdata');

  const initialInvestment =
    resultData[0].valueEndOfYear -
    resultData[0].interest -
    resultData[0].annualInvestment;
  console.log(resultData);

  return (
    <table id="result">
      <thead>
        <tr>
          <th>year</th>
          <th>ynvestment value</th>
          <th>interest(year)</th>
          <th>total interest</th>
          <th>invested capital</th>
        </tr>
      </thead>
      <tbody>
        {resultData.map((yearData) => {
          const totalinterest =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            initialInvestment;
          const totalAmountInvested = yearData.valueEndOfYear - totalinterest;
          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalinterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
