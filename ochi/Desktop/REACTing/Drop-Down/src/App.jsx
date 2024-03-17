import Dropdown from "./Dropdown/Dropdown"
import DropdownBtn from "./DropdownBtn/DropdownBtn"
import DropdownContent from "./DropdownContent/DropdownContent"
import DropdownItems from "./DropdownItems/DropdownItems";


function App() {
  const items = [1,2,3,4,5,6,7,8];

  return (
    <>
      <h1 className="w-full h-screen flex items-center justify-center bg-slate-400">
        <Dropdown buttonText = "Dropdown Button" content = {<>
        {
          items.map(item => <DropdownItems key={item}>{`Item ${item}`}</DropdownItems>)
        }</>}/>
      </h1>
    </>
  )
}

export default App
