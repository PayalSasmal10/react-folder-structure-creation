import './App.css';
import data from "./data.json";
import { FolderItem } from "./components/FolderItem";

function App() {
 
  return (
    <div>
      <h1>Folder-Structure</h1>
      {data.map((item) => (
        <FolderItem key={item.name} {...item}/>
      ))}
    </div>
  );
}

export default App;
