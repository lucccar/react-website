import "./App.css";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
    const expenses = [
        {
            id: "e1",
            title: "Car Insurance",
            amount: 194.55,
            date: new Date(2021, 2, 28),
        },
        {
            id: "5t",
            title: "Birthday",
            amount: 194.55,
            date: new Date(2021, 5, 4),
        },
        {
            id: "24y",
            title: "Biju",
            amount: 33.4,
            date: new Date(2021, 3, 28),
        },
        {
            id: "5G",
            title: "Books",
            amount: 4456.2,
            date: new Date(2020, 6, 2),
        },
    ];
    return (
        <div className="App">
            <h2>Let's get started!</h2>
            <p>Also visible!</p>
            <Expenses expenses={expenses} />
        </div>
    );
};

export default App;
