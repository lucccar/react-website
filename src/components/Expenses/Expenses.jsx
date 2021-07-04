import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";

const createExpenses = (element) => {
    return (
        <ExpenseItem
            title={element.title}
            amount={element.amount}
            date={element.date}
        />
    );
};

const Expenses = (props) => {
    return (
        <Card className="expenses">
            {props.expenses.map(function (element) {
                return createExpenses(element);
            })}
        </Card>
    );
};

export default Expenses;
