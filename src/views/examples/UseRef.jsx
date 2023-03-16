import React, { useEffect, useRef, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

// const merge = function (s1, s2) {
//     const size_total = Math.floor(s1.length + s2.length/2);
//     let text = "";
//     for (let i = 0; i < size_total; i++) {
//         text += (s1[i] || "") + (s2[i] || "");
//     }
//     return text;
// };

// const merge = function (s1, s2) {
//     return [...s1]
//         .map(function (e, i) {
//             return `${e}${s2[i] || ""}`;
//         })
//         .join("");
// };

const merge = function (s1, s2) {
    return [...s1].map((e, i) => `${e}${s2[i] || ""}`).join("");
};

const UseRef = (props) => {
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");

    const myInput1 = useRef(null);
    const myInput2 = useRef(null);

    const count = useRef(0);

    useEffect(
        function () {
            count.current++;
            myInput2.current.focus();
        },
        [value1]
    );

    useEffect(
        function () {
            count.current++;
            myInput1.current.focus();
        },
        [value2]
    );

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />

            <SectionTitle title="Exercicio #01" />
            <div className="center">
                <div>
                    <span className="text">Valor: </span>
                    <span className="text">{merge(value1, value2)} [</span>
                    <span className="text red">{count.current}</span>
                    <span className="text">]</span>
                </div>
                <input
                    type="text"
                    className="input"
                    ref={myInput1}
                    value={value1}
                    onChange={(e) => setValue1(e.target.value)}
                />
            </div>

            <SectionTitle title="Exercicio #02" />
            <div className="center">
                <input
                    type="text"
                    className="input"
                    ref={myInput2}
                    value={value2}
                    onChange={(e) => setValue2(e.target.value)}
                />
            </div>
        </div>
    );
};

export default UseRef;
