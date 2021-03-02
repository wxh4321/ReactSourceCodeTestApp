import React,{useEffect,useState} from 'react';
import 'viewerjs/dist/viewer.css';
import Viewer from 'viewerjs';

let viewer=null;

function ImageViewer(props) {
  const {children,imgstyle} = props;
  const [state,setState] = useState({
    id:props.id
  });
  const {id} = state;
  
  const initImageData = () => {
    // View an image.
    // viewer = new Viewer(document.getElementById(id||'id'), {
    //     inline: false,
    //     viewed() {
    //     viewer.zoomTo(1);
    //     },
    // });
    viewer = new Viewer(document.getElementById(id));
  }
  const updateState = (params={}) => {
    setState({
        ...state,
        ...params
    })
  }

  const clickImage = () => {
     if(viewer){
        viewer.show();
     }
  }
  useEffect(()=>{
    // console.log('use effect running ',id)
    initImageData();
  },[state])

  return (
    <ul id={id} style={imgstyle||{display:'flex'}}>
        {
            children&&children.length?
            children.map((e)=>{
                return (
                    <li onClick={clickImage}>
                        {e}
                    </li>
                )
            })
            :
            <li onClick={clickImage}>
                {children}
            </li>
        }
        
    </ul>
  );
}

export default ImageViewer;
