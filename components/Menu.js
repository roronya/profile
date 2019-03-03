import React from 'react'

export default () => (
  <div>
    <ul>
      <li>Profile</li>
      <li>Twitter</li>
      <li>Github</li>
      <li>Facebook</li>
      <li>Instagram</li>
    </ul>
    <style jsx>{`
      li {
        display: none;
      }
      li:nth-child(1) {
        animation: fadeIn 0.3s ease 0.3s 1 forwards;
      }
      li:nth-child(2) {
        animation: fadeIn 0.47s ease 0.47s 1 forwards;
      }
      li:nth-child(3) {
        animation: fadeIn 0.69s ease 0.69s 1 forwards;
      }
      li:nth-child(4) {
        animation: fadeIn 0.77s ease 0.77s 1 forwards;
      }
      li:nth-child(5) {
        animation: fadeIn 0.84s ease 0.84s 1 forwards;
      }
      @keyframes fadeIn {
        100% {
          display: block;
        }
      }
    `}</style>
  </div>
)
