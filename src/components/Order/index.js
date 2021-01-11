import React, { Component, Fragment, useState } from 'react'
import Table from '../Table'
import './index.css'
import { Select } from 'antd';
import { DatePicker,Space } from 'antd';

const { Option } = Select;
const { RangePicker } = DatePicker;



export default class Order extends Component {

    render() {
        return (
            <Fragment>
                <h1>订单列表</h1>
                <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Search to Select"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                    filterSort={(optionA, optionB) =>
                        optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                    }
                >
                    <Option value="1">全部订单状态</Option>
                    <Option value="2">进行中</Option>
                    <Option value="3">已完成</Option>
                    <Option value="4">已取消</Option>
                </Select>,
                <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Search to Select"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                    filterSort={(optionA, optionB) =>
                        optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                    }
                >
                    <Option value="1">全部发货状态</Option>
                    <Option value="2">已发货</Option>
                    <Option value="3">未发货</Option>
                </Select>,
                <Space direction="vertical" size={12}>
                    <RangePicker renderExtraFooter={() => 'extra footer'} />
                </Space>,
                <Table />
            </Fragment>

        )

    }
}
