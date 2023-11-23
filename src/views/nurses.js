import React, { useState } from 'react';
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './nurses.css'

const Nurses = (props) => {
  const [isFloatingWindowVisible, setFloatingWindowVisible] = useState(false);
  const [newUserInfo, setNewUserInfo] = useState({
    name: '',
    username: '',
    password: '',
  });

  const handleAddUserClick = () => {
    setFloatingWindowVisible(!isFloatingWindowVisible);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUserInfo({
      ...newUserInfo,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle the form submission, e.g., send the data to the server
    console.log('Submitted:', newUserInfo);
    // You may want to reset the form or close the floating window after submission
    setNewUserInfo({ name: '', username: '', password: '' });
    setFloatingWindowVisible(false);
  };

  const handleExitClick = () => {
    setFloatingWindowVisible(false);
  };

  return (
    <div className="nurses-container">
      <Helmet>
        <title>Nurses - Lampara</title>
        <meta property="og:title" content="Nurses - Lampara" />
      </Helmet>
      <div className="nurses-container1">
        <img
          alt="image"
          src="/LAMPARA/338316809_1456186771578578_5155093782169563773_n-200h.jpg"
          className="nurses-image"
        />
        <svg viewBox="0 0 1024 1024" className="nurses-icon">
          <path d="M512 598q108 0 225 47t117 123v86h-684v-86q0-76 117-123t225-47zM512 512q-70 0-120-50t-50-120 50-121 120-51 120 51 50 121-50 120-120 50z"></path>
        </svg>
        <h1 className="nurses-text">Nurses</h1>
        <h1 className="nurses-text01">Jabez Joshua</h1>
      </div>
      <div className="nurses-container2">
        <div className="nurses-container3">
          <h1 className="nurses-text02">Admin</h1>
          <svg viewBox="0 0 1024 1024" className="nurses-icon02">
            <path d="M1024 590.444l-512-397.426-512 397.428v-162.038l512-397.426 512 397.428zM896 576v384h-256v-256h-256v256h-256v-384l384-288z"></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="nurses-icon04">
            <path d="M917.806 229.076c-22.212-30.292-53.174-65.7-87.178-99.704s-69.412-64.964-99.704-87.178c-51.574-37.82-76.592-42.194-90.924-42.194h-496c-44.112 0-80 35.888-80 80v864c0 44.112 35.888 80 80 80h736c44.112 0 80-35.888 80-80v-624c0-14.332-4.372-39.35-42.194-90.924zM785.374 174.626c30.7 30.7 54.8 58.398 72.58 81.374h-153.954v-153.946c22.984 17.78 50.678 41.878 81.374 72.572zM896 944c0 8.672-7.328 16-16 16h-736c-8.672 0-16-7.328-16-16v-864c0-8.672 7.328-16 16-16 0 0 495.956-0.002 496 0v224c0 17.672 14.326 32 32 32h224v624z"></path>
            <path d="M736 832h-448c-17.672 0-32-14.326-32-32s14.328-32 32-32h448c17.674 0 32 14.326 32 32s-14.326 32-32 32z"></path>
            <path d="M736 704h-448c-17.672 0-32-14.326-32-32s14.328-32 32-32h448c17.674 0 32 14.326 32 32s-14.326 32-32 32z"></path>
            <path d="M736 576h-448c-17.672 0-32-14.326-32-32s14.328-32 32-32h448c17.674 0 32 14.326 32 32s-14.326 32-32 32z"></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="nurses-icon09">
            <path d="M512 598q108 0 225 47t117 123v86h-684v-86q0-76 117-123t225-47zM512 512q-70 0-120-50t-50-120 50-121 120-51 120 51 50 121-50 120-120 50z"></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="nurses-icon11">
            <path d="M981.333 512c0-129.579-52.565-246.997-137.472-331.861s-202.283-137.472-331.861-137.472-246.997 52.565-331.861 137.472-137.472 202.283-137.472 331.861 52.565 246.997 137.472 331.861 202.283 137.472 331.861 137.472 246.997-52.565 331.861-137.472 137.472-202.283 137.472-331.861zM896 512c0 106.069-42.923 201.984-112.469 271.531s-165.461 112.469-271.531 112.469-201.984-42.923-271.531-112.469-112.469-165.461-112.469-271.531 42.923-201.984 112.469-271.531 165.461-112.469 271.531-112.469 201.984 42.923 271.531 112.469 112.469 165.461 112.469 271.531zM469.333 256v256c0 16.597 9.472 31.019 23.595 38.144l170.667 85.333c21.077 10.539 46.72 2.005 57.259-19.072s2.005-46.72-19.072-57.259l-147.115-73.515v-229.632c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667z"></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="nurses-icon13">
            <path d="M512 662q62 0 106-44t44-106-44-106-106-44-106 44-44 106 44 106 106 44zM830 554l90 70q14 10 4 28l-86 148q-8 14-26 8l-106-42q-42 30-72 42l-16 112q-4 18-20 18h-172q-16 0-20-18l-16-112q-38-16-72-42l-106 42q-18 6-26-8l-86-148q-10-18 4-28l90-70q-2-14-2-42t2-42l-90-70q-14-10-4-28l86-148q8-14 26-8l106 42q42-30 72-42l16-112q4-18 20-18h172q16 0 20 18l16 112q38 16 72 42l106-42q18-6 26 8l86 148q10 18-4 28l-90 70q2 14 2 42t-2 42z"></path>
          </svg>
          <Link to="/dashboard" className="nurses-navlink">
            <img
              alt="image"
              src="/LAMPARA/logo1-200h.png"
              className="nurses-image1"
            />
          </Link>
          <Link to="/dashboard" className="nurses-navlink1">
            <h1 className="nurses-text03">LAMPARA</h1>
          </Link>
          <Link to="/dashboard" className="nurses-navlink2 button">
            Scheduler
          </Link>
          <Link to="/dashboard" className="nurses-navlink3 button">
            Dashboard
          </Link>
          <Link to="/messages" className="nurses-navlink4 button">
            Messages
          </Link>
          <button type="button" className="nurses-button button">
            Nurses
          </button>
          <Link to="/view-schedule" className="nurses-navlink5 button">
            Schedule
          </Link>
          <Link to="/account" className="nurses-navlink6 button">
            Account Settings
          </Link>
          <div className="nurses-container4">
            <span className="nurses-text04" onClick={handleAddUserClick}>
            Add User 
            </span>
            <span className="nurses-text05">Filter </span>
            <svg viewBox="0 0 804.5714285714286 1024" className="nurses-icon15">
              <path d="M801.714 168.571c5.714 13.714 2.857 29.714-8 40l-281.714 281.714v424c0 14.857-9.143 28-22.286 33.714-4.571 1.714-9.714 2.857-14.286 2.857-9.714 0-18.857-3.429-25.714-10.857l-146.286-146.286c-6.857-6.857-10.857-16-10.857-25.714v-277.714l-281.714-281.714c-10.857-10.286-13.714-26.286-8-40 5.714-13.143 18.857-22.286 33.714-22.286h731.429c14.857 0 28 9.143 33.714 22.286z"></path>
            </svg>
            <span className="nurses-text06">Delete</span>
            <span className="nurses-text07">Edit</span>
            <svg viewBox="0 0 1024 1024" className="nurses-icon17">
              <path d="M864 0c88.364 0 160 71.634 160 160 0 36.020-11.91 69.258-32 96l-64 64-224-224 64-64c26.742-20.090 59.978-32 96-32zM64 736l-64 288 288-64 592-592-224-224-592 592zM715.578 363.578l-448 448-55.156-55.156 448-448 55.156 55.156z"></path>
            </svg>
            <svg viewBox="0 0 1024 1024" className="nurses-icon19">
              <path d="M768 298.667v554.667c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-426.667c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165v-554.667zM725.333 213.333v-42.667c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504h-170.667c-35.328 0-67.413 14.379-90.496 37.504s-37.504 55.168-37.504 90.496v42.667h-170.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h42.667v554.667c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h426.667c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-554.667h42.667c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667zM384 213.333v-42.667c0-11.776 4.736-22.4 12.501-30.165s18.389-12.501 30.165-12.501h170.667c11.776 0 22.4 4.736 30.165 12.501s12.501 18.389 12.501 30.165v42.667z"></path>
            </svg>
            <input
              type="text"
              name="Password"
              required
              placeholder="   "
              className="nurses-textinput input"
            />
            <svg viewBox="0 0 1024 1024" className="nurses-icon21">
              <path d="M992.262 871.396l-242.552-206.294c-25.074-22.566-51.89-32.926-73.552-31.926 57.256-67.068 91.842-154.078 91.842-249.176 0-212.078-171.922-384-384-384-212.076 0-384 171.922-384 384s171.922 384 384 384c95.098 0 182.108-34.586 249.176-91.844-1 21.662 9.36 48.478 31.926 73.552l206.294 242.552c35.322 39.246 93.022 42.554 128.22 7.356s31.892-92.898-7.354-128.22zM384 640c-141.384 0-256-114.616-256-256s114.616-256 256-256 256 114.616 256 256-114.614 256-256 256z"></path>
            </svg>
            <svg viewBox="0 0 1024 1024" className="nurses-icon23">
              <path d="M981.333 512c0-129.579-52.565-246.997-137.472-331.861s-202.283-137.472-331.861-137.472-246.997 52.565-331.861 137.472-137.472 202.283-137.472 331.861 52.565 246.997 137.472 331.861 202.283 137.472 331.861 137.472 246.997-52.565 331.861-137.472 137.472-202.283 137.472-331.861zM896 512c0 106.069-42.923 201.984-112.469 271.531s-165.461 112.469-271.531 112.469-201.984-42.923-271.531-112.469-112.469-165.461-112.469-271.531 42.923-201.984 112.469-271.531 165.461-112.469 271.531-112.469 201.984 42.923 271.531 112.469 112.469 165.461 112.469 271.531zM341.333 554.667h128v128c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-128h128c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-128v-128c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v128h-128c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="nurses-container5">
        <div className="nurses-container6"></div>
        <span className="nurses-text08">Department</span>
        <span className="nurses-text09">Last Name</span>
        <span className="nurses-text10">First Name</span>
        <span className="nurses-text11">
          <span>
            Nurse
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span>ID</span>
        </span>
        <input
          type="text"
          name="Password"
          required
          placeholder="   "
          className="nurses-input input"
        />
        <input
          type="text"
          name="Password"
          required
          placeholder="   "
          className="nurses-input1 input"
        />
        <input type="checkbox" className="nurses-checkbox" />
        <input type="checkbox" className="nurses-checkbox1" />
        <span className="nurses-text14">Pasal</span>
        <span className="nurses-text15">Frichel Joan</span>
      </div>
      {isFloatingWindowVisible && (
        <div className="floating-window">
          {/* Exit button (X) in the top right corner */}
          <button className="exit-button" onClick={handleExitClick}>
            X
          </button>
          {/* Title of the floating window */}
          <h2 className="floating-window-title">Add User</h2>
          {/* Content of the floating window */}
          <form onSubmit={handleFormSubmit}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={newUserInfo.name}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Username:
              <input
                type="text"
                name="username"
                value={newUserInfo.username}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Default Password:
              <input
                type="password"
                name="password"
                value={newUserInfo.password}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Re-type Password:
              <input
                type="password"
                name="retypepassword"
                value={newUserInfo.password2}
                onChange={handleInputChange}
                required
              />
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Nurses
