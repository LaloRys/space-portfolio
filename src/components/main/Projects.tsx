import React from 'react'
import ProjectCard from '../sub/ProjectCard'

function Projects() {
  return (
    <div id='projects' className='flex flex-col items-center justify-center py-20'>
      <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>My Projects</h1>
      <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10'>
        <ProjectCard
          src='/NextWebsite.png'
          title='Next Website'
          description='A Next.js website with a custom 404 page'
        />
        <ProjectCard
          src='/CardImage.png'
          title='Card Image'
          description='Voluptate dolor labore commodo anim culpa laboris amet.'
        />
        <ProjectCard
          src='/SpaceWebsite.png'
          title='Space Website'
          description='A website built with React.js and Tailwind CSS'
        />
      </div>
    </div>
  )
}

export default Projects