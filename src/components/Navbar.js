export default function Navbar(){
    return `
    <nav class="w-full h-20 flex bg-orange-500">
        <div class="w-full max-w-[1440px] flex items-center
        justify-start px-4 mx-auto">
            <img src="/logo.svg" alt="logo kami" class="h-8 mr-2" />
            <h1 class="text-white text-4xl font-light select-none cursor-pointer">
            Andi's Blog
            </h1>
            <menu class="flex gap-4 text-white font-light 
              ml-auto ">
                <a href="/">Home</a>
                <a href="/register">Register</a>
                <a href="/login">Login</a>
            </menu>
        </div>
    </nav>
    
    
    `
}