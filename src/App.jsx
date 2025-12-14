import NavBar from "./pages/NavBar.jsx"
import HeroSection from "./pages/HeroSection.jsx"
import CustomerTestimonialSection from "./pages/CustomerTestimonialSection.jsx"
import MenuSection from "./pages/MenuSection.jsx"
import AboutSection from "./pages/AboutSection.jsx"
const app = () => {
  return(
    <>
    <div>
      <NavBar/>
      <HeroSection/>
      <CustomerTestimonialSection/>
      <MenuSection/>
      <AboutSection/>
    </div>
    </>
  )
}
export default app;