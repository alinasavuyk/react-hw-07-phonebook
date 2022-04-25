import  { useState, useEffect } from 'react';
import { nanoid } from 'nanoid'
import ContactList from "./components/ContactForm/ContactList";
import ContactForm  from './components/ContactForm/ContactForm';
import ContactFilter  from './components/ContactForm/ContactFilter';
import s from "./components/ContactForm/contactForm.module.css"


function App () {

            return (
                <div className={s.container}>
                <h2>Phonebook</h2>
                <ContactForm />
                <h2>Contacts</h2>
               <ContactFilter/>  
                <ContactList/> 
                </div>
            )
        }
export default App