import React, { createContext, useState } from "react";

const NameContext = createContext();

function NameProvider({ children }) {
    console.log("Child", children);
    const [name, setName] = useState("");
    const handleChange = (e) => {
        setName(e.target.value);
        localStorage.setItem("name", name);
    }
    return (
        <NameContext.Provider value={{ name, handleChange }}>
            {children}
        </NameContext.Provider>
    );
}

export { NameContext, NameProvider };
