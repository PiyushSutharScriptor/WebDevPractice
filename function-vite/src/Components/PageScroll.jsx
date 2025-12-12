import React from 'react'

const PageScroll = () => {

    const pageSrl = (val)=>{
        console.log("Page scrolled at speed : " , val)
    }

    const scrollFilter = (val)=>{
        if(val>0) console.log("Scrolling Down");
        else console.log("Scrolling Up");
    }
    
  return (
    <div onWheel={(elem)=>{
        // pageSrl();
        // console.log(elem.timeStamp);
        // console.log(elem.deltaY);
        // pageSrl(elem.deltaY)
        scrollFilter(elem.deltaY)
        
    }}>
        <div className="page1">page1</div>
        <div className="page2">page2</div>
        <div className="page3">page3</div>
    </div>
  )
}

export default PageScroll
