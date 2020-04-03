import React, {
    FC,
} from 'react'

export interface TabItemProps {
    /** Tab选项上面的文字 */
    label: any,
    /** Tab选项是否被禁用 */
    disabled?: boolean,
    // index?: number
}

export const TabItem: FC<TabItemProps> = ({children}) => {

    return (
        <div className="viking-tab-panel">
            {children}
        </div>
    )
}

export default TabItem;