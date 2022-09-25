import Navbar from "../components/navbar";

const app = document.getElementById("app");
export default function Home() {
  //ubah document title
  document.title = "Home Page";
  
  app.innerHTML = `
    ${ Navbar() }
    <div class="w-screen min-h-screen max-w-[1440px] mx-auto">
        <h1 class="text-orange-500">Home page</h1>
    </div>
    
    `;
}
