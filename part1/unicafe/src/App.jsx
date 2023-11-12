import React, { useState } from 'react';

const Button = ({ text, handleClick }) => (
    <button onClick={handleClick}>{text}</button>
);

const StatisticLine = ({ text, value }) => (
    <p>
        {text} {value}
    </p>
);

const Statistics = ({ good, neutral, bad }) => {
    const all = good + neutral + bad;
    const average = (good - bad) / all || 0;
    const positive = (good / all) * 100 || 0;

    if (all === 0) {
        return (
            <div>
                <h1>statistics</h1>
                <p>no feedback</p>
            </div>
        );
    }

    return (
        <div>
            <h1>statistics</h1>
            <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={neutral} />
            <StatisticLine text="bad" value={bad} />
            <StatisticLine text="all" value={all} />
            <StatisticLine text="average" value={average} />
            <StatisticLine text="positive" value={`${positive} %`} />
        </div>
    );
};

const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    return (
        <table>
            <thead>
            <tr>
                <th><h1>give feedback</h1></th>
            </tr>
            </thead>

            <tbody>
            <tr>
                <td><Button text="good" handleClick={() => setGood(good + 1)} /></td>
                <td><Button text="neutral" handleClick={() => setNeutral(neutral + 1)} /></td>
                <td><Button text="bad" handleClick={() => setBad(bad + 1)} /></td>
            </tr>
            <tr>
                <td><Statistics good={good} neutral={neutral} bad={bad} /></td>
            </tr>
            </tbody>
        </table>
    );
};

export default App;
