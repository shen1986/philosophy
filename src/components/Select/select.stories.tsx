import React from 'react'
import { storiesOf } from '@storybook/react'
import Select from './select'
import Option from './option'

const SimpleSelect = () => {
    return (
        <Select>
            <Option value="2342">123123</Option>
            <Option value="2342">32423</Option>
            <Option value="2342">123123</Option>
        </Select>
    )
}

storiesOf('Select组件', module)
    .add('Select', SimpleSelect)