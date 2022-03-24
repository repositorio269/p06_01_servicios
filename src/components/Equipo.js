import React from 'react'

export default function Equipo(props) {
  return (
    <table className={props.equipo.nombre}>
        <tbody>
            {props?.equipo?.jugadores?.map(jugador => {
                return (
                    <tr key={jugador.id}>
                        <td>{jugador.nombre}</td>
                        <td></td>
                    </tr>
                )
            })}
        </tbody>
    </table>
  )
}
