import React, { useContext, useEffect, useState } from 'react';
import { ListItem, PaginatedItems } from '../components';
import { getPost, getPosts } from '../service';
import { AppContext } from '../context';

const Tasks = () => {
  const { setData, data, loading, setLoading } = useContext(AppContext);
  const [value, setValue] = useState('');
  const [page, setPage] = useState(1);
  useEffect(() => {
    setLoading(true); // Set loading to true initially
    data.length==0 ? getPosts()
      .then(items => {
        setData(items);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false); // Set loading to false if there's an error
      }) : setLoading(false);
      setPage(data.length==0 ? 1 : Math.ceil(data.length/10));
      console.log(page);
  }, [value,setData]);

  const handleAdd = () => {
    setData(prevData => [
      ...prevData,
      {
        id: prevData.length + 1,
        title: value,
        completed: false,
      },
    ]);
    setValue(''); // Clear input value after adding task
  };

  const handleChange = event => {
    setValue(event.target.value);
  };

  // Display data after loading has finished
  if (loading) {
    return <div>Loading...</div>;
  }
  // Calculate itemsPerPage ensuring it doesn't exceed the data length

  return (
    <>
      <div className="tasks">
        <div className="row">
          <div className="col-md-12 col-sm-6">
            <div className="input-container">
              <input type="text" name="" onChange={handleChange} placeholder='Add new task' className='' value={value} />
              <button className="btn" disabled={!value} onClick={handleAdd}>Add</button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-sm-6">
            <div className="task-list">
              {data.slice(0, 10).map((item, index) => (
                <ListItem important={true} id={item.id} complete={item.completed} idx={index} key={item.id} task_name={item.title} />
              ))}
            </div>
          </div>
        </div>
        <div className="row">
          <PaginatedItems itemsPerPage={page} />
        </div>
      </div>
    </>
  );
};

export default Tasks;
