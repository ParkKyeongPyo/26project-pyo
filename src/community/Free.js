import CommunityFrame from "../components/CommunityFrame";
import CommunityMenuBar from "../components/CommunityMenuBar";

function Free() {
  return (
    <div style={{ height: "inherit" }}>
      <CommunityMenuBar />
      <CommunityFrame job="All"/>
    </div>
  );
}

export default Free;
