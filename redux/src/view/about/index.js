import React, { Component } from 'react';
import { Card } from 'antd';
import aboutData from '../../mock/aboutData';

class Book extends Component {
  render() {
    return (
      <div className={'main-container'}>
        {
          aboutData.map((item, index) => {
            return (
              <Card
                type="inner"
                title={item.title}
                key={index}
              >
                <div
                  dangerouslySetInnerHTML={{
                    __html: item.content
                  }}
                >
                </div>
              </Card>
            )
          })
        }
      </div>
    )
  }
}

export default Book;