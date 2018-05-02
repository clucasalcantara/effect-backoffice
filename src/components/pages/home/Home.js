import React from 'react'
import styled from 'styled-components'
// Components
import SideBar from '../../organisms/SideBar'

const EffectLayout = styled.section`
  color: #7A7265;
  font-family: 'Quicksand', sans-serif;
`
const items = [
  {
    label: 'Home',
    action: () => console.log('Go to home'),
  },
  {
    label: 'Pages',
    action: () => console.log('Go to Pages'),
  },
  {
    label: 'Layout',
    action: () => console.log('Go to Layout'),
  }
]

const client = {
  name: 'Demo Client',
  theme: 'Start Theme',
}

const Home = () => (
  <EffectLayout> 
    <SideBar items={items} client={client} />
  </EffectLayout>
)

export default Home