import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
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
    <div className='card-main'>
      <div className='card'>
        <div className='sub_name'>
          <p>{name}</p>
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
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
              </svg></button> */}
          </div>
        </div>

        <div style={{ width: 100, height: 100 }}>
          <CircularProgressbar
            value={percentage}
            text={`${Math.round((percentage + Number.EPSILON) * 100) / 100}%`}
            styles={buildStyles({
              // Rotation of path and trail, in number of turns (0-1)
              rotation: 0.25,

              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              strokeLinecap: 'round',

              // Text size
              textSize: '16px',

              // How long animation takes to go from one percentage to another, in seconds
              pathTransitionDuration: 1.5,

              // Can specify path transition in more detail, or remove it entirely
              // pathTransition: 'none',

              // Colors
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
