import "./ExpenseDate.css";

function ExpenseDate(props) {
    const month = props.date.toLocaleString("pt-br", { month: "long" });
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString("pt-br", { day: "2-digit" });
    return (
        <div className="expense-date">
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__day">{day}</div>
        </div>
    );
}

export default ExpenseDate;
