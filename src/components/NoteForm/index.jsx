import { useState } from "react";

export default function NoteForm ({addNote}) {
    const [newNote, setNewNote] = useState('');
    const _handleSubmit = (event) => {
        event.preventDefault();
        addNote(newNote);
        setNewNote('');
    }
    return (
        <form onSubmit={ _handleSubmit }>
            <label htmlFor="note">
                Note:
            </label>
            <textarea id="note" value={newNote} onChange={(event) => setNewNote(event.target.value)}></textarea>
            <label htmlFor="add">
                Add your note:
            </label>
            <button id="add">Add your note</button>
        </form>
    );
}