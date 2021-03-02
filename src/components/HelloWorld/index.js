import React from 'react';
// import * as React from '../../react/packages/react/src/React';
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
