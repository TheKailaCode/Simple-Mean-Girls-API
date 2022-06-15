// https://mean-girls-api.herokuapp.com/

const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const characters = {
    'regina': {
        'name': 'Regina George',
        'title': 'The Plastics',
        'quote': 'Get in loser, we\'re going shopping.'
    },
    'cady': {
        'name': 'Cady Heron',
        'title': 'The Plastics',
        'quote': 'On October 3rd, he asked me what day it was.'
    },
    'janis': {
        'name': 'Janis Ian',
        'title': 'Art Freak',
        'quote': 'You smell like a baby prostitute'
    },
    'damian': {
        'name': 'Damian',
        'title': 'Art Freak',
        'quote': 'Don\'t look at me'
    },
    'karen': {
        'name': 'Karen Smith',
        'title': 'The Plastics',
        'quotes': 'So if you\'re from Africa, why are you white?'
    },
    'gretchen': {
        'name': 'Gretchen Wieners',
        'title': 'The Plastics',
        'quote': 'That is so fetch!'
    },
    'aaron': {
        'name': 'Aaron Samuels',
        'title': 'Jock',
        'quote': 'Stupid girls make up rumours because they\'re bored with their own lame lives.'
    },
    'jessica': {
        'name': 'Jessica Lopez',
        'title': 'Desperate Wannabe',
        'quote': 'Laura, I don\'t hate you \'cause you\'re fat. You\'re fat because I hate you.'
    },
    'coach carr': {
        'name': 'Coach Carr',
        'title': 'Gym teacher',
        'quote': 'Don\'t have sex because you will get pregnant and die.'
    },
    'kevin g': {
        'name': 'Kevin Gnapoor',
        'title': 'Mathletes',
        'quote': 'Yo, yo, yo. All you sucka MC\'s ain\'t got nothing on me, from my grades to my rhymes you can\'t touch Kevin G. I\'m a mathlete, so nerd is inferred but forget what you heard I\'m like James Bond the third. Shaken not stirred I\'m Kevin Gnapoor. The G\'s silent when I sneak in your door. I make love to your woman on the bathroom floor. I don\'t play like Shaggy, you\'ll know it was me, cuz the next time you see her she\'ll be like "ohhh Kevin G."'
    },
    'default': {
        'default': 'She does\'nt even go here'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:characterName', (request, response) => {
    const charactersName = request.params.characterName.toLowerCase()
    if (characters[charactersName]) {
        response.json(characters[charactersName])
    } else {
        response.json(characters['default'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on PORT ${PORT}`)
})