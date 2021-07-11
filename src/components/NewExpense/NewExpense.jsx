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

    const setExpenseFlagTrue = () => {
        setExpenseFlag(true);
    };

    const setExpenseFlagFalse = () => {
        setExpenseFlag(false);
    };

    if (expenseFlag) {
        return (
            <div className="new-expense">
                <ExpenseForm
                    onSaveNewExpenseData={saveNewExpenseData}
                    onCancel={setExpenseFlagFalse}
                />
            </div>
        );
    }

    return (
        <div className="new-expense">
            {expenseFlag && (
                <button
                    className="add-new-expense"
                    onClick={setExpenseFlagTrue}
                >
                    Add New Expense
                </button>
            )}
            {!expenseFlag && (
                <ExpenseForm
                    onSaveNewExpenseData={saveNewExpenseData}
                    onCancel={setExpenseFlagFalse}
                />
            )}
        </div>
    );
};

export default NewExpense;
