import React, { FC, useState } from 'react'
import './App1.css'
import QuestionCard from './components/QuestionCard'
const List: FC = () => {
  const quesList = [
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
  const [questionList, setQuestionList] = useState(quesList)
  // 新增问卷
  function add() {
    const r = Math.random().toString().slice(-2)
    setQuestionList(
      questionList.concat({
        _id: 'q' + r,
        title: '问卷' + r,
        isPublished: false,
        isStar: false,
        answerCount: 5,
        createAt: '2020-01-01',
      })
    )
  }
  // 删除问卷
  function deleteQuestion(_id: string) {
    setQuestionList(
      questionList.filter(q => {
        if (q._id != _id) return true
        // 过滤掉id相等的那一项
        else return false
      })
    )
  }
  // 发布问卷(修改问卷的isPublished)
  function publishQuestion(_id: string) {
    setQuestionList(
      questionList.map(q => {
        if (q._id != _id) return q
        else
          return {
            ...q,
            isPublished: true,
          }
      })
    )
  }
  return (
    <div>
      <h1>问卷列表</h1>
      <div>
        {questionList.map(item => {
          const { _id } = item
          return (
            <QuestionCard
              key={_id}
              {...item}
              deleteQuestion={deleteQuestion}
              publishQuestion={publishQuestion}
            />
          )
        })}
      </div>
      <button onClick={add}>新增问卷</button>
    </div>
  )
}

export default List
