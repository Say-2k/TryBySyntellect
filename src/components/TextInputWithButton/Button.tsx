interface IButtonProp {
  label: string;
  handleClick: () => void;
}
const Button: React.FC<IButtonProp> = ({ label, handleClick }: IButtonProp) => (
  <input type="button" onClick={handleClick} value={label} />
);

export { Button };
export type { IButtonProp };
