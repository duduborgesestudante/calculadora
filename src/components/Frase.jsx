import { useState } from "react"

function Frase() {
    const [state, setState] = useState('')
    return (
        <>
            <input type="text" value={state} onChange={(e) => setState(e.target.value)} />
            <br />
            <strong>Minha frase:</strong>
            <br />
            <small>{state}</small>
        </>
    )
}
export default Frase