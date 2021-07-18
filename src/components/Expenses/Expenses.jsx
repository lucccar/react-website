import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
    const [selectedYear, setSelectedYear] = useState("2020");

    const filteredExpenses = props.expenses.filter((exp) => {
        return exp.date.getFullYear().toString() === selectedYear.toString();
    });

    const getSelectedYear = (enteredSelectedYear) => {
        setSelectedYear(enteredSelectedYear);
    };

    return (
        <li>
            <Card className="expenses">
                <ExpensesFilter
                    filteredYear={selectedYear}
                    onGetSelectedYear={getSelectedYear}
                />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList expenses={filteredExpenses} />
            </Card>
        </li>
    );
};

export default Expenses;
