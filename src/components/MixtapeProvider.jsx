import React, { useState } from 'react'

export default function MixtapeProvider({children, songs}) {

    const [genre, setGenre] = useState("tous");
    const [sortOrder, setSortOrder] = useState("ascending");

    return (
        <mixtapeContext.Provider value ={{songs, genre, setGenre, sortOrder, setSortOrder}} >
            {children}
        </mixtapeContext.Provider>
    )
}
