import React, { useContext, useEffect, useState } from 'react';
import UiCheckedSlider from './ui-checked-slider';
import { AppContext } from '../context';

const ListItem = ({ task_name, complete, idx, id, important }) => {
    const [value, setValue] = useState(false);
    const { setData, data } = useContext(AppContext);

    const handlePassImportant = () => {
        setData(prevData => {
            const updatedItem = {
                ...prevData[idx],
                isImportant: !prevData[idx]?.isImportant // Toggle isImportant or create if undefined
            };

            const updatedData = [
                ...prevData.slice(0, idx),
                updatedItem,
                ...prevData.slice(idx + 1)
            ];

            return updatedData;
        });
        console.log(data[idx]);
    };

    useEffect(() => {
        setValue(complete);
    }, [complete]);

    const handleUpdate = () => {
        const updateValue = prompt('Update task name', task_name);
        if (updateValue !== null) {
            setData(prevData => {
                const updatedData = [...prevData];
                updatedData[idx] = {
                    ...updatedData[idx],
                    title: updateValue // Update the task_name property
                };
                return updatedData;
            });
        }
    };
    const handleRemove = () => {
        if (confirm('haqiqatdan ham o\'chiraszmi')) {
            setData(prevData => {
                const updatedData = [...prevData];
                updatedData.splice(idx, 1);
                return updatedData;
            });
        }
    }
    return (
        <div className="item_">
            <h4 className='d-flex align-items-center'>{id} ::</h4>
            <UiCheckedSlider idx={idx} completed={complete} />
            <p className='task_name'>{task_name}</p>
            <div className="tools d-flex flex-row gap-2">
                <div onClick={handleRemove} className={`btn delete-btn btn-danger`}>
                    <i className="fa fa-trash"></i>
                </div>
                <div onClick={handleUpdate} className={`btn edit-btn btn-primary`}>
                    <i className="fa fa-edit"></i>
                </div>
                {
                    important ?
                        <div
                            onClick={handlePassImportant}
                            className={`btn important-btn btn-outline-warning text-warning ${data[idx]?.isImportant ? 'import' : ''
                                }`}
                        >
                            <i className="fa fa-star"></i>
                        </div>
                        :
                        ""
                }
            </div>
        </div>
    );
};

export default ListItem;
