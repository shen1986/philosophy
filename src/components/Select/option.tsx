import React,{
    FC,
} from 'react'

export interface OptionProps {
    index?: string
    value: string
    label?: string
    disabled?: boolean
}
const Option: FC<OptionProps> = (props) => {
    const {
        index,
        value,
        label,
        disabled,
        children,
    } = props

    return (
        <li className="viking-select-item">
            {children}
        </li>
    )
}

Option.displayName = "Option"

export default Option;