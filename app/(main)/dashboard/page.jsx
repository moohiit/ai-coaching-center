import React from 'react'
import FeatureAssistents from './_components/FeatureAssistents'
import History from './_components/History'
import Feedback from './_components/Feedback'

export default function Dashboard() {
  return (
    <div className=''>
      <FeatureAssistents />
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-20'>
        <History />
        <Feedback />
      </div>
    </div>
  )
}
