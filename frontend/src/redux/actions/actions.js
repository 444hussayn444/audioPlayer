import {
  fetch_failure,
  fetch_success,
  start_fetch,
} from "../slices/SongsSlice";

export async function getAllSongs(dispatch) {
  dispatch(start_fetch());
  try {
    const response = await fetch("http://127.0.0.1:5000/videos"); 
    if(!response.ok){
      dispatch(fetch_failure(response))
    }
    const all_data = await response.json()
     console.log(all_data)
    dispatch(fetch_success(all_data))
  } catch (error) {
    console.log(error)
    dispatch(fetch_failure(error))
  }
}


