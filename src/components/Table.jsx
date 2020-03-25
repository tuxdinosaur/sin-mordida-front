
import React, { useEffect, useState } from 'react'

import api from '../lib/api'

function Table(props) {

  const [previousText, setPreviousText] = useState('')
  const [fraction, setFraction] = useState([])
  const [vehicleType, setVehicleType] = useState([])
  const [umas, setUmas] = useState([])
  const [licensePoints, setLicensePoints] = useState([])
  const [platePoints, setPlatePoints] = useState([])

  const tableId = props.tableId

  useEffect(() => {

    async function getTable() {

      const payload = await api.getTable(tableId)

      setPreviousText(payload.data.article[0].previousText)
      setFraction(payload.data.article[0].fraction)
      setVehicleType(payload.data.article[0].vehicleType)
      setUmas(payload.data.article[0].umas)
      setLicensePoints(payload.data.article[0].licensePoints)
      setPlatePoints(payload.data.article[0].platePoints)

    }
    if (tableId !== '') getTable()

  }, [tableId])

  const tableRow = []

  for (let index = 0; index < vehicleType.length; index++) {
    tableRow.push(
      <tr key={index}>
        <td>{vehicleType[index]}</td>
        <td>{fraction[index]}</td>
        <td>{umas[index]}</td>
        <td>{licensePoints[index]}</td>
        <td>{platePoints[index]}</td>
      </tr>
    )
  }

  if (tableId === '') return null

  return (
    <div>
      <p>{previousText}</p>
      <table>
        <thead>
          <tr>
            <th>Tipo de vehículo</th>
            <th>Fracción</th>
            <th>Multa en UMAs</th>
            <th>Sanción en licencia</th>
            <th>Sanción en matrícula</th>
          </tr>
        </thead>
        <tbody>
          {tableRow}
        </tbody>
      </table>
    </div>
  )

}

export default Table
