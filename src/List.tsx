import React, { FC } from 'react'
import './App1.css'
const List: FC = () => {
  const qusetionList = [
    {
      _id: 'q1', //和mongoDb中的id一致
      title: '问卷1',
      isPublished: false,
      isStar: false,
      answerCount: 5,
      createAt: '2020-01-01',
    },
    {
      _id: 'q2',
      title: '问卷2',
      isPublished: true,
      isStar: false,
      answerCount: 5,
      createAt: '2020-01-01',
    },
    {
      _id: 'q3',
      title: '问卷3',
      isPublished: true,
      isStar: false,
      answerCount: 5,
      createAt: '2020-01-01',
    },
    {
      _id: 'q4',
      title: '问卷4',
      isPublished: false,
      isStar: false,
      answerCount: 5,
      createAt: '2020-01-01',
    },
    {
      _id: 'q5',
      title: '问卷5',
      isPublished: true,
      isStar: false,
      answerCount: 5,
      createAt: '2020-01-01',
    },
  ]
  const edit = () => {
    console.log('edit')
  }
  return (
    <div>
      <h1>问卷列表</h1>
      <div>
        {qusetionList.map(question => {
          const { _id, title, isPublished } = question
          return (
            <div key={_id} className="list-item">
              <strong>{title}</strong>
              &nbsp;
              {isPublished ? (
                <span style={{ color: 'green' }}>已发布</span>
              ) : (
                <span style={{ color: 'red' }}>未发布</span>
              )}
              &nbsp;
              <button
                onClick={() => {
                  edit()
                }}
              >
                编辑问卷
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default List
