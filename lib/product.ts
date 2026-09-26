export const product = {
  name: '10 Million Coloring Educational Pages',
  domain: '10millionkidscoloringpages.shop',
  price: 149,
  originalPrice: 1999,
  // Replace with your Razorpay / Instamojo / Cosmofeed payment link
  checkoutUrl: '#buy',
}

export const discountPercent = Math.round((1 - product.price / product.originalPrice) * 100)

export const worksheets = [
  { src: '/images/ws/alphabet.png', caption: 'Alphabet Practice', category: 'Alphabet', benefit: 'Trace and recognise every letter, A to Z.' },
  { src: '/images/ws/numbers.png', caption: 'Number Tracing', category: 'Numbers', benefit: 'Learn to write numbers with guided arrows.' },
  { src: '/images/ws/counting.png', caption: 'Count & Circle', category: 'Counting', benefit: 'Count cute objects and circle the answer.' },
  { src: '/images/ws/fine-motor.png', caption: 'Trace the Lines', category: 'Tracing', benefit: 'Wavy, zigzag and loop lines for steady hands.' },
  { src: '/images/ws/shapes.png', caption: 'Match the Shapes', category: 'Shapes', benefit: 'Circles, stars, hearts and more to trace.' },
  { src: '/images/ws/coloring.png', caption: 'Color & Learn', category: 'Coloring', benefit: 'Bold line art that is easy for little hands.' },
  { src: '/images/ws/matching.png', caption: 'Shadow Matching', category: 'Matching', benefit: 'Draw lines to connect pictures and pairs.' },
  { src: '/images/ws/puzzle.png', caption: 'Spot the Difference', category: 'Puzzles', benefit: 'Sharpen attention with gentle puzzles.' },
  { src: '/images/ws/maze.png', caption: 'Bunny Maze', category: 'Fine Motor', benefit: 'Guide the pencil from start to finish.' },
  { src: '/images/ws/cut-paste.png', caption: 'Cut & Paste', category: 'Cut & Paste', benefit: 'Scissor and glue practice with picture tiles.' },
  { src: '/images/ws/pattern.png', caption: 'Find the Pattern', category: 'Colors', benefit: 'Spot colours and patterns, fill what comes next.' },
  { src: '/images/ws/words.png', caption: 'Letter Practice', category: 'Early Writing', benefit: 'First words to read, trace and write.' },
]

export const bonuses = [
  { src: '/images/bonus/reward-charts.png', title: 'Printable Reward Charts', value: 299 },
  { src: '/images/bonus/coloring-pack.png', title: 'Kids Coloring Pack', value: 399 },
  { src: '/images/bonus/activity-cards.png', title: 'Fun Activity Cards', value: 249 },
  { src: '/images/bonus/parent-guide.png', title: 'Parent Learning Guide', value: 199 },
  { src: '/images/bonus/story-pack.png', title: 'Story & Activity Pack', value: 349 },
]
