import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <h1>Dự án chat nhóm do Hoàng Hà <br/>  sinh viên lớp reactjs2008e phát triển<span role="img" aria-label="emoji">💬</span></h1>
      <h2>Các công nghệ đã dùng Reactjs, Express, Node and Socket.IO</h2>
    </div>
    {
      users
        ? (
          <div>
            <h1>Danh sách người tham gia:</h1>
            <div className="activeContainer">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    {name}
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;