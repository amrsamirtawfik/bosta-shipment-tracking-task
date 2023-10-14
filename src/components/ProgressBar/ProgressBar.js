import "./ProgressBar.css";
import ProgressBarHeader from "./ProgressBarHeader";
import ProgressTracker from "./progressTracker";

function ProgressBar(props) {
  
  return (
    <div className="progress-bar">
      <ProgressBarHeader
        progressBarHeader={props.progressTrackerConfig}
        className="progress-bar-header-in-full-progress-bar"
      />
      <ProgressTracker
        config={props.progressTrackerConfig}
        className="progress-tracker-in-full-progress-bar"
      />
    </div>
  );
}
export default ProgressBar;
