import { useState } from "react";
import {AddTable} from "./AddTable"

function App() {
  const persons = [
    {
      name: "Bob",
      gender: "male",
      age: "50"
    },
    {
      name: "Alice",
      gender: "male",
      age: "20"
    },
    {
      name: "Kitiyaporn Takham 620610774",
      gender: "male",
      age: "20"
    }
  ];
  const [id, setId] = useState(620610774);

  const adder = () => {
    setId(id + 1);
  };

  const minus = () => {
    setId(id - 1);
  };
  const reset = () => {
    setId(620610774);
  };


  return (
    <div class="ml-2">
      <h3 class="title is-3">Person List</h3>

      {/* Convert me to a component! */}
      <table class="table is-bordered mb-3">
        {persons.map((data) => (
          <>
            <thead>
              <th>Name</th>
              <th>Gender</th>
              <th>Age</th>
            </thead>
            <tbody>
              <tr>
                <td>{data.name}</td>
                <td>{data.gender}</td>
                <td>{data.age}</td>
              </tr>
            </tbody>
            <br />
          </>
        ))}
        {/* <AddTable ({persons} )/> */}
      </table>

      {/* Code me please! */}
      <h3 class="title is-3">ID Counter</h3>
      <p>{id}</p>
      <button onClick={minus}>-</button>
      <button onClick={reset}>reset</button>
      <button onClick={adder}>+</button>
    </div>
  );
}

export default App;
