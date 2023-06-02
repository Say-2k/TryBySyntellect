import { IHint } from "../../models/Hint";
import { FC, RefObject } from "react";

interface IAutocompliteViewProps {
  textValue: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  hints: IHint[];
  hintsAnchorEl: RefObject<HTMLInputElement>;
}

const AutocompliteView: FC<IAutocompliteViewProps> = ({
  textValue,
  handleChange,
  hints,
  hintsAnchorEl,
}: IAutocompliteViewProps) => (
  <>
    <input
      type="text"
      value={textValue}
      onChange={handleChange}
      ref={hintsAnchorEl}
      style={{
        width: 300,
        height: 32,
        fontSize: "xx-large",
      }}
    />

    {(hints.length > 0 || textValue.length < 1) && (
      <div
        style={{
          position: "absolute",
          zIndex: 1,
          width: hintsAnchorEl.current?.getBoundingClientRect().width,
          top:
            hintsAnchorEl.current !== null
              ? hintsAnchorEl.current?.getBoundingClientRect().top +
                hintsAnchorEl.current?.getBoundingClientRect().height
              : 0,
          left: hintsAnchorEl.current?.getBoundingClientRect().left,
        }}
      >
        {hints.map((hint) => (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 2fr 1fr",
              marginBottom: 16,
              padding: "8px 16px 0",
              gap: 8,
            }}
          >
            <span style={{ fontSize: "small" }}>{hint.name}</span>
            <span style={{ fontSize: "small" }}>{hint.fullName}</span>
            <img src={hint.flag} alt="flag" style={{ width: 30 }} />
          </div>
        ))}
      </div>
    )}
  </>
);

export default AutocompliteView;
