import CommunityMenuBar from "./CommunityMenuBar";
import CommunityFrame from "./CommunityFrame";

function Community({
  selectedJob,
  selectedGroup,
  selectedJobEng,
  night,
  setNight,
}) {
  return (
    <div style={{ height: "inherit" }}>
      <CommunityMenuBar job={selectedJob} selectedGroup={selectedGroup} />
      <CommunityFrame
        job={selectedJob}
        jobEng={selectedJobEng}
        selectedGroup={selectedGroup}
        night={night}
        setNight={setNight}
      />
    </div>
  );
}

export default Community;
