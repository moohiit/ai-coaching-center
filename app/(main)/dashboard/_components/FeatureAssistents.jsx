'use client'
import React from 'react'
import { useUser } from '@stackframe/stack'
import { Button } from '@/components/ui/button'
import { ExpertsList } from '@/services/Options'
import Image from 'next/image'
import { BlurFade } from '@/components/magicui/blur-fade'
function FeatureAssistents() {
  const user = useUser()
  return (
    <div>
      <div className='flex justify-between items-center'>
        <div>
          <h2 className='font-medium text-gray-500'>My Workspace</h2>
          <h2 className='text-3xl font-bold'>Welcome back, {user.displayName}</h2>
        </div>
        <Button>Profile</Button>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-10 mt-10 cursor-pointer'>
        {ExpertsList.map((item, index) => {
          return (
            <BlurFade delay={0.25 + index * 0.25} inView>
              <div key={index} className='p-3 bg-secondary rounded-3xl flex flex-col items-center justify-center'>
                <Image
                  key={index}
                  src={item.icon}
                  alt={item.name}
                  width={150}
                  height={150}
                  className='h-[70px] w-[70px] hover:rotate-12 cursor-pointer'
                />
                <h2 className='mt-2'>{item.name}</h2>
              </div>
            </BlurFade>
          )
        })}
      </div>
    </div>
  )
}

export default FeatureAssistents