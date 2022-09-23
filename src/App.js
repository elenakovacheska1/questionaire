import React from 'react';
import './App.css';
import StartQuestionaire from './components/StartQuestionaire';
import Question from './components/Question';

function App() {
  let [page, setPage] = React.useState(1);
  const [data, setData] = React.useState([]);

  React.useEffect(() =>{
    fetch('https://opentdb.com/api.php?amount=3')
    .then((response) => response.json())
    .then((dataQuestionaire) => setData(dataQuestionaire.results));
  }, []);

  let qaElements = data.map(item => {
    let answersArr = [...item.incorrect_answers]
    answersArr.push(item.correct_answer)
    return(
        <Question question={item.question} answers={answersArr} correct_answer={item.correct_answer}/>
    );
  })

  return (
    <div className="App">
      <div className='container'>
        {page === 1 && <StartQuestionaire page={page} setPage={setPage} />}
        <div className='qa-container'>
          {page === 2 && qaElements}
        </div>
      </div>
    </div>
  );
}

export default App;
