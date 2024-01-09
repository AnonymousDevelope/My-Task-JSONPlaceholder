import React, { useContext } from 'react'
import { AppContext } from '../context'
import { ListItem } from '../components';
const Complete = () => {
  const {data} = useContext(AppContext);
  return (
    <div className="complete">
      <div className="task-list">
        {
          data.filter((item) => item.completed).map((item, idx) => {
            return (
              <ListItem complete={item.completed} key={idx} task_name={item.title} id={item.id} important={false} />
            )
          })
        }
      </div>
    </div>
  )
}

export default Complete