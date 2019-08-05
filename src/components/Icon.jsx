import React from 'react';

export default React.memo(function Icon({ name, size = '2rem', color = 'white' }) {
  switch (name) {
    case 'plus':
      return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 45 45">
        <path fill={color} fillRule="evenodd" d="M25.4 7h-5.8v12.6H7v5.8h12.6V38h5.8V25.4H38v-5.8H25.4V7z" clipRule="evenodd" />
      </svg>

    case 'trash-can':
      return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 35 35">
        <path fill={color} d="M5.8 31.1c0 2.1 1.8 3.9 4 3.9h15.5c2.1 0 3.9-1.8 3.9-3.9V7.8H5.8V31zM31.1 2h-6.8l-2-1.9h-9.7l-2 2H4v3.8H31V2z" />
      </svg>

    case 'download':
      return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
    </svg>

    default:
      return <p>Unknown icon name: <mark>{name}</mark></p>
  };
});