import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import { Game }  from '../../../components/Game/index'

describe('Game component tests', () => {
    test('Should render without error' , () => {
        const div = document.createElement('div')
        ReactDOM.render(<Game />, div)
    })
    test('Should have ListaPersonagens component' , () => {
        const wrapper = shallow(<Game />)
        expect(wrapper.find('ListaPersonagens')).to.have.lengthOf(1)
    })
})
