import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
// Styled Interfaces
import { Wrapper, SideItems, Title, SubTitle, CollapseSideBar, SideBarCollapsed } from './styled'
// Components
import MenuItem from '../../molecules/MenuItem'

class SideBar extends Component {
  state = {
    collapsed: false,
  }

  static propTypes = {
    items: PropTypes.array.isRequired,
    client: PropTypes.object.isRequired,
  }

  render() {
    const { items, client } = this.props
    const { collapsed } = this.state

    return (
      <Fragment>
        {
          !collapsed ? (
            <Wrapper className={collapsed ? 'collapsed' : 'expanded'}>
              <SideItems>
                <CollapseSideBar onClick={this._handleCloseSideBar}>X</CollapseSideBar>
                <Title>Effect CMS</Title>
                <SubTitle>{`${client.name} - ${client.theme}`}</SubTitle>
                {
                  items && items.map((item) => (
                    <MenuItem key={item.label} menuItem={item} />
                  ))
                }
              </SideItems>
            </Wrapper>) : (
            <SideBarCollapsed>
              <SideItems>
                  <CollapseSideBar onClick={this._handleCloseSideBar}>X</CollapseSideBar>
                  <Title>Effect CMS</Title>
                  <SubTitle>{`${client.name} - ${client.theme}`}</SubTitle>
                  {
                    items && items.map((item) => (
                      <MenuItem key={item.label} menuItem={item} />
                    ))
                  }
                </SideItems>
            </SideBarCollapsed>
          ) 
        }
        <MenuItem menuItem={{ label: 'Publish', action: () => {} }} />
      </Fragment>
    )
  }

  _handleCloseSideBar = () => this.setState({ collapsed: !this.state.collapsed })
}

export default SideBar
