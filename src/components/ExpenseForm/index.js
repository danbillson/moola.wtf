import './expenseForm.scss';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Input from '../../components/Input';
import Button from '../../components/Button';

const ExpenseForm = props => {
    const [expenseName, setExpenseName] = useState('');
    const [expenseAmount, setExpenseAmount] = useState('');
    const [error, setError] = useState('');

    const renderExpenses = () => {
        return props.expenses.map(expense => (
            <div className="expenseForm__expense">
                <Input
                    key={expense.name}
                    readOnly
                    value={`${expense.name} - £${expense.amount}`}
                />
                <span
                    className="removeInput"
                    onClick={() => props.removeExpense(expense)}
                >
                    <span className="removeInput__line1" />
                    <span className="removeInput__line2" />
                </span>
            </div>
        ));
    };

    const leftover = () => {
        if (props.expenses) {
            const totalExpenses = props.expenses
                .map(expense => expense.amount)
                .reduce((acc, cur) => acc + Number(cur), 0);
            console.log(totalExpenses);
            return props.income - totalExpenses;
        }

        return props.income;
    };

    const onSubmit = () => {
        if (!expenseName || !expenseAmount) {
            setError('You must add an expense name and amount');
            return;
        }

        props.addExpense({
            name: expenseName,
            amount: expenseAmount
        });
        setExpenseName('');
        setExpenseAmount('');
        setError('');
    };

    return (
        <div id="expense" className="expenseForm">
            <h2 className="expenseForm__title">{props.expenseTracker.title}</h2>
            <form className="expenseForm__form">
                <Input
                    label="monthly income"
                    placeholder="£"
                    value={props.income}
                    onChange={e => props.setIncome(e.target.value)}
                />
                <span className="expenseForm__line" />
                {renderExpenses()}
                <Input
                    label="expense"
                    placeholder="Rent"
                    value={expenseName}
                    onChange={e => setExpenseName(e.target.value)}
                />
                <Input
                    label="amount"
                    placeholder="£"
                    value={expenseAmount}
                    onChange={e => setExpenseAmount(e.target.value)}
                />
                {error && <p className="expenseForm__error">{error}</p>}
                <Button
                    type="button"
                    text="Add Expense"
                    style="tertiary"
                    onClick={() => onSubmit()}
                />
            </form>
            <p className="expenseForm__leftover">
                money left over: <span>£{leftover()}</span>
            </p>
        </div>
    );
};

const mapStateToProps = state => {
    return { income: state.expense.income, expenses: state.expense.expenses };
};

export default connect(
    mapStateToProps,
    actions
)(ExpenseForm);
