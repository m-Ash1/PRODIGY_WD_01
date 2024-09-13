import { Nav } from "./components/Nav";
import { Section } from "./components/Section";

const sections = [
  { name: "About", id: "about" },
  { name: "Contact", id: "contact" },
  { name: "Email", id: "email" },
];
function App() {
  return (
    <>
      <Nav sections={sections} />

      {sections.map((section) => (
        <Section id={section.id} key={section.id} name={section.name} />
      ))}
    </>
  );
}

export default App;
