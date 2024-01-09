import React, { useContext } from 'react';
import 'bootstrap5-toggle/css/bootstrap5-toggle.css';
import { AppContext } from '../context';
import 'bootstrap5-toggle/js/bootstrap5-toggle.jquery';

const UiCheckedSlider = ({ completed, idx }) => {
    const { data, setData } = useContext(AppContext);

    const handleChange = () => {
        setData(prevData => {
            const updatedData = [...prevData]; // Create a copy of the data array
            updatedData[idx] = {
                ...updatedData[idx], // Keep other properties unchanged
                completed: !completed // Update the 'completed' property
            };
            return updatedData; // Return the updated array
        });
        console.log(data[idx]);
    };

    return (
        <>
            <div className="form-check form-switch p-0">
                    <input
                        checked={completed}
                        onChange={handleChange}
                        className="form-check-input ms-0"
                        type="checkbox"
                        role="switch"
                        id="switchCheckLabelTop"
                    />
            </div>
        </>
    );
};

export default UiCheckedSlider;
