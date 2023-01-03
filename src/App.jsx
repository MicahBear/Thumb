import "./App.css";
import { Dashboard, First } from "./pages/First";

function App() {
  return (
    <Routes>
      <Route path="/" element={<First />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
