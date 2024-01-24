import Layout from '@components/Layout'
import SectionProducts from '@components/SectionProducts'

export default function App() {
  return (
    <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <Layout className="z-10" />
      <SectionProducts />
    </div>
  )
}
