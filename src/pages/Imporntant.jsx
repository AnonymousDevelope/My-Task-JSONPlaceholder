import React, { useContext } from 'react'
import { ListItem } from '../components'
import { AppContext } from '../context'
const Imporntant = () => {
  const { data, setData } = useContext(AppContext)
  return (
    <>
      <div className="important">  
        <div className="task-list">
          {
            data && data.filter((item) => item.isImportant).map((item, idx) => {
              return (
                <ListItem complete={item.completed} key={idx} task_name={item.title} id={item.id} />
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Imporntant