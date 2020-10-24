import Cart from './components/Cart';
import './App.css';

const items = [
    { id: 1, name: 'Cheese', price: 11.99, qty: 2 },
    { id: 2, name: 'Toilet paper', price: 2.99, qty: 3 },
    { id: 3, name: 'Bread', price: 4.85, qty: 2 }
]

function App() {
	return (
		<div className="App">
			<Cart initialItems={items} />
		</div>
	);
}

export default App;
