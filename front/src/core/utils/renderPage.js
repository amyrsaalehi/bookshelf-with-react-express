import { Suspense } from "react"
import { Spinner } from "react-bootstrap"

export const renderPage = (Page) => {
  return <Suspense fallback={<Spinner />}>
    <Page />
  </Suspense>
}