import { useState } from 'react';

export default function NotesList ({notes, deleteNote}) {
    const [reverse, setReverse] = useState(false);

    if (notes.length === 0) {
        return <p>No notes yet!</p>
    }

    const notesList = notes.map((note) => (
        <div key={note._id}>
            <p>
                { new Date(note.createdAt).toLocaleString() }:
            </p>
            <p>
                { note.text }
                <button onClick={ () => deleteNote(note._id) } title="Delete note">&times;</button>
            </p>
        </div>
    ));

    return (
        <div>
            <button onClick={ () => setReverse(!reverse) } title="Reverse notes order">
                ▲ | ▼ 
            </button>
            {
                reverse ? notesList.reverse() : notesList
            }
        </div>
    )
}