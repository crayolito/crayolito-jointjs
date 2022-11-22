/*! JointJS+ v3.6.1 - HTML5 Diagramming Framework - TRIAL VERSION

Copyright (c) 2022 client IO

 2022-11-21 


This Source Code Form is subject to the terms of the JointJS+ Trial License
, v. 2.0. If a copy of the JointJS+ License was not distributed with this
file, You can obtain one at http://jointjs.com/license/rappid_v2.txt
 or from the JointJS+ archive as was distributed by client IO. See the LICENSE file.*/


import { Component } from 'react';
import Diagram from './Diagram';

import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Diagram title="JointJS+"/>
            </div>
        );
    }
}

export default App;
