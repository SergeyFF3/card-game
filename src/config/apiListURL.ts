export const hostname = 'https://deckofcardsapi.com/api/deck'

export const newDeckURL = `${hostname}/new/shuffle/?cards=AS,AD,AC,AH,KS,KD,KC,KH,QS,QD,QC,QH,JS,JD,JC,JH,0S,0D,0C,0H,9S,9D,9C,9H,8S,8D,8C,8H,7S,7D,7C,7H,6S,6D,6C,6H`

export const deckIdShuffleURL = (deckId: string) => `${hostname}/${deckId}/shuffle/?rest=true`;

export const deckDeckIdDraw = (deckId: string, count: number) => `${hostname}/${deckId}/draw/?count=${count}`

export const deckIdPilePileNameAddURL = (
    deckId: string,
    pileName: string,
    cards: string
) => `${hostname}/${deckId}/pile/${pileName}/add/?cards=${cards}`

export const deckDeckIdPileNameListURL = (
    deckId: string,
    pileName: string,
) => `${hostname}/${deckId}/pile/${pileName}/list`
