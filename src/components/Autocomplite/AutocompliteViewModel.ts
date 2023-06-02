import AutocompliteStore from "./AutocompliteStore";
import { makeAutoObservable } from "mobx";
import { getCountryByName } from "../../api/apiService";
import { IHint } from "../../models/Hint";
import { createRef, RefObject } from "react";

export default class AutocompliteViewModel {
  autocompliteStore: AutocompliteStore;
  hintsAnchorEl: RefObject<HTMLInputElement>;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;

  constructor(numberOfHints: number) {
    makeAutoObservable(this);
    this.autocompliteStore = new AutocompliteStore(numberOfHints);
    this.hintsAnchorEl = createRef();

    this.handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
      this.autocompliteStore.textValue = event.target.value;
      this.autocompliteStore.setHints(
        await getCountryByName(event.target.value)
          .then((countries) => countries.map((country) => country as IHint))
          .then((e) => e.slice(0, numberOfHints))
      );
    };
  }
}
