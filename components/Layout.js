import React from 'react'
export default () => (
  <div class='container'>
    <div class='menu' />
    <div class='content' />
    <style jsx global>
      {`
        .container {
            display: grid;
            grid-template-columns: 
            width: 1280px;
        }
        .menu {
            width: 280px;
            backglound-color: red;
        }
        .content {
            width: 1000px;
            backglound-color: blue;
        }
        `}
    </style>
  </div>
)
