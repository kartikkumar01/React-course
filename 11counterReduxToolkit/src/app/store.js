import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "../features/counter/counterSlice";

const store = configureStore({
    reducer : {
        counter : counterReducer
    }
})
export default store
/*
To interact with store I have two methods
1) useDispatch -> It takes action inside it and trigger the corresponding reducer in the slice
2) useSelector -> It takes a callback which recieves a state from store
*/