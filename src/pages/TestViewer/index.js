import React from 'react';
import ImageViewer from '@/components/ImageViewer';

const url = 'https://img-pre.ivsky.com/img/tupian/pre/202008/07/jiguang-001.jpg';
const url1 = 'https://img-pre.ivsky.com/img/tupian/pre/202008/07/jiguang-010.jpg';

function TestViewer() {
  return (
    <div>
        <ImageViewer id='testimgid' >
            <img src={url} alt="" width="500px" height="500px"></img>
            {/* <img src={url1} alt="" width="500px" height="500px"></img> */}
        </ImageViewer>
    </div>
  );
}

export default TestViewer;
