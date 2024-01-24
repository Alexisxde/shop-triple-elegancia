export default function scrollToSection(section) {
  const Section = document.getElementById(section)
  if (Section) {
    Section.scrollIntoView({ behavior: 'smooth' })
  }
}
