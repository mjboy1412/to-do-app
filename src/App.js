import React from 'react';
import TodoApp from './components/TodoApp/TodoApp';
import About from './components/About/About';
import Calculator from './components/Caculator/Calculator';
import Page404 from './components/OtherSmallPage/Page404';
import {Link, Route, Switch} from "react-router-dom";

class App extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <Link to={'/todoapp'}>To-do app</Link>&nbsp;&nbsp;&nbsp;
                    <Link to={'/about'}>about</Link>
                </header>
                <main>
                    <Switch>
                        <Route exact path='/(home|todoapp|)' component={TodoApp}/>
                        <Route path='/about' component={About}/>
                        <Route path='/calculator' component={Calculator}/>
                        <Route component={Page404}/>
                    </Switch>
                </main>
            </div>

        );
    }
}

export default App;
