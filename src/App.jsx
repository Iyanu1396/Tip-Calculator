import { useState } from "react";
import Form from "./Form";
import Total from "./Total";
import Reset from "./Reset";

function App() {
  const [billInput, setBillInput] = useState("");
  const [serviceInput, setServiceInput] = useState(0);
  const [friendInput, setFriendInput] = useState(0);

  return (
    <div className="app">
      <Form
        billInput={billInput}
        setBillInput={setBillInput}
        serviceInput={serviceInput}
        setServiceInput={setServiceInput}
        friendInput={friendInput}
        setFriendInput={setFriendInput}
      />
      <Total
        billInput={billInput}
        serviceInput={serviceInput}
        friendInput={friendInput}
      />
      <Reset
        setBillInput={setBillInput}
        setServiceInput={setServiceInput}
        setFriendInput={setFriendInput}
      />
    </div>
  );
}

export default App;
