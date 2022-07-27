import CommunityFrame from "../components/CommunityFrame";
import CommunityMenuBar from "../components/CommunityMenuBar";

function Free({ userNickname , setUserNickname }) {
  return (
    <div style={{ height: "inherit" }}>
      <CommunityMenuBar />
      <CommunityFrame job="All" userNickname={userNickname} setUserNickname={setUserNickname}/>
    </div>
  );
}

export default Free;
