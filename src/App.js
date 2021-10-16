import Expenses from "./components/Expenses/Expenses";
import "./components//Expenses/Expenses.css";

function App() {
  const expenses = [
    {
      id: "01",
      title: "Car Insurance",
      amount: 308.27,
      date: new Date(2021, 2, 28),
    },
    { 
      id: "02", 
      title: "Rent",
      amount: 400,
      date: new Date(2021, 2, 28) },
    {
      id: "03",
      title: "Phone Bill",
      amount: 102.33,
      date: new Date(2021, 2, 28),
    },
    {
      id: "03",
      title: "Dog",
      amount: 590.00,
      date: new Date(2021, 10, 22),
    },
  ];

  return (
    <div>

      <Expenses expenses = {expenses}></Expenses>
        
    </div>
  );
}

export default App;
