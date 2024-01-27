import { calculateInvestmentResults, formatter } from "./util/investment";

export default function Results({ input }) {
  const resultesData = calculateInvestmentResults(input);
  const initialInvestment =
    resultesData[0].valueEndOfYear -
    resultesData[0].interest -
    resultesData[0].annualInvestment;
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (year)</th>
          <th>Total</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultesData.map((yeardata) => {
          const totalInterest =
            yeardata.valueEndOfYear -
            yeardata.annualInvestment * yeardata.year -
            initialInvestment;
            const totalAmountInvested = yeardata.valueEndOfYear - totalInterest;
          return (
            <tr key={yeardata.year}>
              <td>{yeardata.year}</td>
              <td>{formatter.format(yeardata.valueEndOfYear)}</td>
              <td>{formatter.format(yeardata.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
