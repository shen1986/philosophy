import React, {
    useState,
    createContext,
    FunctionComponentElement,
    cloneElement,
    FC,
} from 'react'
import classNames from 'classnames'
import { TabItemProps } from './tabItem'

type TabsType = "line" | "card"
export interface TabsProps {
    defaultIndex?: number
    className?: string
    onSelect?: (selectedIndex: number) => void
    type?: TabsType
}

interface ITabsContext {
    index: number
    onSelect?: (selectedIndex: number) => void
}

export const TabsContext = createContext<ITabsContext>({ index: 0 })

/**
 * 选项卡切换组件。 提供平级的区域将大块内容进行收纳和展现，保持界面整洁。
 * ### 引用方法
 *
 * ~~~js
 * import { Tabs } from 'vikingship'
 * ~~~
 */
export const Tabs: FC<TabsProps> = (props) => {
    const {
        defaultIndex,
        className,
        onSelect,
        type,
        children,
    } = props
    const [currentActive, setActive] = useState(defaultIndex)

    const classes = classNames("viking-tabs", className)
    const ulClass = classNames('viking-tabs-nav', {
        'nav-line': type === 'line',
        'nav-card': type === 'card'
    })

    const handleClick = (selectedIndex: number) => {
        if (onSelect) {
            onSelect(selectedIndex)
        }
        setActive(selectedIndex)
    }

    const passedContext: ITabsContext = {
        index: currentActive ? currentActive : 0,
        onSelect: handleClick,
    }

    const renderChild = () => {
        return React.Children.map(children, (child, index) => {
            const childElement = child as FunctionComponentElement<TabItemProps & {index: number}>
            const { displayName } = childElement.type
            if (displayName === 'TabItem') {
                return cloneElement(childElement, {
                    index
                })
            } else {
                console.error("Warning: Tabs has a child which is not a TabItem component")
            }
        })
    }

    const renderChildContent = () => {
        let childContent: React.ReactNode = null;
        React.Children.forEach(children, (child, index) => {
            const childElement = child as FunctionComponentElement<TabItemProps & { index: number }>
            const { displayName } = childElement.type
            if (displayName === 'TabItem' && index === currentActive) {
                childContent = (childElement.props as any).children
            } else {
                console.error("Warning: Tabs has a child which is not a TabItem component")
            }
        })
        return childContent
    }

    return (
        <div className={classes}>
            <ul className={ulClass}>
                <TabsContext.Provider value={passedContext}>
                    {renderChild()}
                </TabsContext.Provider>
            </ul>
            <div className="viking-tabs-content">
                {renderChildContent()}
            </div>
        </div>
    )
}

Tabs.defaultProps = {
    defaultIndex: 0,
    type: 'line'
}

export default Tabs;