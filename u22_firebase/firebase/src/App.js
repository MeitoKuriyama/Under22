import './App.css';
import db from './Firebase';
import { addDoc, collection , doc, setDoc} from "firebase/firestore";


async function firebaseTest(){
	const citiesRef = collection(db, "cities");

	await setDoc(doc(citiesRef, "SF"), {
		name: "San Francisco", state: "CA", country: "USA",
		capital: false, population: 860000,
		regions: ["west_coast", "norcal"] });

}

function App() {
	firebaseTest()
	return (
		<div className="App">
			<h1>うんこ</h1>
			{/* {firebaseTest} */}
		</div>
	);
}

export default App;