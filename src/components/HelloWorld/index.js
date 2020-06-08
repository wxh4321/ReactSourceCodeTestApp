import React from 'react';

import {Tooltip,Card} from 'antd';
const title = 'Hello react source code';

function Hello() {
  return (
    <Card>
      <Tooltip placement="top" title={title}>
        {title}
      </Tooltip>
    </Card>
  );
}

export default Hello;
