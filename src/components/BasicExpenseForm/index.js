import './basicExpenseForm.scss';
import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Input from '../../components/Input';
import Button from '../../components/Button';

const BasicExpenseForm = props => {
    const [expenseName, setExpenseName] = useState('');
    const [expenseAmount, setExpenseAmount] = useState('');
    const [error, setError] = useState('');
    const nameInput = useRef(null);

    const renderExpenses = () => {
        return props.expenses.map(expense => (
            <div className="form__expense" key={expense.name}>
                <Input
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
            return props.income - totalExpenses;
        }

        return props.income;
    };

    const onFormSubmit = e => {
        e.preventDefault();
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
        nameInput.current.focus();
    };

    return (
        <div id="expenseTracker" className="form">
            <h2 className="form__title">{props.expenseTracker.title}</h2>
            <form className="form__form" onSubmit={onFormSubmit}>
                <Input
                    label="monthly income"
                    placeholder="£"
                    value={props.income}
                    onChange={e => props.setIncome(e.target.value)}
                />
                <span className="form__line" />
                {renderExpenses()}
                <Input
                    inputRef={nameInput}
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
                {error && <p className="form__error">{error}</p>}
                <div className="form__cta">
                    <Button
                        type="button"
                        text="Reset"
                        prominence="primary-purple"
                        onClick={() => props.resetExpenses()}
                    />
                    <Button
                        type="submit"
                        text="Add Expense"
                        prominence="tertiary"
                    />
                </div>
            </form>
            <p className="form__leftover">
                money left over: <span>£{leftover()}</span>
            </p>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        income: state.basicExpense.income,
        expenses: state.basicExpense.expenses
    };
};

export default connect(
    mapStateToProps,
    actions
)(BasicExpenseForm);
