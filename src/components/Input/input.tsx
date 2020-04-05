import React, {
    InputHTMLAttributes,
    ReactElement,
    ChangeEvent,
    FC,
} from 'react'
import classNames from 'classnames'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

type InputSize = 'lg' | 'sm'
export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
    disabled?: boolean
    size?: InputSize
    icon?: IconProp
    prepend?: string | ReactElement
    append?: string | ReactElement
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Input: FC<InputProps> = (props) => {
    const {
        disabled,
        size,
        icon,
        prepend,
        append,
        style,
        ...restProps
    } = props
    const cnames = classNames('viking-input-wrapper', {
        [`input-size-${size}`]: size,
        'is-disabled' : disabled,
        'input-group': prepend || append,
        'input-group-append ':
    })
}

export default Input;