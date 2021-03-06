import React  from 'react'
// import ReadMoreReact from 'read-more-react';
const HomeStyle = (props)=>(

        <div className="col-lg-3 col-md-4 col-sm-6 portfolio-item" onClick={props.clicked}>
          <div className="card h-100">
            <div className="card-body">
              <h4 className="card-title">
                <p>{props.title}</p>
                <p style={{fontWeight:600}}>{props.author}</p>
              </h4>
              <p className="card-text">{props.body}</p>
            </div>
          </div>
        </div>


			)
export default HomeStyle

