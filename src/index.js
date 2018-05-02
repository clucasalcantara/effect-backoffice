import React from 'react'
import ReactDOM from 'react-dom'

import Home from './components/pages/home'

const title = 'Effect CMS - Made with Magic'

ReactDOM.render(<Home />, document.getElementById('app'))

module.hot.accept();