import { useState } from "react";

function Counter({ initialValue }) {
    const [count, setCount] = useState(initialValue);

    function handleIncrement() {
        //let currentValue = count;
        //currentValue += 1;
        setCount((currentValue) => currentValue + 1);
        //currentValue += 1;
        setCount((currentValue) => currentValue + 1);
    }

    return (
        <div className="card">
            <div className="card-content">
                <div className="content">
                    <button className="button" onClick={handleIncrement}>
                        Contador: {count}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Counter;
