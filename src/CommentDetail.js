import React from 'react';
//import faker from 'faker';

const commentDetail = prps =>{
 
    return (
        <div className="comment">
          <a href="/" className="avatar">
             </a>
             <img alt="avatr" ></img>
              <div className="content">
                 <p p className="author">
                     {prps.author}
                 </p>
                  <div className="metadata">
                      <span className="date">
                          {prps.timeAgo}
                          {prps.place}
                      </span>
                  </div>
                  <div  style={{color:'red', fontSize:'40px'}}className="text">
                     <b> 
                        hello man
                     </b>
                  </div>
              </div> 
      </div>
    );
};

export default commentDetail;