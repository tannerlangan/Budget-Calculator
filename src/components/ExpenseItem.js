import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {

    return (
        <div className="expense-item">
            <ExpenseDate date = {props.date} />
            <section className="expense-item__description">
                <h2>{props.title}</h2>
                <h2 className="expense-item__price">${props.amount}</h2>
            </section>
        </div>
    );
}

export default ExpenseItem;
