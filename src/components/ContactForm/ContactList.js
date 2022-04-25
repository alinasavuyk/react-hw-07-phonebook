import React from 'react';
import s from "./contactForm.module.css"
import { useFeathContactsQuery, useDeleteContactsMutation} from '../../redux/contactSlice'
import {  useSelector} from 'react-redux';

const ContactList =()=>{
 const { data:contacts, isFetching } = useFeathContactsQuery();
 const [deleteContacts] =useDeleteContactsMutation();
 const filters = useSelector(state => state.filter);

const filtredContacts = () => {
  const normalizedFilter = filters.toLowerCase();
  return (
    contacts &&
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),));
};
const filteredContactList = filtredContacts();

  return (
<ul className={s.contactList}>
{ contacts
        ?
        filteredContactList.map(({id,name, number})=>{
      return(
        <li key={id}
        className={s.contactList_item}>
        <p className={s.contactList__text}>{name}</p>
        <p className={s.contactList__text}>{number}</p>
        <button onClick={()=>deleteContacts(id)} >delete</button>
      </li>
      )
    
    }):'No data available'
  }
    
  </ul>

 )}

 export default ContactList

