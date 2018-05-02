import React, { Fragment } from 'react'
import styled from 'styled-components'

const Item = styled.li`
  color: #4ECDC4;
  padding-bottom: .5rem;
`

const MenuItem = ({ menuItem }) => {
  const { action, label, icon = undefined } = menuItem
  
  return (
    <Fragment>
      {icon && console.log('has icon')}
      <Item onClick={action}>{label}</Item>
    </Fragment>
  )
}

export default MenuItem
