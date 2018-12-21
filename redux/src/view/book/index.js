import React, { Component } from 'react';
import { Card } from 'antd';
import bookData from '../../mock/bookData';

class Book extends Component {
    render() {
      return (
        <div className={'main-container'}>
          {
            bookData.map((item, index) => {
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