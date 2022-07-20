import CommunityMenuBar from "../components/CommunityMenuBar";
import CommunityFrame from "../components/CommunityFrame";

function Dev() {
  return (
    <div style={{ height: "inherit" }}>
      <CommunityMenuBar job="개발자" />
      <CommunityFrame job="개발자" />
    </div>
  );
}

export default Dev;
