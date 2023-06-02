import TextInputWithButtonStore from "./TextInputWithButtonStore";
import { makeAutoObservable } from "mobx";
import Button from "../../models/Button";

class TextInputWithButtonViewModel {
  textInputWithButtonStore: TextInputWithButtonStore;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;

  constructor(
    buttonLeft: Button[],
    buttonRight: Button[],
    textValue: string,
    setTextValue: React.Dispatch<React.SetStateAction<string>>
  ) {
    makeAutoObservable(this);

    this.textInputWithButtonStore = new TextInputWithButtonStore(
      buttonLeft,
      buttonRight,
      textValue
    );

    this.handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setTextValue(event.target.value);
      this.textInputWithButtonStore.textValue = event.target.value;
    };
  }
}

export default TextInputWithButtonViewModel;
