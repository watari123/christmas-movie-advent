// ─────────────────────────────────────────────────────────────
//  Your Christmas movie lineup
//
//  This is the only file you need to edit to make the calendar yours.
//  Change any title, year, blurb or poster, save, and reload the page.
//
//  poster:    a link to any image on the web, or a file you add to the
//             repo (e.g. "posters/elf.jpg"). Use null for no poster and
//             the calendar shows a vintage title card instead.
//  favourite: true adds a "A favourite" tag on that night's ticket.
// ─────────────────────────────────────────────────────────────

window.ADVENT = {
  title: "Twenty-Five Picture Nights",
  kicker: "Admit one · December 2026",
  year: 2026,              // doors unlock on 1–25 December of this year
  admit: "One",            // printed on the ticket stub: "Admit One"
  favouriteLabel: "A favourite",
  swapsPerNight: 3,        // after these run out, you type your own pick

  // The "Where to watch" button. Change "au" to your country code (us, gb, ca, nz…)
  whereToWatch: { label: "Where to watch", searchUrl: "https://www.justwatch.com/au/search?q=" },

  // One movie per night. Keep day numbers 1 to 25 with no gaps.
  nights: [
    // Reel One: Warming up
    { day: 1, title: "Elf", year: 2003, blurb: "Buddy the elf goes to New York. The easiest possible start.", poster: "https://upload.wikimedia.org/wikipedia/en/d/df/Elf_movie.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled" },
    { day: 2, title: "How to Lose a Guy in 10 Days", year: 2003, favourite: true, blurb: "A bet, a magazine column and Matthew McConaughey at peak charm.", poster: "https://upload.wikimedia.org/wikipedia/en/0/07/HowToLoseAGuyimp.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled" },
    { day: 3, title: "Klaus", year: 2019, blurb: "Hand-drawn and genuinely moving: a lazy postman accidentally invents Santa.", poster: "https://upload.wikimedia.org/wikipedia/en/2/26/Klaus_poster.jpeg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled" },
    { day: 4, title: "Holidate", year: 2020, favourite: true, blurb: "Two singles agree to be each other's plus-one for every holiday of the year.", poster: "https://upload.wikimedia.org/wikipedia/en/0/01/Holidate_film_poster.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled" },
    { day: 5, title: "Serendipity", year: 2001, blurb: "Two strangers meet over the last pair of gloves in a New York store at Christmas.", poster: "https://upload.wikimedia.org/wikipedia/en/a/a5/Serendipity_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled" },
    { day: 6, title: "The Muppet Christmas Carol", year: 1992, blurb: "Michael Caine plays Scrooge completely straight opposite the Muppets.", poster: "https://upload.wikimedia.org/wikipedia/en/9/95/Muppet_christmas_carol.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled" },
    { day: 7, title: "Last Christmas", year: 2019, blurb: "A London Christmas-shop worker has a rough year. Emma Thompson co-wrote it, George Michael scores it.", poster: "https://upload.wikimedia.org/wikipedia/en/0/0c/Last_Christmas_poster.jpeg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled" },
    // Reel Two: Falling for it
    { day: 8, title: "While You Were Sleeping", year: 1995, blurb: "Sandra Bullock, a coma mix-up, and a family that adopts her over Christmas.", poster: "https://upload.wikimedia.org/wikipedia/en/e/e6/Whilesleepingposter.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled" },
    { day: 9, title: "You've Got Mail", year: 1998, favourite: true, blurb: "Bookshop rivals fall for each other over email, all through a New York winter.", poster: "https://upload.wikimedia.org/wikipedia/en/e/ee/You%27ve_Got_Mail.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled" },
    { day: 10, title: "Pride & Prejudice", year: 2005, favourite: true, blurb: "The hand flex. The misty field at dawn. Enough said.", poster: "https://upload.wikimedia.org/wikipedia/pt/8/85/Pride_and_Prejudice_2005.jpg?utm_source=pt.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled" },
    { day: 11, title: "Happiest Season", year: 2020, blurb: "Kristen Stewart plans to propose at her girlfriend's family Christmas. It does not go to plan.", poster: "https://upload.wikimedia.org/wikipedia/en/9/9a/Happiest_Season_poster.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled" },
    { day: 12, title: "Bridget Jones's Diary", year: 2001, blurb: "Opens at a Christmas turkey curry buffet and ends in the snow.", poster: "https://upload.wikimedia.org/wikipedia/en/1/17/BridgetJonesDiaryMoviePoster.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled" },
    { day: 13, title: "About Time", year: 2013, blurb: "Time travel, used only for love and family. Bring tissues.", poster: "https://upload.wikimedia.org/wikipedia/en/7/7c/About_Time_%282013_film%29_Poster.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled" },
    { day: 14, title: "When Harry Met Sally...", year: 1989, favourite: true, blurb: "Twelve years of friendship, building to a New Year's Eve speech.", poster: "https://upload.wikimedia.org/wikipedia/en/1/1c/WhenHarryMetSallyPoster.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled" },
    // Reel Three: Cosy and kind
    { day: 15, title: "Arthur Christmas", year: 2011, blurb: "Santa's clumsy younger son has one night to deliver a forgotten present.", poster: "https://upload.wikimedia.org/wikipedia/pt/f/f4/Arthur_Christmas_P%C3%B4ster.jpg?utm_source=pt.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled" },
    { day: 16, title: "Paddington 2", year: 2017, blurb: "Possibly the kindest film ever made.", poster: "https://upload.wikimedia.org/wikipedia/ru/d/d9/%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0_%C2%AB%D0%9F%D1%80%D0%B8%D0%BA%D0%BB%D1%8E%D1%87%D0%B5%D0%BD%D0%B8%D1%8F_%D0%9F%D0%B0%D0%B4%D0%B4%D0%B8%D0%BD%D0%B3%D1%82%D0%BE%D0%BD%D0%B0_2%C2%BB.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled" },
    { day: 17, title: "The Family Stone", year: 2005, blurb: "A tightly wound girlfriend meets her boyfriend's chaotic family at Christmas.", poster: "https://upload.wikimedia.org/wikipedia/en/9/97/The_Family_Stone_Poster.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled" },
    { day: 18, title: "It's a Wonderful Life", year: 1946, blurb: "The original Christmas feel-good film, and it earns its ending.", poster: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/25/It%27s_a_Wonderful_Life_%281946_poster%29.jpeg/500px-It%27s_a_Wonderful_Life_%281946_poster%29.jpeg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail" },
    { day: 19, title: "Little Women", year: 2019, favourite: true, blurb: "Opens and closes at Christmas with the March sisters.", poster: "https://upload.wikimedia.org/wikipedia/en/9/9d/Little_Women_%282019_film%29.jpeg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled" },
    { day: 20, title: "Single All the Way", year: 2021, blurb: "A guy brings his best friend home for Christmas to dodge family questions.", poster: "https://upload.wikimedia.org/wikipedia/en/3/38/Single_All_the_Way_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled" },
    { day: 21, title: "Harry Potter and the Philosopher's Stone", year: 2001, favourite: true, blurb: "Snow at Hogwarts and Harry's first real Christmas presents.", poster: "https://upload.wikimedia.org/wikipedia/tr/e/e0/Harry_Potter_and_the_Sorcerer%27s_Stone_%28film%2C_2001%29.jpg?utm_source=tr.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled" },
    // Reel Four: The big ones
    { day: 22, title: "How the Grinch Stole Christmas", year: 2000, favourite: true, blurb: "Jim Carrey at full volume. Whoville at full sparkle.", poster: "https://upload.wikimedia.org/wikipedia/en/e/e7/How_the_Grinch_Stole_Christmas_film_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled" },
    { day: 23, title: "The Holiday", year: 2006, favourite: true, blurb: "A Christmas house swap between LA and a snowed-in Surrey cottage.", poster: "https://upload.wikimedia.org/wikipedia/en/6/60/Theholidayposter.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled" },
    { day: 24, title: "Home Alone", year: 1990, favourite: true, blurb: "It's set on Christmas Eve, so it belongs tonight.", poster: "https://upload.wikimedia.org/wikipedia/en/7/76/Home_alone_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled" },
    { day: 25, title: "Love Actually", year: 2003, favourite: true, blurb: "Saved for Christmas Day. All of it, every storyline.", poster: "https://upload.wikimedia.org/wikipedia/en/e/eb/Love_Actually_movie.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled" },
  ],

  // Reels group the nights into themed weeks. "swaps" is the pool a swap
  // draws from for nights in that reel.
  reels: [
    {
      name: "Reel One", label: "Warming up", days: [1, 7],
      vibe: "Light, silly and easy. Nothing you have to concentrate on.",
      swaps: [
        { title: "The Santa Clause", year: 1994, blurb: "Tim Allen accidentally becomes Santa and has to grow the beard.", poster: "https://upload.wikimedia.org/wikipedia/en/8/86/The_Santa_Clause.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled" },
        { title: "The Holiday Calendar", year: 2018, blurb: "A photographer inherits an advent calendar that seems to predict her days.", poster: "https://upload.wikimedia.org/wikipedia/en/d/d0/The_Holiday_Calendar_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled" },
        { title: "A Castle for Christmas", year: 2021, blurb: "Brooke Shields buys a Scottish castle from a grumpy duke.", poster: "https://upload.wikimedia.org/wikipedia/en/4/4a/A_Castle_for_Christmas_Poster.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled" },
        { title: "The Princess Switch", year: 2018, blurb: "A Chicago baker and a duchess-to-be swap places for Christmas.", poster: "https://upload.wikimedia.org/wikipedia/en/2/2e/The_Princess_Switch.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled" },
        { title: "Love Hard", year: 2021, blurb: "A dating-app catfish leads to a very awkward family Christmas.", poster: "https://upload.wikimedia.org/wikipedia/en/f/f6/Love_Hard_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled" },
        { title: "Nativity!", year: 2009, blurb: "A teacher lies that Hollywood is coming to the school nativity play.", poster: "https://upload.wikimedia.org/wikipedia/en/c/c9/Nativity_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled" },
        { title: "Noelle", year: 2019, blurb: "Santa's daughter has to find her brother and save Christmas.", poster: "https://upload.wikimedia.org/wikipedia/en/0/01/Noelle_poster.jpeg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled" },
        { title: "Christmas with the Kranks", year: 2004, blurb: "A couple tries to skip Christmas and the whole street turns on them.", poster: "https://upload.wikimedia.org/wikipedia/en/c/c9/Christmas_With_the_Kranks_poster.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled" },
      ],
    },
    {
      name: "Reel Two", label: "Falling for it", days: [8, 14],
      vibe: "Rom-coms and slow-burn love stories.",
      swaps: [
        { title: "The Shop Around the Corner", year: 1940, blurb: "The original You've Got Mail, set in a Budapest shop at Christmas.", poster: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/70/The_Shop_Around_the_Corner_%281940_poster_-_Style_C%29.jpg/500px-The_Shop_Around_the_Corner_%281940_poster_-_Style_C%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail" },
        { title: "Notting Hill", year: 1999, blurb: "A bookshop owner, a film star and a very London love story.", poster: "https://upload.wikimedia.org/wikipedia/en/3/38/NottingHillRobertsGrant.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled" },
        { title: "Sleepless in Seattle", year: 1993, blurb: "A radio call at Christmas starts a cross-country romance.", poster: "https://upload.wikimedia.org/wikipedia/en/e/e1/Sleepless_in_seattle.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled" },
        { title: "The Proposal", year: 2009, blurb: "Sandra Bullock fakes an engagement to her assistant. Alaska ensues.", poster: "https://upload.wikimedia.org/wikipedia/en/0/02/The_Proposal.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled" },
        { title: "Crazy Rich Asians", year: 2018, blurb: "Meeting the boyfriend's family in Singapore, at the wedding of the year.", poster: "https://upload.wikimedia.org/wikipedia/en/b/ba/Crazy_Rich_Asians_poster.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled" },
        { title: "Emma.", year: 2020, blurb: "Austen's matchmaker, in pastel. Includes a snowy Christmas party.", poster: "https://upload.wikimedia.org/wikipedia/en/5/53/Emma_poster.jpeg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled" },
        { title: "Sense and Sensibility", year: 1995, blurb: "Emma Thompson's Austen. Patient, funny and quietly romantic.", poster: "https://upload.wikimedia.org/wikipedia/en/6/69/Sense_and_sensibility.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled" },
        { title: "13 Going on 30", year: 2004, blurb: "A wish turns a teenager into a thirty-year-old overnight.", poster: "https://upload.wikimedia.org/wikipedia/en/a/aa/13_Going_on_30_film_poster.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled" },
      ],
    },
    {
      name: "Reel Three", label: "Cosy and kind", days: [15, 21],
      vibe: "Wholesome, warm and a little nostalgic.",
      swaps: [
        { title: "Miracle on 34th Street", year: 1994, blurb: "A department-store Santa who might be the real one.", poster: "https://upload.wikimedia.org/wikipedia/en/5/56/Miracle_on_34th_Street_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled" },
        { title: "Paddington", year: 2014, blurb: "A bear from darkest Peru finds a family in London.", poster: "https://upload.wikimedia.org/wikipedia/ru/6/6b/%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0_%C2%AB%D0%9C%D0%B5%D0%B4%D0%B2%D0%B5%D0%B6%D0%BE%D0%BD%D0%BE%D0%BA_%D0%9F%D0%B0%D0%B4%D0%B4%D0%B8%D0%BD%D0%B3%D1%82%D0%BE%D0%BD%C2%BB.jpg?utm_source=ru.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled" },
        { title: "Jingle Jangle: A Christmas Journey", year: 2020, blurb: "A toymaker, his granddaughter and a lot of singing.", poster: "https://upload.wikimedia.org/wikipedia/en/0/02/Jingle_Jangle_A_Christmas_Journey_poster.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled" },
        { title: "Spirited", year: 2022, blurb: "A Christmas Carol musical, told from the ghosts' side.", poster: "https://upload.wikimedia.org/wikipedia/en/9/9a/Spirited_poster.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled" },
        { title: "The Christmas Chronicles", year: 2018, blurb: "Two kids try to catch Santa on camera. Kurt Russell is Santa.", poster: "https://upload.wikimedia.org/wikipedia/en/5/5e/The_Christmas_Chronicles.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled" },
        { title: "White Christmas", year: 1954, blurb: "Bing Crosby, a Vermont inn and no snow until the end.", poster: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8e/White_Christmas_%281954_film_poster%29.png/500px-White_Christmas_%281954_film_poster%29.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail" },
        { title: "The Man Who Invented Christmas", year: 2017, blurb: "Charles Dickens writing A Christmas Carol against a deadline.", poster: "https://upload.wikimedia.org/wikipedia/en/8/8a/The_Man_Who_Invented_Christmas.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled" },
        { title: "A Boy Called Christmas", year: 2021, blurb: "A boy travels north to find a village of elves.", poster: null },
      ],
    },
    {
      name: "Reel Four", label: "The big ones", days: [22, 25],
      vibe: "The favourites saved for last.",
      swaps: [
        { title: "Home Alone 2: Lost in New York", year: 1992, blurb: "Same chaos, now at the Plaza Hotel.", poster: "https://upload.wikimedia.org/wikipedia/en/5/50/Home_Alone_2.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled" },
        { title: "National Lampoon's Christmas Vacation", year: 1989, blurb: "Clark Griswold attempts the perfect family Christmas.", poster: "https://upload.wikimedia.org/wikipedia/en/5/53/NationalLampoonsChristmasVacationPoster.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled" },
        { title: "Scrooged", year: 1988, blurb: "Bill Murray as a TV executive visited by three ghosts.", poster: "https://upload.wikimedia.org/wikipedia/en/a/a1/Scrooged_film_poster.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled" },
        { title: "The Family Man", year: 2000, blurb: "A Wall Street bachelor wakes up on Christmas morning married with kids.", poster: "https://upload.wikimedia.org/wikipedia/en/e/e8/Family_man_movie.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled" },
        { title: "Holiday Inn", year: 1942, blurb: "The film White Christmas the song was written for.", poster: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d7/Holiday_Inn_%281942%29_-_US_film_poster.png/500px-Holiday_Inn_%281942%29_-_US_film_poster.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail" },
        { title: "Four Christmases", year: 2008, blurb: "A couple has to visit all four divorced parents in one day.", poster: "https://upload.wikimedia.org/wikipedia/en/c/ca/Four_Christmases-Movie_Poster.PNG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled" },
        { title: "Last Holiday", year: 2006, blurb: "Queen Latifah spends her savings on one perfect winter trip.", poster: "https://upload.wikimedia.org/wikipedia/en/0/0e/Last_holiday.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled" },
        { title: "Carol", year: 2015, blurb: "A slow, beautiful love story that begins in a department store at Christmas.", poster: "https://upload.wikimedia.org/wikipedia/en/1/10/Carol_film_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled" },
      ],
    },
  ],
};
