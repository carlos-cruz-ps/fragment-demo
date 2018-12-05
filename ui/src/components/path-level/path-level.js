import React from 'react'

import Content from '../content'

const PathLevel = ({ pathLevel: { content, title } }) => (
  <div>
    <h5>{title}</h5>
    <div>
    {content.map(item => <Content key={item.id} content={item} />)}
    </div>
  </div>
)

export default PathLevel