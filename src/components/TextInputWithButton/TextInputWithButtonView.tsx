import { Button, IButtonProp } from "./Button";

interface ITextInputWithButtonViewProps {
  buttonLeft: IButtonProp[];
  buttonRight: IButtonProp[];
  textValue: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInputWithButtonView: React.FC<ITextInputWithButtonViewProps> = ({
  buttonLeft,
  buttonRight,
  textValue,
  handleChange,
}: ITextInputWithButtonViewProps) => (
  <>
    {buttonLeft.length > 0 &&
      buttonLeft.map((e) => (
        <Button label={e.label} handleClick={e.handleClick} />
      ))}
    <input type="text" multiple value={textValue} onChange={handleChange} />
    {buttonRight.length > 0 &&
      buttonRight.map((e) => (
        <Button label={e.label} handleClick={e.handleClick} />
      ))}
  </>
);

export default TextInputWithButtonView;
