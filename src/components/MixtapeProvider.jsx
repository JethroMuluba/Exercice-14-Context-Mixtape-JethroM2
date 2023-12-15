import React from 'react'

export default function MixtapeProvider({children, song}) {

    return (
        <mixtapeContext.Provider value ={{song}} >
            {children}
        </mixtapeContext.Provider>
    )
}
