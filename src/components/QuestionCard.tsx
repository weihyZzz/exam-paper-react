import React, { FC } from 'react'
type QuestionCardProps = {
  _id: string
  title: string
  isPublished: boolean
  isStar: boolean
  answerCount: number
  createAt: string
  deleteQuestion?: (_id: string) => void
  publishQuestion?: (_id: string) => void
}
const QuestionCard: FC<QuestionCardProps> = props => {
  const {
    _id,
    title,
    isPublished,
    isStar,
    answerCount,
    createAt,
    deleteQuestion,
    publishQuestion,
  } = props
  function del(_id: string) {
    console.log('delete', _id)
    deleteQuestion && deleteQuestion(_id)
  }
  function publish(_id: string) {
    publishQuestion && publishQuestion(_id)
  }
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
      <button>编辑问卷</button>
      &nbsp;
      <button onClick={() => del(_id)}>删除问卷</button>
      &nbsp;
      <button onClick={() => publish(_id)}>发布问卷</button>
    </div>
  )
}
export default QuestionCard
