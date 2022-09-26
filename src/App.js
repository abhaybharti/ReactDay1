import ConditionalRendering from "./ConditionalRendering";
import Counter from "./Counter";
import DemoForm from "./DemoForm";
import Greet from "./Greet";
import GreetClass from "./GreetClass";
import ListRendering from "./ListRendering";
import ParentComponent from "./ParentComponent";

function App() {
  return (
    <div className="App">
      {/* <Greet name="Abhay" age="39" sex="M">Jai Ho</Greet>
      <GreetClass name="Shanvi">Java</GreetClass>
      <GreetClass name="Shanvi">
        <button>Click For Java</button>
      </GreetClass> */}
      {/* <Counter />
      <ParentComponent />
      <ConditionalRendering />
      <ListRendering /> */}
      <DemoForm />
    </div>
  );
}

export default App;
