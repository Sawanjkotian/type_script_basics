import "./App.css";
import { Greet } from "./components/greet";
import { Person } from "./components/person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Container } from "./components/Container";

function App() {
  const personName = {
    first: "Bob",
    last: "Alice",
  };

  const nameList = [
    {
      first: "bob ",
      last: "Alice",
    },
    {
      first: "Test",
      last: "test",
    },
    {
      first: "test",
      last: "test",
    },
  ];
  return (
    <div className="App">
      <Greet name="Sesappa" messageCount={15} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="error" />
      <Heading>Hi there I am a children prop</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicaprio</Heading>
      </Oscar>
      <Greet name="Optional Props" isLoggedIn={false} />
      <Button
        handleClick={(event, id) => {
          console.log("Button Click", event, id);
        }}
      />
      <Input value="type something here" handleChange={(event) => console.log(event)} />
      <Container styles={{border:'1px solid black', padding: '1rem', display:"flex" }}/>
    </div>
  );
}

export default App;
