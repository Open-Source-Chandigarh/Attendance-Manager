import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function SingleSubject(props) {
  const { data, i, changeData } = props;
  const { subjectName, attendance, teacher } = data;
  const [attended, total] = attendance;
  const percentage = (attended / total) * 100;

  const update = async (isAttended) => {
    let attendanceData = JSON.parse(localStorage.getItem('attendenceData'));
    const subjectData = attendanceData.subject[i];

    if (isAttended) {
      subjectData.attendance[0]++; // Increment attended
    }

    subjectData.attendance[1]++; // Increment total
    attendanceData.subject[i] = subjectData;

    localStorage.setItem('attendenceData', JSON.stringify(attendanceData));
    changeData(attendanceData);
  };

  const del = async () => {
    const isConfirmed = window.confirm('Do you really want to delete the subject?');
    if (isConfirmed) {
      let attendanceData = JSON.parse(localStorage.getItem('attendenceData'));
      attendanceData.subject.splice(i, 1);
      localStorage.setItem('attendenceData', JSON.stringify(attendanceData));
      changeData(attendanceData);
    }
  };

  return (
    <div className='card-main'>
      <div className='card'>
        <div className='sub_name'>
          <p>Subject Name: {subjectName}</p>
          <p>Teacher Name: {teacher}</p>
        </div>
        <div className='delete_edit'>
          <p>{`${attended}/${total}`}</p>
          <div className='bttn'>
            <button onClick={del}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
              </svg>
            </button>
            {/* <button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l 2.414-.805a.5.5 0 0 0 .196-.12l 6.813-6.814z" />
                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
              </svg></button> */}
          </div>
        </div>

        <div style={{ width: 100, height: 100 }}>
          <CircularProgressbar
            value={percentage}
            text={`${Math.round((percentage + Number.EPSILON) * 100) / 100}%`}
            styles={buildStyles({
              rotation: 0.25,
              strokeLinecap: 'round',
              textSize: '16px',
              pathTransitionDuration: 1.5,
              pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
              textColor: '#f88',
              trailColor: '#d6d6d6',
              backgroundColor: '#3e98c7',
            })}
          />
        </div>
      </div>
      <button className='present' onClick={() => { update(true) }}>Present</button>
      <button className='absent' onClick={() => { update(false) }}>Absent</button>
    </div>
  );
}
