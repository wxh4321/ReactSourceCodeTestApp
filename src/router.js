import React,{Component} from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from '@/App';
import Menu from '@/pages/Menu';
import RemovableTable from '@/pages/RemovableTable';

class Router extends Component {
    constructor(props) {
        super(props)
        this.state = ({

        })
    }
    
    componentWillMount(){
    }
    
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact component={App} />
                    <Route path='/menu' exact component={Menu} />
                    <Route path='/removabletable' exact component={RemovableTable} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router;