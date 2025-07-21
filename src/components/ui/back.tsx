import React from 'react';
import { useNavigate } from 'react-router-dom';

interface BackButtonProps {
  label?: string;
  className?: string;
}

const BackButton: React.FC<BackButtonProps> = ({ label = 'Back', className = '' }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className={`flex items-center gap-2 text-sm text-gray-700 hover:text-black transition ${className}`}
    >
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24">
            <path fill="#000" d="M11.67 3.87L9.9 2.1L0 12l9.9 9.9l1.77-1.77L3.54 12z"/>
        </svg>
        {/* {label} */}
    </button>
  );
};

export default BackButton;
