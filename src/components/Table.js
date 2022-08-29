import table from "../CSS/table.module.css";

function Table({ data }) {
  return (
    <div>
      <div className={table.tableHead}>
        <div className={table.bar}>
          <div className={table.bar1}>
            <div className={table.barCate}>
              <span>카테고리</span>
            </div>
            <div className={table.barHeader}>
              <span>제목</span>
            </div>
          </div>
          <div className={table.bar2}>
            <div className={table.barNick}>
              <span>닉네임</span>
            </div>
            <div className={table.barDate}>
              <span>날짜</span>
            </div>
            <div className={table.barInfo}>
              <span>정보</span>
            </div>
          </div>
        </div>

        <div className={table.imgFrame}>
          <div className={table.imgRound}>
            <img className={table.img} src="img/boss1.png" />
          </div>
        </div>
      </div>
      <div className={table.table}>
        {data.map((item) => (
          <div className={table.tableSub}>
            <div className={table.row1}>
              <div className={table.row1ItemFirst}>
                <span className={table.row1Span}>{item.글쓴이}</span>
              </div>
              <div className={table.row1Item}>
                <span className={table.row1Span}>{item.작성일}</span>
              </div>
              <div className={table.row1ItemThird}>
                <span className={table.row1Span}>조회 {item.조회}</span>
              </div>
              <div className={table.row1ItemLast}>
                <span className={table.row1Span}>공감 {item.공감}</span>
              </div>
            </div>
            <div className={table.row2}>
              <div className={table.row2Cate}>
                <span className={table.cate}>{item.카테고리}</span>
              </div>
              <div className={table.row2Head}>
                <span className={table.header}>{item.제목}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Table;
