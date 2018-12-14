import React, { Component } from 'react';
import { Card, Avatar, List } from 'antd';
import { Link } from 'react-router-dom';
import contentData from '../../mock/contentData';
import TagType from '../../component/tag';

class Detail extends Component {
    render() {
      const pageData = contentData.data;
      const title = (<div>
        <h1>{pageData.title}</h1>
        <div style={{
          display:"flex",
          alignItems:"center"
        }}>
          <TagType  data ={pageData}/>
          <Avatar src={pageData.author.avatar_url} />
          <Link style={{
            margin:"0 5px"
          }} to={"/user/"+pageData.author.loginname} >{pageData.author.loginname}</Link>
          发表于:{pageData.create_at.split("T")[0]}
        </div>
      </div>);
      return (
        <div className={'main-container'}>
          <Card
            type="inner"
            title={title}
            key={pageData.id}
          >
            <div
              dangerouslySetInnerHTML={{
                __html: pageData.content
              }}
            >
            </div>
          </Card>
          <Card
            type="inner"
            title = {`共计${pageData.reply_count}条回复`}
          >
            <List
              itemLayout="horizontal"
              dataSource={pageData.replies}
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

export default Detail;