import React from 'react'
import Page1 from './components/page1/page1'
import Page2 from './components/page2/page2'

const App = () => {

  const users = [
    {
      image:'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias deleniti expedita facilis cum enim ipsam quos possimus in error nihil.',
      tag:'Satisfied',
      color:'red'
    },
    {
      image:'https://images.unsplash.com/photo-1543132220-3ec99c6094dc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias deleniti expedita facilis cum enim ipsam quos possimus in error nihil.',
      tag:'Underserved',
      color:'blue'
    },
    {
      image:'https://plus.unsplash.com/premium_photo-1661515449711-ace459054f78?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias deleniti expedita facilis cum enim ipsam quos possimus in error nihil.',
      tag:'Underbanked',
      color:'emerald'
    },
    {
      image:'https://images.unsplash.com/photo-1718391963402-e2011890093f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias deleniti expedita facilis cum enim ipsam quos possimus in error nihil.',
      tag:'Underbanked',
      color:'red'
    },
  ]

  return (
    <div className=''>
      <Page1 users={users} />
      <Page2 className='bg' />
    </div>
  )
}

export default App
