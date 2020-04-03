import React, {
    useContext,
    FC,
} from 'react'
import classNames from 'classnames'
import { TabsContext } from './tabs'

export interface TabItemProps {
    /** Tab选项上面的文字 */
    label: any,
    /** Tab选项是否被禁用 */
    disabled?: boolean,
    // index?: number
}

export const TabItem: FC<TabItemProps & { index?: number }> = (props ) => {
    const {
        label,
        disabled,
        index,
    } = props
    const tabsContext = useContext(TabsContext);
    const classes = classNames('viking-tabs-nav-item',{
        'disabled': disabled,
        'is-active': tabsContext.index === index,
    })

    const handleClick = (e: React.MouseEvent) => {
        if (tabsContext.onSelect) {
            tabsContext.onSelect(index? index: 0)
        }
    }

    return (
        <li className={classes} onClick={handleClick}>
            {label}
        </li>
    )
}
TabItem.displayName = "TabItem"

export default TabItem;