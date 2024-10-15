'use client';

import {Switch} from "antd";
import {useState} from "react";

const SwitchComponent = () => {

    const [, setMarked] = useState(false);

    const onClick = () => {
        setMarked(prevState => !prevState);
    }
    return (
        <Switch onClick={onClick} checkedChildren={"Salamiiiiii vis vesaubrebi mome kalamii"}
                unCheckedChildren={"Carielia furclebi sheicvleba ver shegpirdebi"}/>
    );
};

export default SwitchComponent;
