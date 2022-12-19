import React, { memo } from 'react'


function UseCallbackChild({value, fun}) {

    console.log("child is logging")
  return (
    <div>
        <h1>This is Child Component</h1>
    </div>
  )
}
 
export default memo(UseCallbackChild)