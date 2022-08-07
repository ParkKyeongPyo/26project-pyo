import { Segmented } from 'antd';

import { useState } from "react";

function Switch() {
  return (
    <Segmented options={['프리랜서','개인사업자', '자영업자']} />
  );
}

export default Switch;
