import { useEffect, useState } from "react";
import ExpensesTable from "./components/ExpensesTable";

function App() {
  
  // Init app state
  const [expenses, setExpenses] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  // Fetch 1st page from transactions API
  useEffect(() => {
    fetch("https://tip-transactions.vercel.app/api/transactions?page=1")
    .then((res)=> {return res.json()})
    .then((data)=>{
      // TODO: Validate data
      setExpenses(data.transactions);
      setIsloading(false);
    }).catch((err) => {
      // TODO: Handle errors properly
      alert(err);
      setIsloading(false);
    });
  }, []);

  return (
    // TODO: Move styling to .css file
    <div style={{justifyItems: "center"}}>
      <ExpensesTable expenses={expenses} isLoading={isLoading} />
    </div>
  );
}

export default App;
