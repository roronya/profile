import React from 'react'
export default ({ children }) => (
  <div>
    <div class='container'>
      <div class='menu'>{children[0]}</div>
      <div class='content'>{children[1]}</div>
    </div>
    <style jsx>
      {`
        .container {
          display: grid;
          grid-template-columns: 488px 792px;
          grid-template-rows: auto;
          grid-gap: 8px;
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
