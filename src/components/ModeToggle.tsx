import "../styles/toggle.css";

type SwitchProps = {
  isOn: boolean;
  handleToggle: () => void;
};

export default function ModeToggle({ isOn, handleToggle }: SwitchProps) {
  return (
    <div>
      <label>
        <input
          className="toggle-checkbox"
          type="checkbox"
          checked={isOn}
          onChange={handleToggle}
        />
        <div className="toggle-slot">
          <div className="sun-icon-wrapper">
            <div
              className="iconify sun-icon"
              data-icon="feather-sun"
              data-inline="false"
            ></div>
          </div>
          <div className="toggle-button"></div>
          <div className="moon-icon-wrapper">
            <div
              className="iconify moon-icon"
              data-icon="feather-moon"
              data-inline="false"
            ></div>
          </div>
        </div>
      </label>
    </div>
  );
}
