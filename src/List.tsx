import React, { FC } from 'react'
import './App1.css'
import QuestionCard from './components/QuestionCard'
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
  ]

  return (
    <div>
      <h1>问卷列表</h1>
      <div>
        {qusetionList.map(item => {
          const { _id } = item
          return <QuestionCard key={_id} {...item} />
        })}
      </div>
    </div>
  )
}

export default List
