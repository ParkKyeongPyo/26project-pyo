import CommunityFrame from "../components/CommunityFrame";
import CommunityMenuBar from "../components/CommunityMenuBar";

function Free({ selectedJob }) {
  return (
    <div style={{ height: "inherit" }}>
      <CommunityMenuBar job={selectedJob} />
      <CommunityFrame job="All" />
    </div>
  );
}

export default Free;
