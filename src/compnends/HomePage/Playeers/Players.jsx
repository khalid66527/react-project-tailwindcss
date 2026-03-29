import React, { use } from 'react';

const Players = ({playersPromise}) => {
    console.log(playersPromise);
    const data = use(playersPromise)
    console.log(data);
    return (
        <div>
            <h1>Players : {data.length}</h1>
        </div>
    );
};

export default Players;
