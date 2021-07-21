import React from "react";
import Header from './Header';
import Footer from './Footer';
import NoteTitle, { NoteContent } from './Note';

function App() {
    return (
        <div>
            <Header />
            <div className='note'>
                <NoteTitle />
            </div>
            <Footer />
        </div>
    )
};

export default App;