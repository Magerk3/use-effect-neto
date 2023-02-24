
export const List = ({ data, handleClick,setInfo}) => {

    return (
        <div>
            <ul>
                {data.map((person) => {
                    return (
                        <li key={person.id}>
                            <button onClick={() => handleClick(person.id)}>
                                {person.name}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
