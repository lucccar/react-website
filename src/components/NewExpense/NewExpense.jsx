import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
    const [expenseFlag, setExpenseFlag] = useState(false);

    const saveNewExpenseData = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        props.onAddExpense(expenseData);
    };

    const expenseFlagHandler = () => {
        setExpenseFlag(true);
    };

    if (expenseFlag) {
        return (
            <div className="new-expense">
                <ExpenseForm
                    onSaveNewExpenseData={saveNewExpenseData}
                    onAddExpenseFlag={setExpenseFlag}
                />
            </div>
        );
    }

    return (
        <div className="new-expense">
            <button className="add-new-expense" onClick={expenseFlagHandler}>
                Add New Expense
            </button>
        </div>
    );
};

export default NewExpense;
