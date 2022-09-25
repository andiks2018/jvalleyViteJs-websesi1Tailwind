import axios from "axios";
import Navbar from "../components/navbar";
const app = document.getElementById("app");

window.handleRegister = (even)=>{
  event.preventDefault();

  let email = event.target.email.value;
  let password = event.target.password.value;
  let password2 = event.target.password2.value;

  //validator
  if(!email || !password || !password2 ){
    return alert("silahkan lengkap data")
  }
  if (password!==password2){
    return alert("password harus sama")
  }

    axios.post("http://localhost:3000/user",{
      email : email,
      password :password
    })
    .then(res=>{
      alert("register berhasil");
      window.location.href="/login";
    })
    .catch(err=>{
      alert ("Terjadi kesalahan")
      console.error(err);
    })



}
export default function Register() {
  document.title = 'Register Page';
  app.innerHTML = `
    ${ Navbar() }
    <div class="w-screen min-h-screen max-w-[1440px]
     mx-auto" autocomplete="off" onsubmit="handleRegister(event)">
        <h1 class="text-orange-500">Register page</h1>

        <form class="w-[320px] flex flex-col gap-4 mx-auto">

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
          <div class="flex flex-col gap-2 font-light">
            <label for="password2">ulangi password</label>
            <input type="password" id="password2" class="h-10 px-3 
            font-light rounded-md border-slate-200 border-[2px]" />
          </div>
          <button class= "h-10 w-[30%] bg-orange-500 text-white rounded-md ml-auto">
          Register
          </button>
        </form>
    </div>
    
    `;
}
