import React from 'react';
import ImageViewer from '@/components/ImageViewer';

const url = 'https://img-pre.ivsky.com/img/tupian/pre/202008/13/juzi.jpg';
const url1 = 'https://img-pre.ivsky.com/img/tupian/pre/202008/13/juzi-001.jpg';

function TestViewer() {
  return (
    <div>
        <ImageViewer id='testimgid' imgstyle={{display:'flex','justify-content': 'space-around'}}>
            <img src={url} alt="" width="500px" height="500px"></img>
            <img src={url1} alt="" width="500px" height="500px"></img>
        </ImageViewer>
    </div>
  );
}

export default TestViewer;
