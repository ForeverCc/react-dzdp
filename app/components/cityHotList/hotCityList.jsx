import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin';

import './hotCityList.less';

class HotCityList extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="hot-city">
                <h3>热门城市</h3>
                <ul className="clearfix">
                    <li>
                        <span onClick={this.clickHandle.bind(this, '北京')}>北京</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, '上海')}>上海</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, '杭州')}>杭州</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, '广州')}>广州</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, '苏州')}>苏州</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, '深圳')}>深圳</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, '南京')}>南京</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, '天津')}>天津</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, '重庆')}>重庆</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, '厦门')}>厦门</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, '武汉')}>武汉</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, '西安')}>西安</span>
                    </li>
                </ul>
            </div>
        )
    }
    clickHandle(newCity) {
        //console.log(cityName);
        var cityChangeFn = this.props.cityChangeFn;
        cityChangeFn(newCity)
    }
}

export default HotCityList
