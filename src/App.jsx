import { BrowserRouter as Router, Route, Routes } from "react-router";

const App = () => {
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/" element={"Home"} />
          <Route path="/about" element={"About"} />
          <Route path="/projects" element={"Projects"} />
          <Route path="/contact" element={"Contact"} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
