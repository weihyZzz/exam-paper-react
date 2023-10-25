import React, { FC } from 'react'
type QuestionCardProps = {
  _id: string
  title: string
  isPublished: boolean
  isStar: boolean
  answerCount: number
  createAt: string
}
const QuestionCard: FC<QuestionCardProps> = props => {
  const { _id, title, isPublished, isStar, answerCount, createAt } = props
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
    </div>
  )
}
export default QuestionCard
