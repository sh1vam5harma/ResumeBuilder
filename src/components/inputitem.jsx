import React from 'react';

const InputItem = ({
    label,
    placeholder = '',
    name,
    onChange,
    value = '', // ✅ Ensures React tracks the input state
    type = 'text',
    isTextArea = false,
    className = ''
}) => {
    return (
        <div className={`row ${className}`}>
            <div className="input">
                {!isTextArea ? (
                    <input
                        value={value} // ✅ Controlled component fix
                        onChange={onChange}
                        placeholder={placeholder}
                        name={name}
                        type={type}
                    />
                ) : (
                    <textarea
                        value={value} // ✅ Controlled textarea fix
                        onChange={onChange}
                        placeholder={placeholder}
                        name={name}
                    ></textarea>
                )}
                <label>{label}</label>
            </div>
        </div>
    );
};

export default InputItem;
