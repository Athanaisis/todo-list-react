// On importe la librairie react
import React from 'react'

// On importe la librairie react-dom (elle permet)
// d'afficher react sur la page
import { createRoot } from 'react-dom/client'

type HelloPropos = {
  nom: string
  age?: string
}

function Hello({ nom, age = "pas d'âge" }: HelloPropos): JSX.Element {
  return (
    <p>
      Hello {nom}, vous avez {age} ans :)
    </p>
  )
}

//On crée un élément react (JSX)
const element = (
  <div>
    <h1> Bonjour la terre !</h1>
    <h2>Comment allez-vous les amis ?!</h2>
    <Hello nom="Rose" />
    <Hello nom="Jérémy" age="54" />
    <Hello nom="Stéphanie" age="68" />
  </div>
)

//Onrécupère la balise div#root de notre
// page HTML
const root = document.querySelector('#root')

//S'il n'y pas de balise root
if (!root) {
  //On lève une erreur
  throw new Error('Oups... il manque la balise root dans votre div')
}
createRoot(root).render(element)
