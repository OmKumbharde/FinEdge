import React from 'react'

const HeaderBox = ({ type = "tile", title, subtext, user }: HeaderBoxProps) => {
  return (
    <div className='header-box'>
      <h1 className="header-box-title">
        {title}
        {type === 'greeting' && (
            <span className="text-bankGradient">
                &nbsp;{user}
                </span>
        )}
        </h1>
        <p className="header-box-student">{subtext}</p>
    </div>
  )
}

export default HeaderBox