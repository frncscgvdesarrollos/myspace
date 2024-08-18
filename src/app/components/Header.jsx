import Image from "next/image"
export default function Header() {
  return (
    <header >
        <div >
            <Image src="/fotopersonal.png" alt="logo" width={200} height={200} id="fotopersonal"/>
            <h2>Francisco Guerra</h2>
        </div>
        <nav>
            <ul>
                <li><a href="#sobre">Sobre mi</a></li>
                <li><a href="#projetos">Projectos</a></li>
            </ul>
        </nav>
    </header>
  )
}
