import { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
    {
        id: "e1",
        title: "Car Insurance",
        amount: 194.55,
        date: new Date(2021, 1, 28),
    },
    {
        id: "5t",
        title: "Birthday",
        amount: 194.55,
        date: new Date(2021, 4, 4),
    },
    {
        id: "24y",
        title: "Biju",
        amount: 33.4,
        date: new Date(2021, 2, 28),
    },
    {
        id: "5G",
        title: "Books",
        amount: 4456.2,
        date: new Date(2020, 5, 2),
    },
    {
        id: "7l",
        title: "Canada trip",
        amount: 8000,
        date: new Date(2022, 2, 5),
    },
];

const App = () => {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    const addExpenseHandler = (expense) => {
        setExpenses((prevExpenses) => {
            return [expense, ...prevExpenses];
        });
    };

    return (
        <div className="App">
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses expenses={expenses} />
        </div>
    );
};

export default App;
