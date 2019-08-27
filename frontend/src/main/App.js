import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import React from 'react'
import Menu from '../template/Menu'
import Routes from './Routes'

export default props => (
    <div className="container">
        <Menu />
        <Routes />
    </div>
)
