import {calculateInvestmentResults, formatter} from "../util/investment.js";


export default function Results({input}) {
    let res = calculateInvestmentResults(input)
    let investmentValue = res[0].valueEndOfYear - res[0].interest - res[0].annualInvestment
    return (
        <table id="result">
            <thead>
            <tr>
                <th>Year</th>
                <th>Investment value</th>
                <th>Interest(year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
            </thead>
            <tbody>
            {
                res.map(
                    yearData => {
                        const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - investmentValue;
                        const totalInvestment = yearData.valueEndOfYear - totalInterest;
                        return (
                            <tr key={yearData.year}>
                                <td>{yearData.year}</td>
                                <td>{formatter.format(yearData.valueEndOfYear)}</td>
                                <td>{formatter.format(yearData.interest)}</td>
                                <td>{formatter.format(totalInterest)}</td>
                                <td>{formatter.format(totalInvestment)}</td>
                            </tr>
                        )
                    }
                )
            }
            </tbody>
        </table>
    )
}
