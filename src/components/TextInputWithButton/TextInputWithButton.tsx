import { observer } from "mobx-react-lite";
import TextInputWithButtonViewModel from "./TextInputWithButtonViewModel";
import { IButtonProp } from "./Button";
import { FC, useState, useEffect } from "react";
import TextInputWithButtonView from "./TextInputWithButtonView";

interface TextInputWithButtonProps {
  textValue: string;
  buttonLeft?: IButtonProp[];
  buttonRight?: IButtonProp[];
  setTextValue: React.Dispatch<React.SetStateAction<string>>;
}

const TextInputWithButton: FC<TextInputWithButtonProps> = observer(
  ({
    textValue,
    buttonLeft = [],
    buttonRight = [],
    setTextValue,
  }: TextInputWithButtonProps) => {
    const [vievModel, setViewModel] = useState<TextInputWithButtonViewModel>(
      new TextInputWithButtonViewModel(
        buttonLeft,
        buttonRight,
        textValue,
        setTextValue
      )
    );

    useEffect(() => {
      setViewModel(
        new TextInputWithButtonViewModel(
          buttonLeft,
          buttonRight,
          textValue,
          setTextValue
        )
      );
    }, [textValue, buttonLeft, buttonRight, setTextValue]);

    return (
      <TextInputWithButtonView
        buttonLeft={vievModel.textInputWithButtonStore.buttonLeft}
        buttonRight={vievModel.textInputWithButtonStore.buttonRight}
        textValue={vievModel.textInputWithButtonStore.textValue}
        handleChange={vievModel.handleChange}
      />
    );
  }
);

export default TextInputWithButton;
