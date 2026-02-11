import VerticalTree from "./components/VerticalTree";
import data from "./TreeData";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <VerticalTree data={data} />
    </div>
  );
}
