import AnimationControls from "./components/AnimationControls";
import BasicAnimations from "./components/BasicAnimations";
import Gestures from "./components/Gestures";
import ScrollAnimations from "./components/ScrollAnimations";
import ViewBasedAnimations from "./components/ViewBasedAnimations";

function App() {
  return (
    <div>
      <BasicAnimations />
      <Gestures />
      <AnimationControls />
      <ViewBasedAnimations />
      <ScrollAnimations />
    </div>
  );
}

export default App;
