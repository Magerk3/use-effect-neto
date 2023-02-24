export const Details = ({ info, isLoading, handleImageLoading, isImageLoading }) => {
    return (
        <div className="card">
            {info ? (
                isLoading ? <p>Loading...</p>  : (
                    <>
                        <h1>{info.name}</h1>
                        <img src={info.avatar} alt="avatar" onLoad={handleImageLoading}></img>
                        {isImageLoading ? <p>Loading avatar...</p> : <p></p>}
                        <h2>City: {info.details.city}</h2>
                        <h2>Company: {info.details.company}</h2>
                        <h2>Position: {info.details.position}</h2>
                    </>
                )
            ) : (
                <p></p>
            )}
        </div>
    );
};
