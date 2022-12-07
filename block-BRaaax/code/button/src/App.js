import Button from "./components/Button";
import "./style.css"

function App(){
    return (
        <>
        <Button 
        label="Button"
        onClickHandler={() => alert("You Clicked Me!")}
        type="tertiary"
        size="large"
        />
        <Button
        label="Button"
        size="small"
        type="secondary"
        />
        <Button
        label="Button"
        />
        </>
    )
}

export default App;