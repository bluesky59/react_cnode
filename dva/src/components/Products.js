import React from 'react';
import PropTypes from 'prop-types';
import { Table, Popconfirm, Button } from 'antd';

const ProductList = ({ onDelete, onAsyncDelete, products }) => {
  const colums = [{
    title: '名称',
    dataIndex: 'name',
  },{
    title: '操作',
    render: (text, data) => {
      return (
        <div>
          <Popconfirm title="Delete?" onConfirm={() => {onDelete(data.key)}}>
            <Button style={{marginRight: '5px'}}>同步删除</Button>
          </Popconfirm>
          <Popconfirm title="Delete?" onConfirm={() => {onAsyncDelete(data.key)}}>
            <Button>异步删除</Button>
          </Popconfirm>
        </div>
      )
    }
  }];
  let len = products.length;
  return (
    <Table
      dataSource={products}
      columns={colums}
      pagination = {{
        current: 1,
        pageSize: len,
        total: len,
        onChange:((current)=>{
          console.log(current);
        })
      }}
    />
  )
};

ProductList.prototype = {
  onDelete: PropTypes.func.isRequired,
  onAsyncDelete: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
};

export default ProductList;