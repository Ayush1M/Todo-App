import headerImage from "./images/header-image.png"
import Header from "./components/Header.tsx"


export default function App(){

  return(
    <main>
      <Header image={{src : headerImage , alt : "todo image"}}>
        <h2>Todo App</h2>
      </Header>
    </main>
  )
}