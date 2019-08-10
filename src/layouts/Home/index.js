import React from 'react';
import { connect } from 'react-redux';
import Hero from '../../components/Hero';
import BasicExpenseForm from '../../components/BasicExpenseForm';
import ExpenseForm from '../../components/ExpenseForm';
import DescriptionCTA from '../../components/DescriptionCTA';
import { hero, expenseTracker, needMore, formUse } from '../../config/home';

const Home = props => {
    return props.isLoggedIn ? (
        <>
            <DescriptionCTA
                descriptionCTA={{
                    title: `Hey, ${props.name}`,
                    description: formUse
                }}
            />
            <ExpenseForm />
        </>
    ) : (
        <>
            <Hero hero={hero} />
            <BasicExpenseForm expenseTracker={expenseTracker} />
            <DescriptionCTA descriptionCTA={needMore} />
        </>
    );
};

const mapStateToProps = state => {
    return { isLoggedIn: state.auth.token, name: state.auth.name };
};

export default connect(mapStateToProps)(Home);
