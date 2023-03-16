export const initialState = {
    cart: [],
    products: [],
    user: null,
    number: 1,
};

export function reducer(currentState, action) {
    switch (action.type) {
        case "number_multi7":
            if (currentState.number == 0) {
                return { ...currentState, number: 1 };
            }
            return { ...currentState, number: currentState.number * 7 };
        case "number_divide25":
            return {
                ...currentState,
                number: parseInt(currentState.number / 25),
            };
        case "number_n":
            return {
                ...currentState,
                number: currentState.number + action.number_n,
            };
        default:
            return currentState;
    }
}
