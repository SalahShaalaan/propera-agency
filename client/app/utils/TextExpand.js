import React, { useState } from 'react'

export default function TextExpand({ children }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const displayText = isExpanded ? children : children.split("").slice(0, 40).join("") + "..."

  return (
    <span>
      {displayText}
      <button className='bg-mainGold text-mainBlack border p-3' onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? "Show Less" : "Show More"}
      </button>
    </span>
  )
}
