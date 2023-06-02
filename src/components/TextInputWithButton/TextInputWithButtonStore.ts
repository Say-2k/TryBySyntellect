import { makeAutoObservable } from "mobx";
import Button from "../../models/Button";

class TextInputWithButtonStore {
  buttonLeft: Button[];
  buttonRight: Button[];
  textValue: string;

  constructor(buttonLeft: Button[], buttonRight: Button[], textValue: string) {
    makeAutoObservable(this);
    this.buttonLeft = buttonLeft;
    this.buttonRight = buttonRight;
    this.textValue = textValue;
  }
}

export default TextInputWithButtonStore;
