import React from 'react'
import CommentsList from './CommentsList'

const commentsData = [
    {
        name: 'sumesh',
        text: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        replies: [
            {
                name: 'anil',
                text: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
                replies: []
            },
            {
                name: 'krishna',
                text: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
                replies: [
                    {
                        name: 'meena',
                        text: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
                        replies: []
                    },
                ]
            },
        ]
    },
    {
        name: 'ravi',
        text: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        replies: []
    },
    {
        name: 'mahesh',
        text: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        replies: [
            {
                name: 'danny',
                text: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
                replies: []
            },
        ]
    },
    {
        name: 'rakesh',
        text: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        replies: []
    },

]

const CommentsContainer = () => {
  return (
    <div className='my-8'>
        <h2 className='text-2xl font-bold'>Comments</h2>
        <CommentsList comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer