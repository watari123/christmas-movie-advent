# Christmas Movie Advent

I love watching Christmas movies in the lead-up to the holidays, but I can never decide which one. So I made a calendar that decides for me.

Twenty-five gold-framed doors, one per night from 1 to 25 December. Each door unlocks at midnight on its date. Open it and an old film-leader countdown runs 3, 2, 1, a gift pops open, and out comes a cinema ticket with that night's movie.

**[Open the calendar →](https://watari123.github.io/christmas-movie-advent/)**

## What it does

- **One movie a night, Dec 1–25.** Doors stay locked until their date.
- **Four themed "reels".** Light and easy watches first, rom-coms next, cosy classics after that, and the big favourites saved for the last few nights.
- **Swap it.** Not in the mood? Each night gets 3 swaps from a backup pool. After that, type in your own pick.
- **Where to watch.** Every ticket links to JustWatch so you can see which service has it.
- **Mark as watched.** Opened doors show the poster, and watched ones get a "Seen" stamp.

## Make it yours

Everything about the lineup lives in one file, [`movies.js`](movies.js). You don't need to touch any other code.

1. **Fork this repo.** Click **Fork** at the top of this page.
2. **Edit `movies.js`.** Open it in your fork, click the pencil icon, and swap in your own movies:
   ```js
   { day: 1, title: "Elf", year: 2003, blurb: "Buddy the elf goes to New York.", poster: "https://…/elf.jpg" },
   ```
   - `poster` can be a link to any image on the web, or a file you upload to the repo, such as `"posters/elf.jpg"`. Set it to `null` and the calendar shows a vintage title card instead.
   - `favourite: true` adds a "A favourite" tag to that night's ticket.
   - The `swaps` list in each reel is the pool that night's swaps draw from.
   - Change `whereToWatch` to your country (`us`, `gb`, `ca`, `nz`…) so the streaming links match where you live.
   - Change `year` each December.
3. **Turn on GitHub Pages.** In your fork, go to **Settings → Pages**, set **Source** to *Deploy from a branch*, pick `main` and `/ (root)`, and save. After a minute your calendar is live at `https://<your-username>.github.io/christmas-movie-advent/`.

If something in `movies.js` is off, like a missing day, the calendar tells you what to fix instead of showing the doors.

**Testing your lineup before December:** add `#peek` to the end of your calendar's link (for example `https://<your-username>.github.io/christmas-movie-advent/#peek`). Every door unlocks so you can check your movies and posters, and nothing you do there is saved. Remove `#peek` to go back to the real calendar. There's no button for this on the page, so visitors can't spoil the lineup.

## Good to know

- **Progress is saved in your browser.** Opened doors, swaps and watched ticks live on the device you used. A different phone or browser starts fresh.
- **Run it locally** by opening `index.html` in your browser. No build step, no dependencies.
- **Sound.** The countdown bells and the gift chime are generated in the browser. There's a "Sounds on / off" button in the header.

## Credits

Poster images are linked from Wikipedia and belong to their studios and distributors. Countdown and reveal sounds are synthesised with the Web Audio API. Fonts are Limelight, Libre Caslon Text and Courier Prime, from Google Fonts.

Code is released under the [MIT License](LICENSE).
