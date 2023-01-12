import { useContext } from "react";
import { TeamsFxContext } from "./Context";

import { meeting } from "@microsoft/teams-js";

export default function Tab() {
  const { themeString } = useContext(TeamsFxContext);
  const handleButton = () => {
    meeting.shareAppContentToStage((err, result) => {
      if (result) {
        console.log(`🔗 Shared successfully`);
      } else {
        console.error(`⚠️ Shared failed`, err);
      }
    }, `https://localhost:53000/index.html#/privacy`);
  };
  return (
    <div className={themeString === "default" ? "" : "dark"}>
      <button onClick={handleButton}>Click me to open meeting stage</button>
    </div>
  );
}
