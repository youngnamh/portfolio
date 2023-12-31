import "../styles/switch.css";

type SwitchProps = {
  isOn: boolean;
  handleToggle: () => void;
};

export default function Switch({ isOn, handleToggle }: SwitchProps) {
  const chooseBackground = () => (isOn ? "#7209b7" : "#48cae4");

  return (
    <div className="switch-container">
      <input
        checked={isOn}
        onChange={handleToggle}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        className="react-switch-label"
        htmlFor={`react-switch-new`}
        style={{ background: chooseBackground() }}
      >
        <span className={`react-switch-button`} />
      </label>
    </div>
  );
}
