import React, { Component } from 'react';
import { Card, Avatar, List } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import TagType from '../../component/tag';
import axios from "../../utils/axios";

class Detail extends Component {
  constructor(props){
    super(props);
    const nowId = this.props.match.params.id;
    this.getBaseData(nowId);
  }
  getBaseData(id){
    this.props.dispatch((dispatch) => {
      dispatch({
        type:"DETAILS_UPDATE"
      });
      axios.get(`/topic/${id}`)
        .then((res)=>{
          dispatch({
            type: 'DETAILS_UPDATE_SUCCESS',
            data: res.data.data,
          })
        })
        .catch(error => {
          dispatch({
            type: 'DETAILS_UPDATE_ERROR',
            data: error,
          })
        })
    });
  }
  shouldComponentUpdate(nextProps){
    let nowId = this.props.match.params.id;
    let nextId = nextProps.match.params.id;
    if(nowId !== nextId){
      this.getBaseData(nextId);
      return false;
    }
    return true;
  }
  render() {
    const { loading, data } = this.props;
    const title = (<div>
      <h1>{data.title}</h1>
      <div style={{
        display:"flex",
        alignItems:"center"
      }}>
        <TagType  data ={data}/>
        <Avatar src={data.author.avatar_url} />
        <Link style={{
          margin:"0 5px"
        }} to={"/user/"+data.author.loginname} >{data.author.loginname}</Link>
        发表于:{data.create_at.split("T")[0]}
      </div>
    </div>);
    return (
      <div className={'main-container'}>
        <Card
          type="inner"
          title={title}
          key={data.id}
          loading={loading}
        >
          <div
            dangerouslySetInnerHTML={{
              __html: data.content
            }}
          >
          </div>
        </Card>
        <Card
          type="inner"
          title = {`共计${data.reply_count}条回复`}
        >
          <List
            itemLayout="horizontal"
            dataSource={data.replies}
            loading={loading}
            renderItem = {item=>(<List.Item
              actions={[
                item.ups.length > 0 ? '有'+item.ups.length +'人觉得很赞' : ''
              ]}
              key = {item.id}
            >
              <List.Item.Meta
                avatar={<Avatar src={item.author.avatar_url} />}
                title = {<div>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: item.content
                    }}
                  >
                  </div>
                </div>}
                description={(<p>
                  <Link to={"/user/"+item.author.loginname}>{
                    item.author.loginname
                  }</Link>
                  发表于:{item.create_at.split("T")[0]}
                </p>)}
              />
            </List.Item>)}
          />
        </Card>
      </div>
    );
  }
}

export default connect(state => (state.details))(Detail);

