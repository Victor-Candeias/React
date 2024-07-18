import { useState, useEffect } from "react";

import Header from "./header";

/*
const App = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            // setCounter(counter + 1);
            console.log({ counter });
        }, 1000)

        return () => {
            // cleanup side effect
            clearInterval(intervalId);
        }
    }, [counter])

    /*
    useEffect(() => {
        console.log("onClick - useEffect");
    }, [counter]);
    */
/*
    return(
        <div className="container">
            <Header message="Naming Contests"/>
            <button onClick={() => {
                setCounter(counter + 1);
            }}>{counter}</button>
        </div>
    );
}
*/

const App = () => {
    return(
        <div className="container">
            <Header message="Naming Contests"/>
        </div>
    );
}

export default App;