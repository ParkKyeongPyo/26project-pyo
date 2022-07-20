import groupStyles from "../CSS/jobGroup.module.css";

function IT({onJobMouseOver, onJobMouseOut, onJobClick}) {
  return (
      <>
        <div className={groupStyles.groupFlex}>
          <span
            className={groupStyles.group}
            onMouseOut={onJobMouseOut}
            onMouseOver={onJobMouseOver}
            onClick={onJobClick}
          >
            개발자
          </span>
          <span
            className={groupStyles.group}
            onMouseOut={onJobMouseOut}
            onMouseOver={onJobMouseOver}
            onClick={onJobClick}
          >
            영상편집자
          </span>
        </div>
      </>
  );
}

export default IT;
