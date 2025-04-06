import {configureStore} from "@reduxjs/toolkit"
import SongReducer from "../slices/SongsSlice"



const store = configureStore({
    reducer:{
        songs : SongReducer
    }
})

export default store