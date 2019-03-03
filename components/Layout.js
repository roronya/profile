import React from 'react'
export default ({ children }) => (
  <div>
    <div className='container'>
      <div className='menu'>{children[0]}</div>
      <div className='content'>{children[1]}</div>
    </div>
    <style jsx>
      {`
        .container {
          display: grid;
          grid-template-columns: 284px 988px;
          grid-template-rows: auto;
          grid-gap: 8px;
          width: 1280px;
          margin: 8px auto 0 auto;
        }
        .menu {
          grid-colunn: 1/2;
          grid-row: 1;
        }
        .content {
          grid-column: 2/2;
          grid-row: 1;
        }
      `}
    </style>
  </div>
)
