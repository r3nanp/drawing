import * as React from 'react'
import { Draw } from '../../components/Draw'
import { PaintingDashboard } from '../../components/PaintingDashboard'

export default function Drawing() {
  return (
    <>
      <Draw />
      <PaintingDashboard />
    </>
  )
}
