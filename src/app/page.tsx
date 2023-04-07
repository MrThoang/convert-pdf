import { Footer } from "./containers/footer/Footer";
import { HomePage } from "./containers/home-page/HomePage";

export default function Page() {
  return (
    <div className="bg-[url('images/background.svg')] bg-auto bg-no-repeat bg-top w-full">
      <div className="max-w-screen-xl mx-auto ">
        <HomePage />
      </div>
      <Footer />
    </div>
  )
}
