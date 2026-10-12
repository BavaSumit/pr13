
import {
  HashRouter,
  MemoryRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { StaticRouter } from "react-router";

function Pages() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>{" | "}
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h3>Home Page</h3>} />
        <Route path="/about" element={<h3>About Page</h3>} />
      </Routes>
    </div>
  );
}

function HashDemo() {
  return (
    <HashRouter>
      <h2>HashRouter Demo</h2>
      <Pages />
    </HashRouter>
  );
}

function MemoryDemo() {
  return (
    <MemoryRouter initialEntries={["/"]}>
      <h2>MemoryRouter Demo</h2>
      <Pages />
    </MemoryRouter>
  );
}

function StaticDemo() {
  return (
    <StaticRouter location="/about">
      <h2>StaticRouter Demo</h2>
      <p>Static route: About Page</p>
    </StaticRouter>
  );
}

export default function App() {
  return (
    <div>
      <h1>React Router Types</h1>
      <HashDemo />
      <hr />
      <MemoryDemo />
      <hr />
      <StaticDemo />
    </div>
  );
}
