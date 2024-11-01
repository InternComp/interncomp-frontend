import React, { useState } from "react";

const UserInfoForm = ({ formData, onFormDataChange }) => {
    // Handle input change and update the parent component's state
    const handleChange = (e) => {
        const { name, value } = e.target;

        // Update the parent component's state with the new form data
        onFormDataChange({ ...formData, [name]: value });
    };

    return (
        <div>
            <form className="grid grid-rows-4 pt-10 gap-y-5 text-black">
                <div>
                    <label>Username: </label>
                    <input
                        type="text"
                        name="username"
                        onChange={handleChange}
                        className="ml-10"
                        value={formData.username}
                    />
                </div>

                <div>
                    <label>Program of Study: </label>
                    <input
                        type="text"
                        name="programOfStudy"
                        onChange={handleChange}
                        className="ml-10"
                        value={formData.programOfStudy}
                    />
                </div>

                <div>
                    <label>Location: </label>
                    <input
                        type="text"
                        name="location"
                        onChange={handleChange}
                        className="ml-10"
                        value={formData.location}
                    />
                </div>

                <div>
                    <label>Institution: </label>
                    <input
                        type="text"
                        name="institution"
                        onChange={handleChange}
                        className="ml-10"
                        value={formData.institution}
                    />
                </div>
            </form>
        </div>
    );
};

export default UserInfoForm;
