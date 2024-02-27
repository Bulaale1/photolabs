import { useEffect } from "react";
const useApplication = ()=>{
  const initialState = {
    //…rest of the state
    photoData: [],
    topicData: []
  }
  const ACTIONS = {
    SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case ACTIONS.SET_PHOTO_DATA:
        return { ...state, photoData: action.payload };
      }
    }
  
    useEffect(() => {
      fetch("/api/photos")
        .then((response) => response.json())
        .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }))
    }, []);

}

 export default useApplication;