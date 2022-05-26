import {useDeferredValue, useMemo} from "react";

/*
 * 1. Open React dev tools. I'm using version 4.24.0-82762bea5 as it's the latest on the firefox addon store.
 * 2. Click on the "App" component.
 * 3. See how the first memo has the value "3.14" when it should be "1.41".
 */

function App() {
    useDeferredValue("");

    useMemo(() => {
        return 1.41;
    }, []);

    useMemo(() => {
        return 3.14;
    }, []);

    return (
        <div>
            <p>Hello, world!</p>
        </div>
    );
}

export default App;
