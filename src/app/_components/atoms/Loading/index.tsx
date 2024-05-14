import React from 'react'
import LoadingIcons from 'react-loading-icons'
import * as stylex from '@stylexjs/stylex'

const Loading = () => {
  return (
    <div {...stylex.props(styles.div)}>
      <LoadingIcons.SpinningCircles />   
    </div>
  )
}

const styles = stylex.create({
  div: {
    width: "100%",
    display: "flex",
    justifyItems: "center",
    marginTop: 30,
    ":not(__) > svg": {
     marginInline: "auto",
    }
  }
})

export default Loading
