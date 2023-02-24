import { Details } from "./components/Details";
import { List } from "./components/List";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
    const [data, setData] = useState([]);
    const [info, setInfo] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [isImageLoading, setIsImageLoading] = useState();
    const [idToFetch, setIdToFetch] = useState(0);
    const fetchData = async () => {
        const response = await fetch(
            "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json"
        );
        const json = await response.json();
        setData(json);
    };
    const handleClick = (id) => {
        
        setIdToFetch(id);
    };
    const handleImageLoading = () => {
        setIsImageLoading(false);
    };
    const fetchInfo = async (id) => {
        const response = await fetch(
            `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${id}.json`
        );
        const json = await response.json();
        console.log(json);
        setInfo(json);
        setIsLoading(false);
    };

    useEffect(() => {
        setIsLoading(true);
        fetchData();
        setIsImageLoading(true);
        fetchInfo(idToFetch);
        
    }, [idToFetch]);

    return (
        <div className="App">
            <List data={data} handleClick={handleClick} />
            <Details
                info={info}
                isLoading={isLoading}
                handleImageLoading={handleImageLoading}
                isImageLoading={isImageLoading}
            />
        </div>
    );
}

export default App;
