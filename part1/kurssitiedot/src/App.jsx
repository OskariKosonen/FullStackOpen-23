const Header = (props) => {
    return (
        <div>
            <h1>{props.course}</h1>
        </div>
    );
};


function Content({parts}) {
    return (
        <div>
            <p>{parts[0].name} {parts[0].exercises}</p>
            <p>{parts[1].name} {parts[1].exercises}</p>
            <p>{parts[2].name} {parts[2].exercises}</p>

        </div>
    );
}

function Total({ parts }) {
    const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0);

    return (
        <div>
            <p>Total exercises: {totalExercises}</p>
        </div>
    );
}


const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }


    return (
        <div>
            <Header course={course.name}/>
            <Content parts={course.parts}/>
            <Total parts={course.parts}/>
        </div>

    )
}

export default App