import React from 'react';

export default function Question(props) {
    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
        // While there remain elements to shuffle.
        while (currentIndex != 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
        }
        return array;
    }

    let validateAnswer = (event) => {
        if (event.target.textContent !== props.correct_answer){
            event.target.classList.add('wrong')
        } else {
            event.target.classList.add('correct')
        }
    }

    let toggle = (event) => {
        if (event.target.className.includes('clicked')){
            event.target.classList.remove('clicked');  
        }else{
            event.target.classList.add('clicked');
        };
        validateAnswer(event);
    }

    let answers = shuffle(props.answers);
    let answersElements = answers.map(answer => <button onClick={toggle} className='answer'>{answer}</button>);
    return(
        <div>
            <h3 className='question'>{props.question}</h3>
            {answersElements}
            <br /><hr />
        </div>
    );
}