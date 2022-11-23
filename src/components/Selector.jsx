import React from 'react'

export default function Selector() {
  return (
    <div>
      <button className=" inline-flex px-2  text-white bg-sky-500 hover:bg-sky-700 rounded group">
       
        <span className="pl-4 pr-5 py-2.5">Upload Button</span>
        <input
        className="cursor-pointer absolute block py-2 px-4 w-full opacity-0 pin-r pin-t"
        type="file"
        name="documents[]"
        accept="image/*"
      />
      </button>

    </div>
  )
}
