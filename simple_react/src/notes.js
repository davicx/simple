
//WEB DEV TUTORIAL
/*
function App() {
  const [name, setName] = useLocalStorage('name','')

  return (
    <div className="App">
     <p> hi </p>
      <input type = "text" value = {name} onChange = {e => setName(e.target.value)} />
      <p> {name}</p>
    </div>
  );
}

export default App;

function getSavedValue(key, initialValue) {
    const savedValue = JSON.parse(localStorage.getItem(key));
    if(savedValue) {
        return savedValue
    }

    return initialValue

}



export default function useLocalStorage(initialValue) {
    const [value, setValue] = useState(initialValue)


    return [value, setValue]
}

*/
/*
function App() {
  const [name, setName] = useState()

  return (
    <div className="App">
     <p> hi </p>
      <input type = "text" value = {name} onChange = {e => setName(e.target.value)} />
      <p> {name}</p>
    </div>
  );
}

export default App;

*/