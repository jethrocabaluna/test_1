import React from 'react'
import { render } from 'react-dom'
import Router from './Router'

import 'Styles/global.scss'

window.addEventListener('keydown', () => {
    document.body.classList.remove('using-mouse')
});

window.addEventListener('mousedown', () => {
    document.body.classList.add('using-mouse')
});

render(<Router />, document.getElementById('root'))
