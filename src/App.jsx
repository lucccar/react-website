import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
    const expenses = [
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
    return (
        <div className="App">
            <NewExpense />
            <p>Also visible!</p>
            <Expenses expenses={expenses} />
        </div>
    );
};

export default App;
