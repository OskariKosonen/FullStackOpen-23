const Header = (props) => {
    return (
        <div>
            <h1>{props.course}</h1>
        </div>
    );
};

function Part(props) {
    return (
        <p>
            {props.name} {props.exercises}
        </p>
    );
}

function Content(props) {
    const { parts } = props;

    return (
        <div>
            {parts.map((part, index) => (
                <Part key={index} name={part.name} exercises={part.exercises} />
            ))}
        </div>
    );
}


function Total(props) {
    const { parts } = props;
    const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0);

    return (
        <div>
            <p>Total number of exercises {totalExercises}</p>
        </div>
    );
}


const App = () => {
    const course = 'Half Stack application development';
    const parts = [
        { name: 'Fundamentals of React', exercises: 10 },
        { name: 'Using props to pass data', exercises: 7 },
        { name: 'State of a component', exercises: 14 },
    ];

    return (
        <div>
            <Header course={course}/>
            <Content parts={parts}/>
            <Total parts={parts}/>

        </div>

    )
}

export default App