import React from 'react';
import { useNavigate } from 'react-router-dom';
import InputItem from './inputitem';  // Make sure the file and import are correct
import { HiArrowRight } from 'react-icons/hi';
import { AiOutlineMail } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';
import { GiAges } from 'react-icons/gi';
import { FaBirthdayCake } from 'react-icons/fa';
import { MdOutlineSchool } from 'react-icons/md';
import { CgWebsite } from 'react-icons/cg';
import 'animate.css';

const PromptUser = ({ handleChange, imageSource, userobject }) => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        alert(`WINDOWS DIMENSION: ${window.innerWidth}, ${window.innerHeight}`);
        navigate('/resume');
    };

    return (
        <div className="prompt-container">
            <div className="inputs">
                <inputitem className="first-name" onChange={handleChange} label="First Name" name="firstName" placeholder="Enter your first name" />
                <inputitem className="last-name" onChange={handleChange} label="Last Name" name="lastName" placeholder="Enter your last name" />
                <inputitem className="email" onChange={handleChange} label={<AiOutlineMail />} name="email" placeholder="Enter your email" />
                <inputitem className="phone" onChange={handleChange} label={<BsTelephone />} name="phoneNumber" placeholder="Enter your phone number" />
                <inputitem className="website" onChange={handleChange} label={<CgWebsite />} name="website" placeholder="Enter your website" />
                <inputitem className="birth-date" onChange={handleChange} label={<FaBirthdayCake />} type="date" name="DOB" />
                <inputitem className="age" onChange={handleChange} label={<GiAges />} type="number" name="age" placeholder="Enter your age" />
                <inputitem className="skills" onChange={handleChange} label="Skill" name="skills" placeholder="List one relevant skill" />
                <inputitem className="experience" onChange={handleChange} label={<MdOutlineSchool />} name="experience" placeholder="Enter your experience" />
                <inputitem className="graduationYear" onChange={handleChange} label="Graduation Year" name="graduationYear" placeholder="Enter your graduation year" />
                <inputitem className="accomplishments" onChange={handleChange} label="Accomplishment" name="accomplishment" placeholder="Enter your accomplishments" />
                <inputitem className="university" onChange={handleChange} label="University" name="university" placeholder="Enter your university" />
                <inputitem className="profile" onChange={handleChange} label="Profile" name="profile" placeholder="Write about yourself" />

                {/* Button to generate resume */}
                <button className="generate-button" onClick={handleButtonClick}>
                    Generate Resume <HiArrowRight />
                </button>
            </div>
        </div>
    );
}

export default PromptUser;
