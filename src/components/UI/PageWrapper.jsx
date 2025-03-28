import React from 'react'

function PageWrapper({backgroundImage, children}) {
  return (
    <div className={`bg-[url('${backgroundImage}')] bg-cover bg-center h-screen`}>{children}</div>
  )
}

export default PageWrapper