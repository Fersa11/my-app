import React from "react";
import Header from './Header';
import Footer from './Footer';
import NoteTitle, { NoteContent } from './Note';

function App() {
    return (
        <div>
            <header className='header'><Header /></header>
            <div className='note'>
                <NoteTitle />
                <NoteContent />
            </div>
            <footer className='footer'> <Footer /></footer>
        </div>
    )
};

export default App;