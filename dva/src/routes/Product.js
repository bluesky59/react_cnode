import React from 'react';
import { Button, Input } from 'antd';
import { connect } from 'dva';
import ProductList from '../components/Products';

const Products = ({ dispatch, products }) => {
  const handleDelete = (key) => {
    dispatch({
      type: 'products/delete',
      payload: key,
    })
  }
  const handleAsyncDelete = (key) => {
    dispatch({
      type: 'products/asyncDelete',
      payload: key,
      callback: (res) => {
        if (res) {
          console.log(res);  // 请求完成后返回的结果
        }
      }
    })
  }
  const dataAdd = () => {
    const inputObj = document.getElementById('myInput');
    const inputName = inputObj.value;
    dispatch({
      type: 'products/add',
      payload: inputName
    })
    inputObj.value = '';
  }
  return (
    <div>
      <h2>List of Products</h2>
      <Input
        placeholder="请输入名称"
        id={'myInput'}
        style={{
          width: '200px',
          margin: '10px',
        }}
      />
      <Button type="primary" onClick={() => {dataAdd()}}>新增</Button>
      <ProductList
        onDelete={handleDelete}
        onAsyncDelete={handleAsyncDelete}
        products={products}
      />
    </div>
  )
};

export default connect(({ products }) => ({
  products,
}))(Products);