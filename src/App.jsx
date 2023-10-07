import { useState } from "react";
import data from "./data";
import List from "./components/List";

const App = () => {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section>
        <h3>
          {people.length} Birthday Reminder
          {people.length > 1 ? "s" : ""}
        </h3>
        
        <List people={people} />

        <button onClick={()=>setPeople([])}> Clear list </button>
      </section>
    </main>
  );
};
export default App;
