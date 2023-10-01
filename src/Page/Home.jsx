import React from "react"
import Note from '../GeneralComponent/Note'
import notes from "../notes";

function Home(){
    return (
        <div className="home">
        {notes.map((note) => (
            <Note note = {note}/>
        ))}
        </div>
    )
}

export default Home;