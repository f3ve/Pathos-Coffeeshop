import {Topbar, Footer} from "../components/global";

export default function MainLayout({children}) {
  return (
    <>
      <Topbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
