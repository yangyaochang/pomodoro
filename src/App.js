import React from 'react'
import Todo from './components/todo/Todo'
import './App.scss';


const todos = ['The first thing to do', 'The second thing to do', 'The third thing to do', 'The forth thing to do']


function App() {
  const [remainTime, setRemainTime] = React.useState(1500)
  const [countDown, setCountDown] = React.useState(false)

  React.useEffect(() => {
    if (countDown) {
      if (remainTime === 0) {return}

      const timer = setTimeout(() => {
        setRemainTime((currentTime) => currentTime - 1)
      }, 1000)

      return () => {
        clearTimeout(timer)
      }
    }
  }, [countDown, remainTime])

  return (
    <div className="App">
      <button onClick={ () => {setCountDown(true)} }>Play</button>
      <div>
        <div>{ new Date(remainTime * 1000).toISOString().substr(14, 5) }</div>
      </div>
      { todos.map((todo, index) => 
        <Todo todo={ todo } key={ index }/>
      )}
    </div>
  );
}

export default App;
