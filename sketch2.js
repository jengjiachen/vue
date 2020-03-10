


var vm = new Vue({
  el: '#llamaAlpaca',
  data: {
    // class binding
    isActive: true,
    hasError: false,
    llamaFacts: 'Llama Facts!',
    // facts about llamas using v-for
    llamas: [
      { text: 'Llamas make excellent guards for herds of small animals.' },
      { text: 'They are very social and will ‘adopt’ a group of sheep or goats as their own herd.' },
      { text: 'Then they will protect the herd by chasing off coyotes and other predators.' },
      { text: 'Llamas are smart. They can distinguish between the neighbor’s dog and a predatory coyote.' },
      { text: 'Llamas can grow as much as 6 feet tall.' },
      { text: 'Llamas are diabetic — sort of.' },
      { text: 'All camelids spit or stick out their tongue when they are annoyed.' }
    ],

    // links using attribute bindings
    wikiLlama: 'https://en.wikipedia.org/wiki/Llama',
    bestLlama: 'Llamas are the best!',

    // alpaca section starts here
    alpacaFacts: 'Alpaca Facts!',
    // facts about alpacas using v-for
    alpacas: [
      { text: 'Alpacas are very smart animals, gentle, and easy to handle, each with its own personality.' },
      { text: 'Alpacas are shy, but very curious, quiet, and intelligent.' },
      { text: 'Alpacas have three-compartments in their stomach, which allow them to efficiently convert hay and grass to energy.' },
      { text: 'The alpaca can thrive without consuming very much water, although an abundant, fresh water supply is most necessary.' },
      { text: 'Alpacas feet are padded and leave the terrain undamaged as they graze, and do not pull the grasses up by the roots.' },
      { text: 'Alpacas have a life expectancy of about 20 years.' },
      { text: 'The alpaca is an herbivore, grazing on grass and munching weeds, shrubs and trees.' }
    ],
    
    // links using attribute bindings
    wikiAlpaca: 'https://en.wikipedia.org/wiki/Alpaca',
    bestAlpaca: 'Alpacas are the best!'
  }
})
