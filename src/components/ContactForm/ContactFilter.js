import React from 'react';
import PropTypes from 'prop-types';
import s from "./contactForm.module.css"
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filterSlice'

const ContactFilter=()=>{
  const value = useSelector(state => state.filter);
  //console.log(value)
  const dispatch = useDispatch();
  return(
  <label className={s.labelFilter}>Find contacts by name
       <input value={value}
   onChange={(e) => {
    dispatch(changeFilter(e.target.value));
  }}></input>
  </label>
   
)}

ContactFilter.propTypes = {
  value: PropTypes.string,
};
export default ContactFilter