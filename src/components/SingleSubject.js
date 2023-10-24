import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function SingleSubject(props) {
  const { data, i, changeData } = props;
  const [name, [attended, total]] = Object.entries(data)[0];
  const percentage = (attended / total) * 100;

  const update = async (isAttended) => {
    let attendenceData = JSON.parse(localStorage.getItem('attendenceData'));
    const subjectData = attendenceData.subject[i][name];
    
    if (isAttended) {
      subjectData[0]++; // Increment attended
    }
    
    subjectData[1]++; // Increment total
    attendenceData.subject[i][name] = subjectData;
    
    localStorage.setItem('attendenceData', JSON.stringify(attendenceData));
    changeData(attendenceData);
  };

  const del = async () => {
    const isConfirmed = window.confirm('Do you really want to delete the subject?');
    if (isConfirmed) {
      let attendenceData = JSON.parse(localStorage.getItem('attendenceData'));
      attendenceData.subject.splice(i, 1);
      localStorage.setItem('attendenceData', JSON.stringify(attendenceData));
      changeData(attendenceData);
    }
  };

  return (
    <div className="subject-card">
      <div className="card-details">
        <p className="subject-name">{name}</p>
        <p className="attendance-count">{`${attended}/${total}`}</p>
        <div className="action-buttons">
          <button onClick={del} className="delete-button">
            Delete
          </button>
          <button onClick={() => update(true)} className="attendance-button present-button">
            Present
          </button>
          <button onClick={() => update(false)} className="attendance-button absent-button">
            Absent
          </button>
        </div>
      </div>
      <div className="circular-progress">
        <CircularProgressbar value={percentage} text={`${percentage.toFixed(2)}%`} />
      </div>
    </div>
  );
}
