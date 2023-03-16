import React, { useContext, useEffect } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

import DataContext from "../../data/DataContext";
import { AppContext } from "../../data/Store";

const UseContext = (props) => {
    const context = useContext(DataContext);
    // const {state, setState} = useContext(DataContext);

    function addNumber(delta) {
        context.setState({
            ...context.state,   // mantem todos os atributos e somente troca o passado.
            number: context.state.number + delta
        })
    }

    // EX: 02
    const {number, text, setNumber, setText} = useContext(AppContext);

    useEffect(function (){
        if(number > 1240){
            setText('Eita!!!!!!')
        }
    }, [number])

    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />

            <SectionTitle title="#EX-01" />
            <div className="center">
                <span className="text">{context.state.text}</span>
                <span className="text">{context.state.number}</span>

                <div>
                    <button className="btn"
                        onClick={() => addNumber(-1)}>-1</button>
                    <button className="btn"
                        onClick={() => addNumber(1)}>+1</button>
                </div>
            </div>

            <SectionTitle title="#EX-02" />
            <div className="center">
                <span className="text">{text}</span>
                <span className="text">{number}</span>
                <div>
                    <button className="btn"
                        onClick={() => setNumber(number - 1)}>-1</button>
                    <button className="btn"
                        onClick={() => setNumber(number + 1)}>+1</button>
                </div>
            </div>
        </div>
    );
};

export default UseContext;
