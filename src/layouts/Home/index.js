import React from 'react';
import Hero from '../../components/Hero';
import ExpenseForm from '../../components/ExpenseForm';
import DescriptionCTA from '../../components/DescriptionCTA';
import { hero, expenseTracker, needMore } from '../../config/home';

const Home = () => {
    return (
        <>
            <Hero hero={hero} />
            <ExpenseForm expenseTracker={expenseTracker} />
            <DescriptionCTA descriptionCTA={needMore} />
        </>
    );
};

export default Home;
