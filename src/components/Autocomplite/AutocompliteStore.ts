import { makeAutoObservable } from "mobx";
import { IHint } from "../../models/Hint";

export default class AutocompliteStore {
  numberOfHints: number;
  textValue: string;
  hints: IHint[];
  setHints: (hints: IHint[]) => void;

  constructor(numberOfHints: number) {
    makeAutoObservable(this);
    this.numberOfHints = numberOfHints;
    this.textValue = "";
    this.hints = [];
    this.setHints = (hints: IHint[]) => {
      this.hints = hints;
    };
  }
}
