import React, {
    // useState,
    FC,
} from 'react';
import Alert from './components/Alert/alert'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

const App: FC = () => {
    // const [show, setShow] = useState(false)
    return (
        <div className="App">
            <header className="App-header">
                <Alert
                    title="我是alert组件"
                    onClose={() => alert("ok")}
                    description="非常好的组件"
                    closable={false}
                />
                {/* <Menu defaultIndex="0" onSelect={(index) => {alert(index)}} mode="horizotal">
                    <MenuItem>
                        cool link
                    </MenuItem>
                    <MenuItem disabled>
                        cool link2
                    </MenuItem>
                    <SubMenu title="dorpdown">
                        <MenuItem>
                            dropdown1
                        </MenuItem>
                        <MenuItem>
                            dropdown2
                        </MenuItem>
                        <MenuItem>
                            dropdown3
                        </MenuItem>
                    </SubMenu>
                    <MenuItem>
                        cool link3
                    </MenuItem>
                </Menu>
                <Button size="lg" onClick={() => {setShow(!show)} }>
                    Toggle
                </Button>
                <Transition
                    in={show}
                    timeout={300}
                    animation="zoom-in-left"
                >
                    <div>
                        <p>
                            Edit <code>src/App.tsx</code> and save to reload.
                        </p>
                        <p>
                            Edit <code>src/App.tsx</code> and save to reload.
                        </p>
                        <p>
                            Edit <code>src/App.tsx</code> and save to reload.
                        </p>
                        <p>
                            Edit <code>src/App.tsx</code> and save to reload.
                        </p>
                        <p>
                            Edit <code>src/App.tsx</code> and save to reload.
                        </p>
                    </div>
                </Transition>
                <Transition
                    in={show}
                    timeout={300}
                    animation="zoom-in-top"
                    wrapper
                >
                    <Button btnType="primary" size="lg">
                        A large Button
                    </Button>
                </Transition> */}
            </header>
        </div>
    );
}

export default App;
