import SmallBar from "./SmallBar";
import Community from "../RealCommunity/Community";
import Study from "../RealCommunity/Study";
import Club from "../RealCommunity/Club";
import Info from "../RealCommunity/Info";

function CommunityFrameSub({
  job,
  community,
  study,
  club,
  info,
  onClick,
  onWrite
}) {
  return (
    <>
      <SmallBar onClick={onClick} />
      {community && (
        <Community job={job} onWrite={onWrite} />
      )}
      {study && (
        <Study job={job} onWrite={onWrite} />
      )}
      {club && (
        <Club job={job} onWrite={onWrite} />
      )}
      {info && (
        <Info job={job} onWrite={onWrite} />
      )}
    </>
  );
}

export default CommunityFrameSub;
