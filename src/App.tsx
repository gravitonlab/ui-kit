import { Button, Gap } from "../lib/main";
import { Colors } from "./components/Colors";

const App: React.FC = () => {
  return (
    <Gap flexDirection="column" alignItems="flex-start">
      <Button children="Test" />
      <Button children="Test" use="primary" />

      <Colors />
    </Gap>
  );
};

export default App;
