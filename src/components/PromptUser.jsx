import React from 'react';
import { useNavigate } from 'react-router-dom';
import InputItem from './inputitem';  // Ensure correct import (case-sensitive)
import { HiArrowRight } from 'react-icons/hi';
import { AiOutlineMail } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';
import { GiAges } from 'react-icons/gi';
import { FaBirthdayCake } from 'react-icons/fa';
import { MdOutlineSchool } from 'react-icons/md';
import { CgWebsite } from 'react-icons/cg';
import 'animate.css';

const PromptUser = ({ handleChange, userobject }) => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        alert(`WINDOWS DIMENSION: ${window.innerWidth}, ${window.innerHeight}`);
        navigate('/resume');
    };

    return (
        <div className="prompt-container">
            <div className="inputs">
                <InputItem
                    className="first-name"
                    name="firstName"
                    label="First Name"
                    placeholder="Enter your first name"
                    value={userobject.firstName || ''}
                    onChange={handleChange}
                />

                <InputItem
                    className="last-name"
                    name="lastName"
                    label="Last Name"
                    placeholder="Enter your last name"
                    value={userobject.lastName || ''}
                    onChange={handleChange}
                />

                <InputItem
                    className="email"
                    name="email"
                    label={<AiOutlineMail />}
                    placeholder="Enter your email"
                    value={userobject.email || ''}
                    onChange={handleChange}
                />

                <InputItem
                    className="phone"
                    name="phoneNumber"
                    label={<BsTelephone />}
                    placeholder="Enter your phone number"
                    value={userobject.phoneNumber || ''}
                    onChange={handleChange}
                />

                <InputItem
                    className="website"
                    name="website"
                    label={<CgWebsite />}
                    placeholder="Enter your website"
                    value={userobject.website || ''}
                    onChange={handleChange}
                />

                <InputItem
                    className="birth-date"
                    type="date"
                    name="DOB"
                    label={<FaBirthdayCake />}
                    value={userobject.DOB || ''}
                    onChange={handleChange}
                />

                <InputItem
                    className="age"
                    type="number"
                    name="age"
                    label={<GiAges />}
                    placeholder="Enter your age"
                    value={userobject.age || ''}
                    onChange={handleChange}
                />

                <InputItem
                    className="skills"
                    name="skills"
                    label="Skill"
                    placeholder="List one relevant skill"
                    value={userobject.skills || ''}
                    onChange={handleChange}
                />

                <InputItem
                    className="experience"
                    name="experience"
                    label={<MdOutlineSchool />}
                    placeholder="Enter your experience"
                    value={userobject.experience || ''}
                    onChange={handleChange}
                />

                <InputItem
                    className="graduationYear"
                    name="graduationYear"
                    label="Graduation Year"
                    placeholder="Enter your graduation year"
                    value={userobject.graduationYear || ''}
                    onChange={handleChange}
                />

                <InputItem
                    className="accomplishments"
                    name="accomplishment"
                    label="Accomplishment"
                    placeholder="Enter your accomplishments"
                    value={userobject.accomplishment || ''}
                    onChange={handleChange}
                />

                <InputItem
                    className="university"
                    name="university"
                    label="University"
                    placeholder="Enter your university"
                    value={userobject.university || ''}
                    onChange={handleChange}
                />

                <InputItem
                    className="profile"
                    name="profile"
                    label="Profile"
                    placeholder="Write about yourself"
                    value={userobject.profile || ''}
                    onChange={handleChange}
                />

                {/* Button to generate resume */}
                <button className="generate-button" onClick={handleButtonClick}>
                    Generate Resume <HiArrowRight />
                </button>
            </div>
        </div>
    );
}

export default PromptUser;
