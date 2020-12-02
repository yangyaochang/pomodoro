import React from 'react'
import './App.css';

function App() {
  const [remainTime, setRemainTime] = React.useState(20)
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
    </div>
  );
}

export default App;
