import React, { useEffect, useState } from 'react'

export default function TopScore(props) {

    const [jugadores, setJugadores] = useState([])

    useEffect(() => {
        let newJugadores = [...props.equipoLocal.jugadores, 
                                ...props.equipoVisitante.jugadores];
        newJugadores.sort((a, b) => {
            return b.puntos - a.puntos; // Sentido descendente
        })
        setJugadores(newJugadores);
    }, [props.equipoLocal, props.equipoVisitante]) // En useEffect podemos disparar con cambios en las props

    return (
        <>
            <h1>Top Score</h1>
            <table className="top-score">
                <tbody>
                    {jugadores.map(jugador => {
                        return (
                            <tr key={jugador.id}>
                                <td>
                                    <img src={jugador.imagen} alt="Imagen del jugador" />
                                    {jugador.nombre}
                                </td>
                                <td>
                                    {jugador.puntos}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}
