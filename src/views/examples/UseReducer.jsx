import React, { useReducer, useState } from "react";
import { act } from "react-dom/test-utils";
import PageTitle from "../../components/layout/PageTitle";
import { initialState, reducer } from '../../store/config'


const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [n, setN] = useState(1);

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <div className="center">
                <span className="text">{state.number}</span>
                <div>
                    <button
                        className="btn"
                        onClick={() => dispatch({ type: "number_multi7" })}
                    >
                        *7
                    </button>
                    <button
                        className="btn"
                        onClick={() => dispatch({ type: "number_divide25" })}
                    >
                        /25
                    </button>
                    {/* somar valor de N flexivel */}
                    <input
                        type="number"
                        className="input"
                        value={n}
                        onChange={(e) => setN(e.target.value)}
                    />
                    <button
                        className="btn"
                        onClick={() =>
                            dispatch({
                                type: "number_n",
                                number_n: parseInt(n),
                            })
                        }
                    >
                        Number N
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UseReducer;
