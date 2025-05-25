import React from 'react';


const InputField = ({ name, context, abstract, value, onChange }) => {
  return (
    <div className='relative'>
      <input
        type={name === 'password' ? 'password' : 'text'}
        id={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className='block px-2.5 pb-2.5 pt-4 w-full text-sm text-color-text bg-transparent rounded-lg border-1 border-input-border appearance-none focus:outline-none focus:ring-0 focus:border-input-border peer'
        placeholder=' '
      />
      <label
        htmlFor={name}
        className='absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-background px-2 peer-focus:px-2 peer-focus:text-input-label peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1'
      >
        {context} {abstract && <span className='text-[#DD4A3D]'>*</span>}
      </label>
    </div>
  );
};

export default InputField;
