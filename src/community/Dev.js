import CommunityMenuBar from "../components/CommunityMenuBar";
import CommunityFrame from "../components/CommunityFrame";

function Dev({userNickname , setUserNickname}) {
  return (
    <div style={{ height: "inherit" }}>
      <CommunityMenuBar job="개발자" />
      <CommunityFrame job="개발자" userNickname={userNickname} setUserNickname={setUserNickname}/>
    </div>
  );
}

export default Dev;
