import React from 'react';
import Hero from '../../components/Hero';
import BasicExpenseForm from '../../components/BasicExpenseForm';
import DescriptionCTA from '../../components/DescriptionCTA';
import { hero, expenseTracker, needMore } from '../../config/home';

const Home = () => {
    return (
        <>
            <Hero hero={hero} />
            <BasicExpenseForm expenseTracker={expenseTracker} />
            <DescriptionCTA descriptionCTA={needMore} />
        </>
    );
};

export default Home;
