import React,{Component} from 'react';
import {List} from 'antd';
import styles from './index.less';

const Item = List.Item;
class Menu extends Component{
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        return(
            <div className={styles.menu}>
                <List>
                    <Item>
                        <a href='/'>main page</a>
                    </Item>
                    <Item>
                        <a href='/removabletable'>removable table</a>
                    </Item>
                    <Item>
                        <a href='/testviewer'>test viewer</a>
                    </Item>
                </List>
            </div>
        )
    }
}

export default Menu;