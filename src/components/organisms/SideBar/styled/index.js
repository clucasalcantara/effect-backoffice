import styled from 'styled-components'

const Wrapper = styled.div`
  top: 0;
  color: #7A7265;
  left: 0;
  position: absolute;
  background-color: #433E3F;
  display: flex;
  align-items: stretch;
`
const SideItems = styled.ul`
  min-height: 100vh;
  min-width: 18rem;
  list-style-type: none;
  padding: 1rem;
`

const Title = styled.h2`
  color: #F7FFF7;
`

const SubTitle = styled.h5`
  color: #F7FFF7;
  font-weight: 300;
`

const SideBarCollapsed = styled.div`
  top: 0;
  color: #7A7265;
  left: 0;
  position: absolute;
  background-color: #433E3F;
  display: flex;
  margin-left: -18rem;
  align-items: stretch;
`

const CollapseSideBar = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: #F7FFF7;
  font-weight: 300;
  cursor: pointer;
`

export {
  Wrapper,
  SideItems,
  Title,
  SubTitle,
  CollapseSideBar,
  SideBarCollapsed
}
