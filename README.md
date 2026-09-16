# 🎰 Project: Slot Machine

# 🎰 Slot Machine

A simple browser-based slot machine game built with vanilla HTML, CSS, and JavaScript. Place a bet, spin three reels, and try to match all three symbols to win!

## Features

- Adjustable wallet balance that persists during your session
- Quick-bet buttons for the minimum ($5) and maximum ($50) allowed bets
- Custom bet input for any amount within the allowed range
- Randomized three-reel spin using emoji symbols
- Win detection when all three reels match, paying out 3x the bet
- Win/loss feedback message after every spin
- Responsive layout with a stacked wallet display on small screens

## How to Play

1. Open `index.html` in your browser.
2. Enter a bet amount between $5 and $50 (or use the **$5** / **$50** quick-bet buttons).
3. Click **Place bet!** to spin the reels.
4. Match all three reels to win 3x your bet — otherwise, better luck next time!

## Project Structure

```
slot-machine/
├── index.html      # Page structure and layout
├── css/
│   └── main.css    # Styling, colors, and animations
└── js/
    └── main.js      # Game logic and betting rules
```

## How It Works

- The wallet starts at **$500**.
- Bets must be positive, between $5–$50, and no greater than the current wallet balance.
- Each spin randomly selects a symbol for each reel from: ✨ 🌸 🍒 💗 💛
- If all three symbols match, the bet is multiplied by 3 and added back to the wallet.
- If they don't match, the bet amount is simply lost.

## Technologies Used

- HTML5
- CSS3 (custom properties, gradients, flexbox, media queries)
- Vanilla JavaScript (DOM manipulation, event listeners)
- [Google Fonts](https://fonts.google.com/): DynaPuff, Cherry Cream Soda, Atma

## Credits

- Liquid text effect adapted from a CSS text-effects generator
- Button reset styling adapted from a [Stack Overflow](https://stackoverflow.com) answer (CC BY-SA 4.0)

## Possible Improvements

- Add validation/messaging for non-numeric or empty bet inputs
- Disable betting once the wallet balance reaches $0
- Add a spin animation for the reels
- Add a running win/loss history
