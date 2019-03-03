import React from 'react'
import Link from 'next/link'

export default () => (
  <div>
    <ul>
      <li>
        <Link href='https://twitter.com/roronya'>Twitter</Link>
      </li>
      <li>
        <Link href='https://github.com/roronya'>GitHub</Link>
      </li>
      <li>
        <Link href='https://www.facebook.com/anoddfellow'>Facebook</Link>
      </li>
      <li>
        <Link href='https://www.instagram.com/kanaichang/'>Instagram</Link>
      </li>
    </ul>
    <style jsx>
      {`
        ul {
          text-align: right;
          font-size: 48px;
        }
        li {
          list-style: none;
        }
      `}
    </style>
  </div>
)
