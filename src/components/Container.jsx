import React from 'react'

const Container = ({ children }) => {
  return (
    <>
    <div className="container_todo">
        {children}
    </div>
    </>
  )
}

export default Container