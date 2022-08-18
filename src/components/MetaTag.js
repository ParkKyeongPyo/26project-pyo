import React from "react";
import { Helmet } from "react-helmet-async";

function MetaTag({ heading, content, job, dang }) {
  let defaults = "커뮤니티, 혼자당";
  let keywords = "";
  let temp = "";

  if(dang === "홈") defaults = "커뮤니티, 혼자당";
  else if(dang === "혼자번당") defaults = "커뮤니티, 혼자당, 혼자번당";

  if (job !== "") {
    switch (job) {
      case "개발자":
        temp = "프리랜서, 개발자, 프로그래머, ";
        break;
      case "디자이너":
        temp = "프리랜서, 디자이너, 디자인, ";
        break;
      case "작가":
        temp = "프리랜서, 작가, 글, 글쓰기, 책, 시인, 소설가, ";
        break;
      case "웹툰작가":
        temp = "프리랜서, 웹툰작가, 만화, 그림, 캐릭터, ";
        break;
      case "작곡가":
        temp = "프리랜서, 작곡가, 작곡, 가사, 노래, 곡, ";
        break;
      case "기자":
        temp = "프리랜서, 기자, 기사, 리포터, 스포츠 기자, ";
        break;
      case "번역가":
        temp = "프리랜서, 번역가, 번역, ";
        break;
      case "통역가":
        temp = "프리랜서, 통역가, 통역, ";
        break;
      case "카피라이터":
        temp = "프리랜서, 카피라이터, 문구, ";
        break;
      case "강사":
        temp = "프리랜서, 강사, 학원 강사, 대학 강사, 선생님, 교수, ";
        break;
      case "심리상담가":
        temp = "프리랜서, 심리상담가, 심리, 상담, 멘탈, ";
        break;
      case "영상편집자":
        temp = "프리랜서, 영상편집가, 영상편집, 유튜브, 편집, ";
        break;
      case "사진가":
        temp = "프리랜서, 사진가, 사진, 카메라, ";
        break;
      case "성우":
        temp = "프리랜서, 성우, 목소리, 영화, 광고, 애니매이션, ";
        break;
      case "마케터":
        temp = "프리랜서, 마케터, 마케팅, 광고, ";
        break;
      case "컨설턴트":
        temp = "프리랜서, 컨설턴트, 비지니스, 상담 ";
        break;
      case "배우":
        temp = "프리랜서, 배우, 연기, 드라마, 영화, 뮤지컬, 광고, ";
        break;
      case "모델":
        temp = "프리랜서, 모델, 패션 모델, 광고, ";
        break;
      case "메이크업 아티스트":
        temp = "프리랜서, 메이크업 아티스트, 메이크업, 화장, 분장, ";
        break;
      case "헤어 디자이너":
        temp = "프리랜서, 헤어 디자이너, 헤어, 머리, 미용실, 헤어샵, ";
        break;
      case "헬스 트레이너":
        temp = "프리랜서, 헬스 트레이너, 헬스, 트레이너, 헬스장, ";
        break;
      case "웹/앱 운영자":
        temp = "크리에이터, 개발자, 웹, 앱, 운영, ios, 플레이스토어, 구글, 구글 애드센스, 애드센스, 광고, 애드몹, 애드 포스트, 모비온, 애드워즈, ";
        break;
      case "스마트 스토어 운영자":
        temp = "크리에이터, 스마트 스토어 운영자, 스마트 스토어, 위탁판매, 대량 등록, ";
        break;
      case "쇼핑몰 대표":
        temp = "크리에이터, 쇼핑몰 대표, 쇼핑몰, 옷, 의류, ";
        break;
      case "유튜버":
        temp = "크리에이터, 유튜버, 유튜브, 쇼츠, 영상, youtube, 구글, 광고, 수익, 수입, ";
        break;
      case "인스타 인플루언서":
        temp = "크리에이터, 인스타 인플루언서, 인스타, 광고, 팔로워, 팔로잉, 스토리, 수익, 수입, ";
        break;
      case "틱톡커":
        temp = "크리에이터, 틱톡커, 틱톡, Tiktok, 광고, 수입, ";
        break;
      case "블로거":
        temp = "크리에이터, 블로거, 블로그, 티스토리, 네이버, 구글 애드센스, 애드센스, 광고, 애드몹, 애드 포스트, 모비온, 애드워즈, ";
        break;
      case "퍼스널 브랜더":
        temp = "크리에이터, 퍼스널 브랜더, 퍼스널 브랜드, 퍼스널 브랜딩, 브랜딩, 브랜드, 유튜브, 유튜버, 인스타, 블로그, 틱톡, 강의, ";
        break;
      case "인터넷 방송인":
        temp = "크리에이터, 인터넷 방송인, 인터넷 방송, 트위치, 아프리카, 유튜브 스트리밍, ";
        break;
      case "음식점":
        temp = "자영업자, 음식점, 음식점 사장님, 한식, 양식, 일식, 프렌차이즈, 분식, 치킨집, 피자, 떡볶이, 파스타, 고깃집, 음식점 창업, ";
        break;
      case "커피숍":
        temp = "자영업자, 커피숍, 커피숍 사장님, 카페, 카페 사장님, 프렌차이즈, 스타벅스, 메가커피, 할리스, 공차, 탐앤탐스, 빽다방, 이디야, 투썸플레이스, 커피빈, 엔제리너스, 창업, 개인 카페, 카페 창업, 커피숍 창업, ";
        break;
      case "디저트/빵가게":
        temp = "자영업자, 디저트/빵가게 사장님, 디저트, 빵가게, 파리바게트, 뚜레주르, 제빵사, 제빵, 디저트39, 디저트/빵가게 창업, ";
        break;
      case "술집":
        temp = "자영업자, 술집, 술집 사장님, 1943, 역전할머니맥주, 술집 창업, ";
        break;
      case "프렌차이즈":
        temp = "자영업자, 프렌차이즈 사장님, 프렌차이즈, 프렌차이즈 창업, ";
        break;
      case "편의점":
        temp = "자영업자, 편의점, 편의점 사장님, CU, GS24, GS, 세븐일레븐, 미니스톱, 무인 편의점, 편의점 창업, ";
        break;
      case "무인 점포":
        temp = "자영업자, 무인 점포, 무인 점포 사장님, 아이스크림 할인점 창업, 무인 점포 창업, ";
        break;
      case "스터디 카페":
        temp = "자영업자, 스터디 카페, 스터디 카페 사장님, 스터디 카페 창업, ";
        break;
      case "PC방":
        temp = "자영업자, PC방, PC방 사장님, PC방 창업, ";
        break;
      case "노래방":
        temp = "자영업자, 노래방, 노래방 사장님, 노래방 창업, ";
        break;
      case "헬스장":
        temp = "자영업자, 헬스장, 헬스장 사장님, 헬스장 창업, ";
        break;
      case "미용실":
        temp = "자영업자, 미용실, 미용실 사장님, 미용실 창업, 헤어샵, 미장원, ";
        break;
      case "네일샵":
        temp = "자영업자, 네일샵, 네일샵 사장님, 네일샵 창업, ";
        break;
      case "휴대폰 가게":
        temp = "자영업자, 휴대폰 가게, 휴대폰 가게 사장님, 휴대폰 가게 창업, 스마트폰, ";
        break;
      case "옷가게":
        temp = "자영업자, 옷가게, 옷가게 창업, 옷가게 사장님, 의류, 나이키, 아디다스, ";
        break;
      case "입시/교육":
        temp = "자영업자, 입시/교육, 학원 사장님, 강사, 교사, 선생님, 국어, 영어, 수학, 학원 창업, ";
        break;
      case "운동":
        temp = "자영업자, 헬스 트레이너, 헬스장 창업, 태권도, 합기도, 주짓수, 필라테스, 요가, 크로스핏, 창업, ";
        break;
      case "미술":
        temp = "자영업자, 미술, 미술 학원, 미술 학원 사장님, 창업, ";
        break;
      case "노래/목소리":
        temp = "자영업자, 목소리 교정, 노래 학원, 목소리 학원, 창업, ";
        break;
      default :
        temp = "";
        break;
    }

    keywords = defaults + temp;
  } else {
    keywords = defaults;
  }

  return (
    <Helmet>
      <title>{heading}</title>

      <meta name="description" content={content} />
      <meta name="keywords" content={keywords} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={heading} />
      <meta property="og:site_name" content={heading} />
      <meta property="og:description" content={content} />
      <meta property="og:image" content="/img/logo2.png" />
      <meta property="og:url" content={"http://localhost:3000/"} />

      <meta name="twitter:title" content={heading} />
      <meta name="twitter:description" content={content} />
      <meta name="twitter:image" content="/img/logo2.png" />
      <meta name="twitter:url" content={"http://localhost:3000/"} />
    </Helmet>
  );
}

export default MetaTag;
