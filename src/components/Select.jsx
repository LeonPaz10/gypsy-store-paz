import React from 'react'

const Select = ({options = [], onSelect}) => {

    const handleSelect = (e) =>{
        onSelect(e.target.value)
    }
  return (
    <select onChange={handleSelect}>

        {options.map((el) => <options value={el.value}>{el.text}</options>)}

    </select>
  )
}

export default Select