import Navbar from "../components/navbar";

const app = document.getElementById("app");
export default function Login() {
  document.title = 'Login Page';
  
  app.innerHTML = `
  ${ Navbar() }
  <div class="w-screen min-h-screen max-w-[1440px] mx-auto">
      <h1 class="text-orange-500">Login page</h1>

      <form class="w-[320px] flex flex-col gap-4 mx-auto" autocomplete="off">

        <div class="flex flex-col gap-2 font-light">
          <label for="email">email</label>
          <input type="email" id="email" class="h-10 px-3 
          font-light rounded-md border-slate-200 border-[2px]" />
        </div>
        <div class="flex flex-col gap-2 font-light">
          <label for="password">password</label>
          <input type="password" id="password" class="h-10 px-3 
          font-light rounded-md border-slate-200 border-[2px]" />
        </div>
        <button class= "h-10 w-[30%] bg-orange-500 font-white rounded-md ml-auto">
        Login
        </button>
      </form>
  </div>
  
    
    `;
}
