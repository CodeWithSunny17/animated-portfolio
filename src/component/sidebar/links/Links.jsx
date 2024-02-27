import React from 'react'

const Links = ()=> {

    const items=[
        "HomePage",
        "Services",
        "Portfolio",
        "Contact",
        "About"
    ]
  
    return (
      <div className='links'>{items.map(x=>(<a href={`#${x}`} key={x}>{x}</a>))}</div>
    )
  
}

export default Links;