import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Button from '../../components/Button';

const occuranceOptions = [
    'daily',
    'weekly',
    'fortnightly',
    'monthly',
    'bimonthly',
    'quaterly',
    'biannually',
    'annually'
];

const ExpenseForm = props => {
    const [income, setIncome] = useState('');
    const [expenseName, setExpenseName] = useState('');
    const [expenseAmount, setExpenseAmount] = useState('');
    const [expenseOccurance, setExpenseOccurance] = useState('monthly');
    const [error, setError] = useState('');
    const nameInput = useRef(null);

    useEffect(() => {
        try {
            props.getTransactions(props.userId, props.token);
        } catch (e) {
            console.log(e);
        }
    }, []);

    const renderTransactions = transactions => {
        return transactions.map(transaction => (
            <div className="form__expense" key={transaction.name}>
                <Input
                    readOnly
                    value={`${transaction.name} - £${Math.abs(
                        transaction.amount
                    )}`}
                />
                <span
                    className="removeInput"
                    onClick={() =>
                        props.deleteTransaction(
                            props.userId,
                            transaction._id,
                            props.token
                        )
                    }
                >
                    <span className="removeInput__line1" />
                    <span className="removeInput__line2" />
                </span>
            </div>
        ));
    };

    const onFormSubmit = e => {
        e.preventDefault();
        if (!expenseName || !expenseAmount) {
            setError('You must add an expense name and amount');
            return;
        }

        props.addTransaction(
            props.userId,
            {
                name: expenseName,
                amount: -expenseAmount,
                occurance: expenseOccurance
            },
            props.token
        );
        setExpenseName('');
        setExpenseAmount('');
        setError('');
        nameInput.current.focus();
    };

    return (
        <div className="form">
            <form className="form__form" onSubmit={onFormSubmit}>
                {renderTransactions(props.income)}
                <Input
                    label="monthly income"
                    placeholder="£"
                    value={income}
                    onChange={e => setIncome(e.target.value)}
                />
                <span className="form__line" />
                {renderTransactions(props.expenses)}
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
                <Select
                    label="occurance"
                    value={expenseOccurance}
                    onChange={e => setExpenseOccurance(e.target.value)}
                    options={occuranceOptions.map(o => ({ value: o }))}
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
        </div>
    );
};

const mapStateToProps = state => {
    return {
        userId: state.auth.userId,
        token: state.auth.token,
        income: state.expense.income,
        expenses: state.expense.expenses
    };
};

export default connect(
    mapStateToProps,
    actions
)(ExpenseForm);
