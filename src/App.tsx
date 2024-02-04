import FetchDataMovies from "./Components/FetchDataMovies.tsx";
import NavBar from "./Components/NavBar.tsx";
import Footer from "./Components/Footer.tsx";
import Cover from "./Components/Cover.tsx";

function App() {

    return (<>
            <div>

                <NavBar/>
                <Cover/>
                <FetchDataMovies/>
                <Footer/>
            </div>
    </>)
}

export default App
