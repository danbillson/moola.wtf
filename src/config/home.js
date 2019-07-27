import React from 'react';
import { ReactComponent as Wallet } from '../assets/images/wallet.svg';

export const header = {
    logoText: 'MOOLA.',
    loggedOutLinks: [
        {
            text: 'Sign Up',
            link: '/signup'
        },
        {
            text: 'Sign In',
            link: '/signin'
        }
    ],
    loggedInLinks: [
        {
            text: 'Profile',
            link: '/profile'
        },
        {
            text: 'Sign Out',
            link: '/'
        }
    ]
};

export const hero = {
    title: 'TRACK YOUR EXPENSES WITH EASE.',
    tagline:
        'Use our simple tracking tools to work out what you’re spending or create an account to add multiple income sources, payment intervals and save your expenses.',
    cta: [
        {
            text: 'Sign Up',
            link: '/signup',
            style: 'primary'
        },
        {
            text: 'Try Now',
            link: '#expenseTracker',
            style: 'secondary'
        }
    ],
    image: <Wallet className="hero__image" />
};

export const expenseTracker = {
    title: 'EXPENSE TRACKER'
};

export const needMore = {
    title: 'NEED A BIT MORE?',
    description:
        'If you feel like you need a bit more control, you have multiple income sources to track, some expenses occur every three months or you have a large one off payment that you’d like to account for then create an account to gain access to the detailed expense tracker to solve all of the above and more.',
    cta: {
        text: 'Sign Up',
        link: '/signup',
        style: 'primary'
    }
};

export const footer = {
    title: 'MOOLA.',
    description: 'created by dan billson'
};
