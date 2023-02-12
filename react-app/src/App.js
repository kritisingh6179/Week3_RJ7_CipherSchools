import React, { createContext, lazy, Suspense, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import counterReducer from "./reducers/CounterReducers";
import CheckCounter from "./components/CheckCounter";
const ErrorBoundary = lazy(() => import("./components/ErrorBoundary"));
const CounterComponent = lazy(() => import("./components/CounterComponent"));
const ReduxCounter = lazy(() => import("./components/ReduxCounter"));

export const AnupamaContext = createContext({ favCharacter: "Anupama" });
export const BreakingBadContext = createContext({
    favCharacter: "Walter White",
});

const myReduxStore = createStore(counterReducer);

const App = () => {
    const anupamaContent = useContext(AnupamaContext);

    return (
        <div>
            <BrowserRouter>
                <Suspense fallback={<div>{anupamaContent.favCharacter}</div>}>
                    <Routes>
                        <Route path={"/"} element={<h1>This is on Home Page</h1>} />

                        <Route
                            path={"/counter"}
                            element={
                                <ErrorBoundary>
                                    <CounterComponent />
                                </ErrorBoundary>
                            }
                        />

                        <Route path={"/redux-counter"} element={<ReduxCounter />} />
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </div>
    );
};

const MyApp = () => (
    <Provider store={myReduxStore}>
        <AnupamaContext.Provider
            value={{
                favCharacter: "Anupama",
                favVillain: "Vanraj",
                loudest: "Kavya",
            }}
        >
            <BreakingBadContext.Provider
                value={{ favCharacter: "Walter White", mostHatedCharacter: "Jessie" }}
            >
                <App />
            </BreakingBadContext.Provider>
        </AnupamaContext.Provider>
    </Provider>
);

export default MyApp;
