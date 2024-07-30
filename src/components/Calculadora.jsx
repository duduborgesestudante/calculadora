import { useState } from 'react'

function Calculadora() {
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [result, setResult] = useState('Resultado aqui')

    return (
        <>
            <h2>Calculadora</h2>
            <input value={num1} onChange={(e) => setNum1(parseFloat(e.target.value))} type="number" name="" id="" />
            <input value={num2} onChange={(e) => setNum2(parseFloat(e.target.value))} type="number" name="" id="" />
            <br />
            <div className='butoes'>
                <button onClick={() => setResult(`Resultado: ${num1 + num2}`)}>+</button> &nbsp; &nbsp;
                <button onClick={() => setResult(`Resultado: ${num1 - num2}`)}>-</button> &nbsp; &nbsp;
                <button onClick={() => setResult(`Resultado: ${num1 / num2}`)}>/</button> &nbsp; &nbsp;
                <button onClick={() => setResult(`Resultado: ${num1 * num2}`)}>X</button> &nbsp; &nbsp;
            </div>
            <p>{result}</p>
        </>
    )
}

export default Calculadora
