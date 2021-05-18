import ExpenseItem from './components/ExpenseItem';

function App() {

    const expenses = [
        {id: '01', title: 'Car Insurance', amount: 308.27, date: new Date(2021, 2, 28)},
        {id: '02', title: 'Rent', amount: 400, date: new Date(2021, 2, 28)},
        {id: '03', title: 'Phone Bill', amount: 102.33, date: new Date(2021, 2, 28)},
    ];
  return (
    <div>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
    </div>
  );
}

export default App;
