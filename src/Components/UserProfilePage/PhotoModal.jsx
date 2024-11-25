import React, { useState } from "react";
import UserIcon from "../../assets/placeholderUser.png";

const PhotoModal = ({ isOpen, currentPhoto, onClose, onRemove, onUpload }) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedFile(file);
            setPreviewUrl(URL.createObjectURL(file)); // Create a preview URL for the selected file
        }
    };

    const handleSave = () => {
        if (selectedFile) {
            onUpload(selectedFile); // Call the upload function with the selected file
        }
        onClose(); // Close the modal
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white rounded-lg p-5 shadow-lg w-1/3">
                <h2 className="text-lg font-bold mb-3">Update Profile Photo</h2>
                <div className="flex flex-col items-center">
                    {/* Show the preview URL if available, otherwise fallback to the current photo or placeholder */}
                    <img
                        src={previewUrl || currentPhoto || UserIcon}
                        alt="Profile Preview"
                        className="rounded-full w-[120px] h-[120px] object-cover mb-5"
                    />
                    <div className="space-x-4 flex">
                        <button
                            onClick={onRemove}
                            className="w-full rounded-xl px-4 py-2 bg-red-500 text-white hover:bg-red-600"
                        >
                            Remove Photo
                        </button>
                        <label
                            htmlFor="file-upload"
                            className="w-full px-4 py-2 bg-blue-500 text-white text-center rounded-xl cursor-pointer hover:bg-blue-600"
                        >
                            Upload New Photo
                        </label>
                        <input
                            type="file"
                            id="file-upload"
                            className="hidden"
                            accept="image/*"
                            onChange={handleFileChange}
                        />
                    </div>
                </div>
                <div className="flex justify-end mt-5 space-x-3">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSave}
                        disabled={!selectedFile}
                        className={`px-4 py-2 rounded ${
                            selectedFile
                                ? "bg-green-500 text-white hover:bg-green-600"
                                : "bg-gray-200 text-gray-500 cursor-not-allowed"
                        }`}
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PhotoModal;
