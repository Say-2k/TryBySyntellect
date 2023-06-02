import { observer } from "mobx-react-lite";
import { FC, useState } from "react";
import AutocompliteViewModel from "./AutocompliteViewModel";
import AutocompliteView from "./AutocompliteView";

interface IAutocompliteProps {
  numberOfHints: number;
}

const Autocomplite: FC<IAutocompliteProps> = observer(
  ({ numberOfHints }: IAutocompliteProps) => {
    const [vievModel] = useState<AutocompliteViewModel>(
      new AutocompliteViewModel(numberOfHints)
    );

    return (
      <AutocompliteView
        handleChange={vievModel.handleChange}
        hints={vievModel.autocompliteStore.hints}
        textValue={vievModel.autocompliteStore.textValue}
        hintsAnchorEl={vievModel.hintsAnchorEl}
      />
    );
  }
);

export default Autocomplite;
