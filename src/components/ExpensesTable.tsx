import { Transaction } from "../utils/types";
import "./styles.css";

// Render expenses page
export default function ExpensesTable({ expenses, isLoading }: { expenses: Transaction[], isLoading: boolean }) {
    const headers = [
        {key: "id", value: "ID"},
        {key: "date", value: "Date"},
        {key: "amount", value: "Amount"},
        {key: "merchant", value: "Merchant"},
        {key: "category", value: "Category"}];
    return (
        // TODO: Tweak some styling and font
        // TODO: handle pagination, search, etc
        <div className="expensesPage">
            <h1 style={{marginTop: "3rem"}}>Expenses</h1>
            {
                // Table loading
                isLoading? <span>Loading...</span> :
                // Table loaded
                <table className="expensesTable">
                    <thead className="expensesHeader">
                        <tr>
                            {headers.map((header) => (
                                <th key={header.key} className="expensesHeaderCell">{header.value}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody> 
                    {
                        // Table loaded but no data
                        expenses.length === 0? <span> No data </span> : 
                        // Data found
                        expenses.map((expense) => {
                            const expenseDate = new Date(expense.date);
                            return (
                            <tr key={expense.id}>
                                <td className="expensesCell">{expense.id}</td>
                                <td className="expensesCell">{expenseDate.toLocaleTimeString([], {hour: "2-digit", minute: "2-digit"})} - {expenseDate.toLocaleDateString()}</td>
                                <td className="expensesCell">£{expense.amount}</td>
                                <td className="expensesCell">{expense.merchant}</td>
                                <td className="expensesCell">{expense.category}</td>
                            </tr>
                        )})
                    }
                    </tbody>
                </table>
            }
        </div>
    );
}