import React from 'react';
import {Menu} from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {
    return (
        <Menu style={{ marginTop: '10px' }}>
            <Link to="/">
                <a className="item">Crowd Coin</a>
            </Link>

            <Menu.Menu position="right">
                <Link to="/">
                    <a className="item">Campaigns</a>
                </Link>
                <Link to="campaigns/new">
                  <a className="item">+</a>
                </Link>
            </Menu.Menu>
        </Menu>
    );
}