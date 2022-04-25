import  { useState } from 'react';
import s from "./contactForm.module.css"
import { nanoid } from 'nanoid'
import {useFeathContactsQuery, useCreateContactsMutation} from '../../redux/contactSlice'

function ContactForm () {
    const [name, setName ]=useState('')
    const [number, setNumber ]=useState('')

    const { data:contacts, isFetching } = useFeathContactsQuery();
    const [createContacts]=useCreateContactsMutation()

    const   nameInputId=nanoid();
    const  numberInputId=nanoid();


const onSaveContactClicked = (data) => {
  const message = `${data.name} is alredy in contacts`;
  const findName = contacts.find(contact => contact.name.toLowerCase() === data.name.toLowerCase());
  const findNumber = contacts.find(contact => contact.number === data.number);

  if (findName || findNumber !== undefined) {
    alert(message);
    return};

  if (contacts) {
    createContacts({
          id: nanoid(),
          name: data.name,
          number: data.number
      })  
  }}

  const  handleChacgeName=e=>{
    setName(e.target.value);
    }
  const  handleChacgeNumber=e=>{
        setNumber(e.target.value);
    }
    
   const handleSubmit=(e)=>{
       e.preventDefault()
       onSaveContactClicked({ name, number })  
       reset();
    }

   const reset=()=>{
    setNumber("");
    setName("");
    }

    return(
        <form className={s.inputContact}
        type="submit"
        onSubmit={handleSubmit}
       >
      <label  htmlFor={nameInputId}>Name
          <input
          type="text"
          name="name"
          value={name}
          onChange={handleChacgeName}
         id={nameInputId}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required/>
      </label>
      <label htmlFor={numberInputId}>Number
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleChacgeNumber}
          id={numberInputId}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required/>
      </label>
      <button type='submit'>Add contact</button>
          </form>
    )
    
}


export default ContactForm