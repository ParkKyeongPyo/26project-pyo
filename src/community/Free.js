import CommunityFrame from "../components/CommunityFrame";
import CommunityMenuBar from "../components/CommunityMenuBar";

function Free() {
  return (
    <div style={{ height: "inherit" }}>
      <CommunityMenuBar />
      <CommunityFrame job="All" userNickname={userNickname} setUserNickname={setUserNickname}/>
    </div>
  );
}

export default Free;
