import React,{
    FC,
    useState,
    ChangeEvent,
    FunctionComponentElement,
    createContext,
    cloneElement,
} from 'react'
import Transition from '../Transition'
import Icon from '../Icon'
import { OptionProps } from './option'
import classNames from 'classnames'

interface ISelectProps {
    defaultValue?: string| string[]
    placeholder?: string
    disabled?: boolean
    multiple?: boolean
    name?: string
    onChange?: (selectedValue: string, selectedValues: string[]) => void
    onVisibleChange?: (visible: boolean) => void
}

interface ISelectContext {
    index: string
    onSelect?: (selectedIndex: string) => void
}

export const Select: FC<ISelectProps> = (props) => {
    const {
        defaultValue,
        placeholder,
        disabled,
        multiple,
        name,
        onChange,
        onVisibleChange,
        children,
    } = props

    const [selectedValue, setSelectedValue] = useState(defaultValue)
    const [hide, setHide] = useState(false)
    const menuClass = classNames("viking-select", {
        "menu-is-open": !hide
    })

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(e.target.value)
        if (onChange) {
            onChange(e.target.value, [])
        }
    }

    const onClick = () => {
        console.log(hide)
        setHide(prevHide => !prevHide)
    }

    const renderChildren = () => {
        return React.Children.map(children, (child, index) => {
            const childElement = child as FunctionComponentElement<OptionProps>
            if (childElement.type.displayName === 'Option') {
                return cloneElement(childElement, {
                    index: index.toString()
                })
            } else {
                console.error('Warning: Select has a child which is not a Option component')
            }
        })
    }

    return (
        <div className={menuClass}>
            <div className="viking-select-input">
                <div className="viking-input-wrapper">
                    <div className="icon-wrapper">
                        <Icon icon="angle-down" />
                    </div>
                    <input
                        className="viking-input-inner"
                        placeholder={placeholder}
                        readOnly
                        name={name}
                        value={selectedValue}
                        onChange={onInputChange}
                        onClick={onClick}
                    />
                </div>
            </div>
            <Transition
                in={!hide}
                timeout={300}
                animation="zoom-in-top"
            >
                <ul className="viking-select-dropdown">
                    {renderChildren()}
                </ul>
            </Transition>

        </div>
    )
}

Select.defaultProps = {
    placeholder: "请选择",
    name: "viking-select"
}

export default Select;