import {Tabs} from 'antd';
import styles from './Tabs.module.scss';

const {TabPane} = Tabs;

const CustomTabs = () => {
    return (
        <div className={styles.wrapper}>
            <Tabs>
                <TabPane tab="Tab 1" key="1">
                    Content of Tab 1
                </TabPane>
                <TabPane tab="Tab 2" key="2">
                    Content of Tab 2
                </TabPane>
                <TabPane tab="Tab 3" key="3">
                    Content of Tab 3
                </TabPane>
                <TabPane tab="Tab 4" key="4">
                    Content of Tab 4
                </TabPane>
            </Tabs>
        </div>
    )
}

export default CustomTabs;
