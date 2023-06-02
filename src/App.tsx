import { useState } from "react";
import "./App.css";
import TextInputWithButton from "./components/TextInputWithButton/TextInputWithButton";
import Autocomplite from "./components/Autocomplite/Autocomplite";

function App() {
  const [textValue, setTextValue] = useState<string>("");
  const [textValue2, setTextValue2] = useState<string>("");

  function handleClickPrint() {
    setTextValue("Hello World!");
  }

  function handleClickClear() {
    setTextValue("");
  }

  function handleClickAlert() {
    alert(textValue2);
  }

  function handleClickCheckNumber() {
    if (Number.parseInt(textValue2)) alert(textValue2);
  }

  return (
    <>
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          gap: 46,
          marginTop: 46,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <TextInputWithButton
            buttonLeft={[]}
            buttonRight={[
              {
                label: "Clear",
                handleClick: handleClickClear,
              },
              {
                label: "Print Hello World",
                handleClick: handleClickPrint,
              },
            ]}
            textValue={textValue}
            setTextValue={setTextValue}
          />
          <TextInputWithButton
            buttonLeft={[
              {
                label: "Check number",
                handleClick: handleClickCheckNumber,
              },
            ]}
            buttonRight={[
              {
                label: "Alert",
                handleClick: handleClickAlert,
              },
            ]}
            textValue={textValue2}
            setTextValue={setTextValue2}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Autocomplite numberOfHints={3} />
          <Autocomplite numberOfHints={10} />
        </div>
      </div>
    </>
  );
}

export default App;
