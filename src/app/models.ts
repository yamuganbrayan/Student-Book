export interface Book {
  id?: number;
  name: string;
  author: string;
  summary: string;
  stocks: number;
  image: string;
  borrowedAt?: Date;
}



export const books: Book[] = [
  {
    id: 1,
    name: 'Going to Meet the Man',
    author: 'James Baldwin (1965)',
    // eslint-disable-next-line max-len
    summary: 'Set in the American deep south during the height of the Civil Rights movement, Baldwin\'s famous short story examines racial tension from both sides of the coin without denying either their humanity. As a man recalls a chilling childhood memory, Baldwin probes beneath the skin for an unflinching look at the origins of violence and discrimination.',
    stocks: 10,
    image: 'assets/images/Going to Meet the Man.jpg'
  },
  {
    id: 2,
    name: 'Love is Power or Something Like That',
    author: 'A. Igoni Barrett (2013)',
    // eslint-disable-next-line max-len
    summary: 'The best short story in Barrett\'s collection of tales set against a backdrop of Nigeria\'s political history, Godspeed and Perpetua charts the highs and lows of an arranged marriage and offers an astute look at family power dynamics. Barrett\'s real stength is in his characterisation: figures like Perpetua, stuck in a disappointing marriage with a wealthy, older man, leap off the page.',
    stocks: 5,
    image: 'assets/images/Love is Power or Something Like That.jpg'
  },
  {
    id: 3,
    name: 'I Bought a Little City.',
    author: 'Donald Barthelme (1974)',
    // eslint-disable-next-line max-len
    summary: 'The narrator of this story has bought a little city – Galveston, Texas, to be precise. At first he says he\'ll only change things gradually but, as events spiral out of control, he soon comes to resemble something more like a despot. As funny as it outrageous this story, first published in the New Yorker, is a cautionary tale about control and ambition with plenty left to tell us about today.',
    stocks: 8,
    image: 'assets/images/I Bought a Little City.jpg'
  },
  {
    id: 4,
    name: 'The Complete Cosmicomics',
    author: 'Italo Calvino (1967)',
    // eslint-disable-next-line max-len
    summary: 'Set before our age of constant connectivity, this is a story of intense – and tense – longing in which someone races to make up with a lover they\'ve fallen out with over a landline (remember those?). The beauty of Calvino\'s story comes from the doubt: will the two lovers reunite and have a happy ending? It\'s a lot more fun to find out when there\'s no mobile phones involved.',
    stocks: 3,
    image: 'assets/images/The Complete Cosmicomics.jpg'
  },
  {
    id: 5,
    name: 'What We Talk About When We Talk About Love',
    author: 'Raymond Carver (1981)',
    // eslint-disable-next-line max-len
    summary: 'Two couples drink and meditate on the meaning of ‘real’ love, sharing their own anecdotes and experiences. Raymond Carver\'s beautifully spare writing is an exercise in minimalism, and he gets to the heart of the matter like no one else can. This story – and the others in the collection – cemeneted the Carver\'s position as one of the all-time greatest short story writers.',
    stocks: 0,
    image: 'assets/images/What We Talk About When We Talk About Love.jpg'
  },
];

export const APP_KEYS = {
  borrowedBooks: 'borrowedBooks',
  books: 'books'
};
