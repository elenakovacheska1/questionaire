import React from 'react';

export default function StartQuestionaire (props) {
    let handleClick = () => {
        props.setPage(2);
    }

    return(
        <div>
            <button onClick={handleClick} className='start-button'>Start Questionaire</button>
        </div>
    );
}