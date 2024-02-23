import  {useEffect, useReducer} from 'react';
import axios from "axios";
import RenderData from "./RenderData.tsx";

const initialState = {
    loading: true, error: '', movie: {}

}

const moviesReducer = (state: any, action: { type: any; payload: any; }) => {
    switch (action.type) {
        case 'FETCH_MOVIES':
            return {
                loading: false, error: '', movie: action.payload
            }
        case 'FETCH_MOVIES_ERROR':
            return {
                loading: false, error: '', movie: {}
            }
        default:
            return state
    }
}

function FetchDataMovies() {
    const [state, dispatch] = useReducer(moviesReducer, initialState)
    useEffect(() => {
        // axios.get('https://api.themoviedb.org/3/discover/movie',{headers:{     accept: 'application/json', Authorization: `${import.meta.env.AUTH}`
        axios.get('https://api.themoviedb.org/3/discover/movie',{headers:{     accept: 'application/json', Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZjViOTI4ZjUyNWJmZjI4Njc0ZTk0YjczN2M1NzEwNSIsInN1YiI6IjY1YmU1N2Q3OTMxZWExMDE3YzliMzUxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Uhql_prk2fzik3bMKZ_dZ3GCmUd_FPQRabUtG-Jke68'
        // axios.get('https://api.themoviedb.org/3/account/787699',{headers:{     accept: 'application/json', Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZjViOTI4ZjUyNWJmZjI4Njc0ZTk0YjczN2M1NzEwNSIsInN1YiI6IjY1YmU1N2Q3OTMxZWExMDE3YzliMzUxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Uhql_prk2fzik3bMKZ_dZ3GCmUd_FPQRabUtG-Jke68'
            }})
            .then(response => {
                dispatch({
                    type: 'FETCH_MOVIES', payload: response.data.results
                })
            }).catch(err => {
            dispatch({
                type: 'FETCH_MOVIES_ERROR', payload: err
            })
        })
    },[])
    console.log(state.movie)
    return (
        <div>
            {state.loading? <p>Loading...</p>:<RenderData data={state.movie}/>}
            {

            }
        </div>
    );
}

export default FetchDataMovies;