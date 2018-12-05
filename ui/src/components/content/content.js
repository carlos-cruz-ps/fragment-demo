import React from 'react'

const Content = ({ content: { title, thumbnail } }) => (
  <div>
    <img src={thumbnail} />
    <span>
      {title}
    </span>
  </div>
)

export default Content