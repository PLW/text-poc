t = db.nytimes;
t.drop();
t.createIndex( { title:"text", summary:"text", content:"text" }, { proximity : true } );

//(1)
t.insert( {
    title : "NASA Reschedules Mars InSight Mission for May 2018",
    date : "March 9, 2016",
    summary : "Problems with the enclosure for a seismic instrument forced a two-year delay, but the mission is back on the schedule.",
    keywords : ["Mars (Planet)","National Aeronautics and Space Administration","Jet Propulsion Laboratory","Banerdt W Bruce"],
    content : "If all goes to plan, a postponed mission to probe beneath the surface of Mars will launch in two years, NASA announced Wednesday.  The InSight spacecraft was to head to space this month, but in December, NASA delayed the mission when it realized that there was not enough time to fix stubborn leaks in a vacuum enclosure housing a key instrument.  NASA is now aiming to launch InSight in May 2018, the next time that Earth and Mars are close enough to allow a quick six-month trip. (Because Mars is farther from the Sun than Earth and orbits more slowly, the two planets line up just once every 26 months.)  'I’m thrilled,' said W. Bruce Banerdt, a planetary geophysicist at NASA’s Jet Propulsion Laboratory in Pasadena, Calif., who is the mission’s principal investigator. 'We were hoping we would get the opportunity to give this another try.'  InSight — a shortening of Interior Exploration using Seismic Investigations, Geodesy and Heat Transport — would land on Mars on Nov. 26, 2018."
} );
//(2)
t.insert( {
    title : "NASA Reschedules Mars InSight Mission for May 2018",
    date : "March 9, 2016",
    summary : "Problems with the enclosure for a seismic instrument forced a two-year delay, but the mission is back on the schedule.",
    keywords : ["Mars (Planet)","National Aeronautics and Space Administration","Jet Propulsion Laboratory","Banerdt W Bruce"],
    content : "However, the space agency does not yet know exactly how much the delay will add to the mission’s $675 million cost. Dr. Banerdt said his team had given officials at NASA headquarters a rough estimate 'on the order of $150 million, more or less.'"
    content : "CNES, the French space agency, is in charge of the seismic instrument that turned troublesome.  InSight is designed to listen to what is going on in the deep interior of the planet including the shaking of tiny quakes. Measuring the change of velocity of seismic waves as they pass through the planet could also offer clues about Mars’s crust, mantle and core. The three seismometers in the instrument, sensitive enough to detect movements as small as half the radius of a hydrogen atom, require a near-perfect vacuum to operate with precision. Tests in August revealed a small leak in the enclosure, a flattened sphere about nine inches wide. Engineers attempted to patch it, but the leak persisted."
} );
//(3)
t.insert( {
    title : "NASA Reschedules Mars InSight Mission for May 2018",
    date : "March 9, 2016",
    summary : "Problems with the enclosure for a seismic instrument forced a two-year delay, but the mission is back on the schedule.",
    keywords : ["Mars (Planet)","National Aeronautics and Space Administration","Jet Propulsion Laboratory","Banerdt W Bruce"],
    content : "NASA’s Jet Propulsion Laboratory, which is managing the mission, is to redesign and build a new enclosure.  Dr. Banerdt will travel to NASA headquarters in Washington in about six months to present a more detailed cost estimate and report on the fixes. 'They’ll be watching that very closely and making sure we’re making good progress,' he said. NASA officials could still cancel the mission, but Dr. Banerdt said he was 'extremely optimistic' that InSight would get off the ground. Last month, Lockheed Martin, which built InSight, shipped the spacecraft back from the launch site at Vandenberg Air Force Base in California to Denver, where it is now being prepared for storage."
} );
//(4)
t.insert( {
    title : "Scott Kelly, American Astronaut, Returns to Earth After 340 Days in Space",
    date : "March 1, 2016",
    summary : "Mr. Kelly’s time at the International Space Station was the longest trip to space an American astronaut has ever taken.",
    keywords : ["Kelly  Scott J","Space and Astronomy","International Space Station","National Aeronautics and Space Administration"],
    content : "After 340 days in space, Scott Kelly is back on Earth. Mr. Kelly, who spent the time about 249 miles above the planet aboard the International Space Station, and the Russian cosmonaut Mikhail Kornienko landed on Tuesday at 11:26 p.m. Eastern in Kazakhstan. Mr. Kelly, in a bulky, white spacesuit, pumped his fist and smiled as he was helped out of his space capsule."
} );
//(5)
t.insert( {
    title : "Scott Kelly, American Astronaut, Returns to Earth After 340 Days in Space",
    date : "March 1, 2016",
    summary : "Mr. Kelly’s time at the International Space Station was the longest trip to space an American astronaut has ever taken.",
    keywords : ["Kelly  Scott J","Space and Astronomy","International Space Station","National Aeronautics and Space Administration"],
    content : "The spacecraft departed from the space station Tuesday at 8:02 p.m. Eastern, a part of the journey that was captured on a livestream. From Kazakhstan, Mr. Kelly will travel to Houston. He is scheduled to arrive at 11:45 p.m. Wednesday, and will be greeted by NASA officials; Jill Biden, the wife of Vice President Joseph R. Biden Jr.; and his identical twin brother, Mark Kelly, also an astronaut."
} );
//(6)
t.insert( {
    title : "Scott Kelly, American Astronaut, Returns to Earth After 340 Days in Space",
    date : "March 1, 2016",
    summary : "Mr. Kelly’s time at the International Space Station was the longest trip to space an American astronaut has ever taken.",
    keywords : ["Kelly  Scott J","Space and Astronomy","International Space Station","National Aeronautics and Space Administration"],
    content : "Scientists will study Mr. Kelly for the health effects of extended space travel, expecting it to be a steppingstone for a potential trip to Mars. They will have an unusual partner in the research: His twin will also be analyzed."
} );
//(7)
t.insert( {
    title : "Scott Kelly, American Astronaut, Returns to Earth After 340 Days in Space",
    date : "March 1, 2016",
    summary : "Mr. Kelly’s time at the International Space Station was the longest trip to space an American astronaut has ever taken.",
    keywords : ["Kelly  Scott J","Space and Astronomy","International Space Station","National Aeronautics and Space Administration"],
    content : "If you’re waiting to hear Scott Kelly’s perspective on the experience, you’ll have to be patient a little while longer. He won’t address the news media until 2 p.m. Friday. NASA scientists will answer questions on Reddit at 11 a.m. that day, and the agency will also hold a news conference to discuss research accomplishments at 1 p.m. Mr. Kelly has documented much of his trip on his Instagram and Twitter accounts, which became popular largely because of his distant views of Earth and its otherworldly sunrises and sunsets (he witnessed 10,880 of them). On Day 141, he posted a spectacular video of the aurora borealis."
} );
//(8)
t.insert( {
    title : "Scott Kelly, American Astronaut, Returns to Earth After 340 Days in Space",
    date : "March 1, 2016",
    summary : "Mr. Kelly’s time at the International Space Station was the longest trip to space an American astronaut has ever taken.",
    keywords : ["Kelly  Scott J","Space and Astronomy","International Space Station","National Aeronautics and Space Administration"],
    content : "Combined with his other three trips to space, Mr. Kelly has now spent 540 days of his life in orbit. The 340-day stay far surpassed the previous American record — 215 days — set by Michael López-Alegría in 2006 and 2007. The international record is nearly 438 days, set by the Russian cosmonaut Valeri Polyakov on the Mir space station in 1994 and 1995. 'I could go another year if I had to,' Mr. Kelly said last week in  a wide-ranging news conference. He was looking forward to jumping in his pool, he said, adding that the hardest part was being away from friends and family. But Mr. Kelly managed to maintained a sense of levity, including  dressing up in a gorilla suit. Highlights of the trip included a spacewalk and enjoying the first lettuce grown and harvested in space. 'Kind of like arugula,' Mr. Kelly said."
} );
//(9)
t.insert( {
    title : "Jeff Bezos Lifts Veil on His Rocket Company, Blue Origin",
    date : "March 8, 2016",
    summary : "Mr. Bezos introduced reporters to Blue Origin for the first time on Tuesday, offering updates on his space tourism plans and a new engine that is being developed.",
    keywords : ["Bezos  Jeffrey P","Blue Origin","Private Spaceflight","Rocket Science and Propulsion","Space and Astronomy"],
    content : "KENT, Wash. — The headquarters of Blue Origin, the secretive rocket company in an industrial park here, is anonymous, with not even a sign at the road to announce the occupants."
} );
//(10)
t.insert( {
    title : "Jeff Bezos Lifts Veil on His Rocket Company, Blue Origin",
    date : "March 8, 2016",
    summary : "Mr. Bezos introduced reporters to Blue Origin for the first time on Tuesday, offering updates on his space tourism plans and a new engine that is being developed.",
    keywords : ["Bezos  Jeffrey P","Blue Origin","Private Spaceflight","Rocket Science and Propulsion","Space and Astronomy"],
    content : "On Tuesday, for the first time, Blue Origin, started by Jeff Bezos, the billionaire founder of Amazon, opened its doors to reporters. 'Welcome to Blue,' Mr. Bezos said. 'Thank you for coming.'Blue Origin is part of a shift of the space business from NASA and aerospace behemoths like Lockheed Martin toward private industry, especially smaller entrepreneurial companies. Space Exploration Technologies, or SpaceX, founded by another Internet entrepreneur, Elon Musk, has been the most visible and most successful of the new generation of rocket companies. Last Friday, it launched another satellite to orbit, but an attempt to land the booster on a floating platform again ended in an explosion. Much more quietly, Blue Origin has also had big space dreams, but until now did not give outsiders a look at what it was doing."
} );
//(11)
t.insert( {
    title : "Jeff Bezos Lifts Veil on His Rocket Company, Blue Origin",
    date : "March 8, 2016",
    summary : "Mr. Bezos introduced reporters to Blue Origin for the first time on Tuesday, offering updates on his space tourism plans and a new engine that is being developed.",
    keywords : ["Bezos  Jeffrey P","Blue Origin","Private Spaceflight","Rocket Science and Propulsion","Space and Astronomy"],
    content : "For almost four hours, Mr. Bezos, who only occasionally talks to the press, led 11 reporters on a tour of the factory and answered a litany of questions over lunch. He talked garrulously, his speech punctured by loud laughs. 'It’s my total pleasure. I hope you can sense that I like this,' he said. He described an image on a wall in the company’s central area, which showed two tortoises holding an hourglass and gazing upward at a stylized image of the planets and cosmos. Below is Blue Origin’s motto: 'Gradatim ferociter,' Latin for 'step by step, ferociously' — no cutting of corners, but no dillydallying, either. 'You can do the steps quickly, but you can’t skip any steps,' Mr. Bezos said. He also offered updates on progress for his space tourism plans. The reusable New Shepard spacecraft that launched to the outskirts of space in November and then made a return trip in January will launch again soon. Depending on how well the testing goes, paying tourists, six at a time, might start making the short trips, experiencing a few minutes of weightlessness in space as soon as 2018, he said. At times, he told himself to stop talking, and let his engineers make their presentations about a new engine, the BE-4, which is under development with tests of a full version beginning by the end of the year. Mr. Bezos started Blue Origin in 2000, although few people knew about it then. For the next few years, about half a dozen people explored whether there might be a better way to get to space than rockets powered by loud, inefficient chemical combustion. The conclusion: there is not. Mr. Bezos said he had studied and thought about rockets since he was 5 years old. 'I never expected to have the resources to start a space company,' he said. 'I won a lottery ticket called Amazon.com.' Mr. Bezos declined to say how much money he had poured into his dream. 'Let’s just say it’s a lot,' he said. Around 2005, Mr. Bezos said he began rocket development in earnest. Still, almost no one knew what he was doing. For years, what went on here was mysterious and unknown, like Willy Wonka’s chocolate factory in Roald Dahl’s children’s book."
} );
//(12)
t.insert( {
    title : "Jeff Bezos Lifts Veil on His Rocket Company, Blue Origin",
    date : "March 8, 2016",
    summary : "Mr. Bezos introduced reporters to Blue Origin for the first time on Tuesday, offering updates on his space tourism plans and a new engine that is being developed.",
    keywords : ["Bezos  Jeffrey P","Blue Origin","Private Spaceflight","Rocket Science and Propulsion","Space and Astronomy"],
    content : "Occasionally news would be tossed out to the outside world — an award by NASA, a blog post by Mr. Bezos, a video of a successful launch. Last year, the company made a splashy public announcement at Cape Canaveral, Fla., when Blue Origin announced it would launch rockets into orbit from there."
} );
//(13)
t.insert( {
    title : "Jeff Bezos Lifts Veil on His Rocket Company, Blue Origin",
    date : "March 8, 2016",
    summary : "Mr. Bezos introduced reporters to Blue Origin for the first time on Tuesday, offering updates on his space tourism plans and a new engine that is being developed.",
    keywords : ["Bezos  Jeffrey P","Blue Origin","Private Spaceflight","Rocket Science and Propulsion","Space and Astronomy"],
    content : "Like Mr. Musk, Mr. Bezos talks about Blue Origin less as a business than as part of a glorious future for humanity, with millions of people living and working off the planet. It is also a path, he asserted, that humanity must pursue if it is to continue to prosper. His argument was simple: Energy consumption has been rising at 2 or 3 percent a year. Even at that modest rate, within a few centuries, the energy usage would be equal to the energy produced by high-efficiency solar cells covering the entire surface of the planet. 'We’ll be using all of the solar energy that impacts the Earth,' he said. 'That’s an actual limit.'But there is much energy and raw materials to use elsewhere in the solar system, and eventually, he prophesies, there will be the 'great inversion.' Instead of factories on Earth manufacturing sophisticated components that go into tiny machines that go into space, the heavy manufacturing will all be done elsewhere, and Earth, he joked, would be zoned for residential and light industrial use, allowing much of Earth to return to a more natural state. 'It’ll be universities and houses and so on,' he said. That is still far in the future. For now, Blue Origin’s business plans fall in three categories. The first is space tourism, with short hops launching from West Texas on the New Shepard, a competitor to Virgin Galactic, Richard Branson’s space start-up. Space tourism is not just a frivolity for the rich, but a necessary steppingstone to develop the expertise in a new technology, Mr. Bezos said, much like the early days of airplanes or how video games spurred the development of more powerful computer chips. Currently, most rocket companies launch, at most, about a dozen times a year. 'You never get really great at something you do 10, 12 times a year,' Mr. Bezos said. With a small fleet of reusable New Shepard rockets, Blue Origin could be launching dozens of times a year. The other business plans are for selling its rocket engines to other companies like United Launch Alliance, which is planning to use them for the Vulcan, a next-generation rocket to replace the Atlas 5 and Delta 4, and for its own larger rocket to lift payloads to orbit. Mr. Bezos said Blue Origin was quiet not necessarily to be secretive, but to avoid overpromising itself. 'Space is really easy to overhype,' he said. The tour would not be the last time the doors are open. Later this year, Blue Origin will give more details about its designs for the larger rocket that will launch from Cape Canaveral, and Mr. Bezos said there would be an opportunity to watch a test flight of New Shepard in Texas. 'We will not be strangers,' Mr. Bezos said at the end."
} );
//(14)
t.insert( {
    title : "Scott Kelly Says a Year in Orbit Felt Like ‘Forever’",
    date : "March 4, 2016",
    summary : "The astronaut Scott Kelly, back on Earth after 340 days in space, said he was feeling fatigue, soreness and a sensation &#8220;almost like a burning feeling&#8221; on his skin.",
    keywords : ["Kelly  Scott J","International Space Station","Space and Astronomy","National Aeronautics and Space Administration","Kelly  Mark E (1964- )"],
    content : "After nearly a year in space, Scott Kelly, the NASA astronaut who returned to Earth this week, is clear on one thing: It was a long trip."
} );
//(15)
t.insert( {
    title : "Scott Kelly Says a Year in Orbit Felt Like ‘Forever’",
    date : "March 4, 2016",
    summary : "The astronaut Scott Kelly, back on Earth after 340 days in space, said he was feeling fatigue, soreness and a sensation &#8220;almost like a burning feeling&#8221; on his skin.",
    keywords : ["Kelly  Scott J","International Space Station","Space and Astronomy","National Aeronautics and Space Administration","Kelly  Mark E (1964- )"],
    content : "'I think the only big surprise was how long a year is,' Mr. Kelly said at a NASA news conference on Friday. 'It seemed like I lived there forever. It seemed longer than I thought it would be.'He traveled nearly 144 million miles over 340 days while living on the International Space Station, so it is perhaps no surprise that Mr. Kelly is suffering from a sort of ultra jet lag. He said he felt good right after a Soyuz capsule carrying him and two Russian astronauts bumped on the ground in Kazakhstan, better than he did on his return in 2011 from a 159-day stay on the space station. But in the days since, fatigue and soreness have set in. 'A lot higher than last time,' he said. He said his skin, not accustomed to touching much while floating in orbit, felt very sensitive, 'almost like a burning feeling.'"
} );
//(16)
t.insert( {
    title : "Scott Kelly Says a Year in Orbit Felt Like ‘Forever’",
    date : "March 4, 2016",
    summary : "The astronaut Scott Kelly, back on Earth after 340 days in space, said he was feeling fatigue, soreness and a sensation &#8220;almost like a burning feeling&#8221; on his skin.",
    keywords : ["Kelly  Scott J","International Space Station","Space and Astronomy","National Aeronautics and Space Administration","Kelly  Mark E (1964- )"],
    content : "What those initial impressions mean, if anything, for the prospects of future missions to distant destinations like asteroids or Mars is something NASA researchers hope to glean from data collected during the stay of Mr. Kelly and Mikhail Kornienko, a Russian astronaut who went up and came back with him."
} );
//(17)
t.insert( {
    title : "Scott Kelly Says a Year in Orbit Felt Like ‘Forever’",
    date : "March 4, 2016",
    summary : "The astronaut Scott Kelly, back on Earth after 340 days in space, said he was feeling fatigue, soreness and a sensation &#8220;almost like a burning feeling&#8221; on his skin.",
    keywords : ["Kelly  Scott J","International Space Station","Space and Astronomy","National Aeronautics and Space Administration","Kelly  Mark E (1964- )"],
    content : "But that will take time. 'The data analysis is only now beginning in earnest,' John Charles, an associate manager for NASA’s human research program, said Friday. One of the unanswered concerns is how much astronauts could be expected to do right after landing on Mars as they readjust to gravity."
} );
//(18)
t.insert( {
    title : "Scott Kelly Says a Year in Orbit Felt Like ‘Forever’",
    date : "March 4, 2016",
    summary : "The astronaut Scott Kelly, back on Earth after 340 days in space, said he was feeling fatigue, soreness and a sensation &#8220;almost like a burning feeling&#8221; on his skin.",
    keywords : ["Kelly  Scott J","International Space Station","Space and Astronomy","National Aeronautics and Space Administration","Kelly  Mark E (1964- )"],
    content : "Mr. Kelly, 52, now holds the record for the longest single stay in space for a NASA astronaut, and the most time overall: 520 days over four missions. (A Russian, Valeri Polyakov, holds the overall record for the longest single spaceflight: nearly 438 days.)NASA and the Russian space agency collaborated on a series of scientific studies to examine how extended weightlessness changes bones, muscles, nerves and the cardiovascular system. 'You name it, we’re interested in all of it,' Dr. Charles said. In addition, NASA aims to compare changes, including genetic mutations, between Mr. Kelly and his twin brother, Mark, a retired NASA astronaut. 'By looking at Mark’s results collected over the course of the year, we can see what the normal variations might be,' Dr. Charles said. Where genetic changes were faster in Scott Kelly, 'those will tell us what areas to investigate in the future.'One experiment looked at 'fluid shift' — the movement of water from the lower body toward the head when there is no gravity to hold things down. Increased pressure in the skull could cause the flattening of the eyeballs seen in some astronauts, pushing their vision toward farsightedness."
} );
//(19)
t.insert( {
    title : "Scott Kelly Says a Year in Orbit Felt Like ‘Forever’",
    date : "March 4, 2016",
    summary : "The astronaut Scott Kelly, back on Earth after 340 days in space, said he was feeling fatigue, soreness and a sensation &#8220;almost like a burning feeling&#8221; on his skin.",
    keywords : ["Kelly  Scott J","International Space Station","Space and Astronomy","National Aeronautics and Space Administration","Kelly  Mark E (1964- )"],
    content : "While aboard the space station, Mr. Kelly and Mr. Kornienko used a Russian contraption that, through negative pressure, attempts to draw fluids back down to the legs. 'One of the hypotheses was that shifting of the fluid out of the upper part of the body might have an effect on the shape of the eyeball,' Dr. Charles said. 'Perhaps transiently removing some of that fluid would have caused some sort of rebound in the shape of the eye.'"
} );
//(20)
t.insert( {
    title : "Scott Kelly Says a Year in Orbit Felt Like ‘Forever’",
    date : "March 4, 2016",
    summary : "The astronaut Scott Kelly, back on Earth after 340 days in space, said he was feeling fatigue, soreness and a sensation &#8220;almost like a burning feeling&#8221; on his skin.",
    keywords : ["Kelly  Scott J","International Space Station","Space and Astronomy","National Aeronautics and Space Administration","Kelly  Mark E (1964- )"],
    content : "Dr. Charles said that he had not yet seen any of that data, but that it 'should come back very illuminating and enlightening.'He said he expected the first results from the health studies to start coming out in a year. Many of the blood and urine samples of Mr. Kelly and Mr. Kornienko remain on the space station, awaiting a ride back on the next cargo capsule sent by Space Exploration Technologies, or SpaceX. The SpaceX capsule has a refrigerator to preserve the samples; the Soyuz capsule does not. No plans for future one-year missions have been announced, but Julie Robinson, the program scientist at NASA for space station science, said she would like to see data from 10 to 12 astronauts to draw some robust conclusions about the potential health effects of life in space. Mr. Kelly said this was probably his last mission for NASA — 'We have so many talented people in our office, there’s no reason to fly me again,' he said — but perhaps not his last trip to space. 'Maybe in the next 20 years, you’ll be able to buy a cheap ticket for a little visit,' he said. One thing that is already gone is the 1.5 inches of height he gained in space, where the absence of gravity allows the disks that cushion the spine to expand. Dr. Charles said the fitting of spacesuits and the seats in the Soyuz have to be designed to accommodate growth in space. 'That height difference goes away as soon as they come back to Earth and stand up for the first time,' Dr. Charles said. Mark Kelly explained more succinctly: 'He’s been squished back to normal height.'"
} );
//(21)
t.insert( {
    title : "Stealing a Clear Look at an Elusive Star",
    date : "March 2, 2016",
    summary : "Astronomers released a new image of rare O-type stars visible only using telescopes sensitive to certain wavelengths.",
    keywords : ["Stars and Galaxies","Telescopes and Observatories"],
    content : "Gleaming through these crimson gas clouds are rarely seen, short-lived stars. "
} );
//(22)
t.insert( {
    title : "Stealing a Clear Look at an Elusive Star",
    date : "March 2, 2016",
    summary : "Astronomers released a new image of rare O-type stars visible only using telescopes sensitive to certain wavelengths.",
    keywords : ["Stars and Galaxies","Telescopes and Observatories"],
    content : "Classified as O-type stars, they only burn for tens of millions of years before disappearing. For every three million stars in the Milky Way, only one is O-type. They are shrouded not only in dust, but also mystery. Astronomers are unsure how these giant stars form, and they don’t often get the chance to observe them. The ones buried in the red nebular cloud RCW 106 seen at the center of this image released Wednesday are some 12,000 light-years away, according to the European Southern Observatory. They measure dozens of times bigger than the sun and are nearly a million times brighter. Researchers are interested in understanding how they devour enough gas to sustain their size and power. They burn so bright that they shine outside the realm of visible light: they are only visible under telescopes sensitive to certain wavelengths, which adds to their elusiveness."
} );
//(23)
t.insert( {
    title : "It’s Very Unlikely That Asteroid 2013 TX68 Will Hit Earth",
    date : "March 2, 2016",
    summary : "The asteroid, estimated to be 100 feet in diameter, is expected to zip past Earth sometime next week. But not close enough to panic.",
    keywords : ["Asteroids"],
    content : "We’re going to get an extraterrestrial visitor, perhaps early next week, when asteroid 2013 TX68 zips past Earth. There’s been some agitated chatter  about just how close the speeding rock will get. 'What we know for sure is that it will not collide,' said Sean Marshall, a Cornell University doctoral candidate who observes near-Earth asteroids. 'So don’t panic.'The size of 2013 TX68 is estimated to be 100 feet in diameter, about the size of a large yacht. This makes it slightly larger than the speeding rock that in 2013 exploded over the Russian city Chelyabinsk, damaging hundreds of buildings and injuring at least 1,500 people, mainly as windows shattered. The exact time and distance of the closest approach will not be known until after the encounter. Mr. Marshall said Tuesday that 2013 TX68 could zip through Earth’s ring of geostationary satellites — which orbit at a height of 22,300 miles — or travel as far away as 40 times the distance to the moon."
} );
//(24)
t.insert( {
    title : "It’s Very Unlikely That Asteroid 2013 TX68 Will Hit Earth",
    date : "March 2, 2016",
    summary : "The asteroid, estimated to be 100 feet in diameter, is expected to zip past Earth sometime next week. But not close enough to panic.",
    keywords : ["Asteroids"],
    content : "NASA’s calculations last month put the flyby at around March 8. 2013 TX68 is not on the agency’s list of potentially hazardous asteroids, which come closest to Earth and are big enough to survive atmospheric re-entry and cause damage on a regional scale. Their diameters are greater than 330 feet, or about 100 meters."
} );
//(25)
t.insert( {
    title : "It’s Very Unlikely That Asteroid 2013 TX68 Will Hit Earth",
    date : "March 2, 2016",
    summary : "The asteroid, estimated to be 100 feet in diameter, is expected to zip past Earth sometime next week. But not close enough to panic.",
    keywords : ["Asteroids"],
    content : "But the extraterrestrial rock might eventually make the hazard list if new observations made during this month’s close pass reveal its diameter to be larger than expected. 'It’s possible but unlikely,' Mr. Marshall said of the larger size in an interview. 'Still, you wouldn’t want to be there if it hit. It could still wipe out a city.'"
} );
//(26)
t.insert( {
    title : "How Moon Dust Languished in a Downing Street Cupboard",
    date : "Jan. 31, 2016",
    summary : "The moon dust’s fate was revealed by Britain’s National Archives, which released 178 pages of correspondence on the subject going back 30 years.",
    keywords : ["Space and Astronomy","Archives and Records","Moon","Great Britain","National Aeronautics and Space Administration","National Archives and Records Administration","Nixon  Richard Milhous","Heath  Edward"],
    content : "It was a space problem of sorts for the new British prime minister: where to put the minuscule sample of the lunar dust that America’s Apollo 11 astronauts had scooped from the surface of the moon in their giant leap for mankind?"
} );
//(27)
t.insert( {
    title : "How Moon Dust Languished in a Downing Street Cupboard",
    date : "Jan. 31, 2016",
    summary : "The moon dust’s fate was revealed by Britain’s National Archives, which released 178 pages of correspondence on the subject going back 30 years.",
    keywords : ["Space and Astronomy","Archives and Records","Moon","Great Britain","National Aeronautics and Space Administration","National Archives and Records Administration","Nixon  Richard Milhous","Heath  Edward"],
    content : "The answer was a cupboard in the prime minister’s residence at 10 Downing Street, where the four moon specks, a gift to Britain from the United States, languished for several years in the 1970s. The moon dust’s fate was revealed recently by the British National Archives, which released 178 pages of correspondence on the subject from the prime minister’s office dating back 30 years. Of the 48 pounds of rocks that Neil Armstrong and Buzz Aldrin lugged back to Earth in August 1969, mostly for scientific analysis, plaques with four pieces weighing 50 milligrams, just over two-thousandths of an ounce, were conferred by the White House as good-will gifts on each of the leaders of 135 countries, the United Nations and all 50 states. President Richard M. Nixon presented Prime Minister Harold Wilson with the moon memento in Washington in January 1970: four tiny pebbles, the size of rice grains, mounted on an artless, 9-by-11-inch commemorative wooden plaque. The display is unlikely to win any design awards. Still, nearly a half-century ago when space travel was largely the stuff of science fiction, the extraterrestrial souvenir was in great demand by museums across Britain. Mr. Wilson wanted the display to remain at 10 Downing Street in perpetuity, but agreed to lend it first to the Science Museum in London and then to regional museums around Britain. It returned to No. 10 in 1973. Mr. Wilson’s successor, Edward Heath, also wanted the display to remain at Downing Street, but where?'I don’t much like the idea of it being in one of the public rooms,' he said. Out of sight, apparently, was not out of mind, and after Margaret Thatcher became prime minister in 1979, the question of what to do with the Nixon gift intruded on the affairs of state once again. 'Unfortunately, Mr. Heath was unable to identify a sufficiently public spot in No. 10 aesthetically suitable for locating a contemporary-style display stand containing moon rock samples,' an aide advised Mrs. Thatcher. Then the aide revealed an embarrassing truth. 'I have now unearthed this exhibit from the cupboard in which it has languished for several years,' the aide wrote. Perhaps the Science Museum would want it back as a semi-permanent loan? Once was enough, said Dame Margaret Weston, the museum’s director, back when a lunar landing was a novelty. According to an adviser to the prime minister, 'As a curiosity (ranking with a toothbrush once used by Napoleon which they have at the museum) they would always be very willing to give it a home if we no longer wanted the exhibit at No. 10, but more significant specimens of moon rock are apparently available from NASA if required as part of a scientific display.'Last week, John Pryor, a spokesman for No. 10, said that the display was and has for 'some time' been in an anteroom accessible to visitors and guests near the first-floor study (where Mrs. Thatcher used to work and where Winston Churchill slept)."
} );
//(28)
t.insert( {
    title : "How Moon Dust Languished in a Downing Street Cupboard",
    date : "Jan. 31, 2016",
    summary : "The moon dust’s fate was revealed by Britain’s National Archives, which released 178 pages of correspondence on the subject going back 30 years.",
    keywords : ["Space and Astronomy","Archives and Records","Moon","Great Britain","National Aeronautics and Space Administration","National Archives and Records Administration","Nixon  Richard Milhous","Heath  Edward"],
    content : "Despite its stay in the Downing Street cupboard, Britain was grateful for the gift, said Sir Anthony Seldon, No. 10’s official historian and the vice chancellor of the University of Buckingham. 'It is doubly interesting, both because of its scientific importance as an exhibit bringing part of an alien land mass into the most historic building in the world,' he said, and 'as an indicator of the relationship between Nixon and Wilson, which was at a postwar low point of the special relationship between Britain and the United States.''Journalists will make of the story what they will, but the truth is that it was a genuinely valuable gift by President Nixon of something of colossal scientific and historic interest, especially compared to most gifts the P.M. is given,' he said. 'The problems arise,' Mr. Seldon said, 'just from lack of space.'But even as the display was being rotated among other museums in the early 1970s, the Science Museum was lowering expectations. The specimens were so small they were magnified under a golf-ball size plastic hemisphere and the museum noted in a memo that some viewers thought they looked like tea leaves or coal. 'So, in order to counteract bathos,' a memo from the Science Museum said, photos and rocket models should be included with the display 'in order to relate the unimpressive-looking particles to the remarkable human and technological feat of the moon landing.'The prime minister’s office also assessed the risks of sending the display to the Ulster Museum where a Union Jack that had traveled to the moon 'would provide rather a good object for some demonstration of force by dissident movements' and where its theft or damage would 'undoubtedly attract disproportionate attention.'The Home Office concluded that it would be 'reasonably safe.'In fact, the British lunar keepsake endured longer than the moon rocks that President Nixon gave the Republic of Ireland. They were on display in the Dunsink Observatory in Dublin, when a fire broke out in 1977. The debris, including the display, was accidentally discarded in a local landfill."
} );
//(29)
t.insert( {
    title : "Scott Kelly Poised to Set NASA Record for Consecutive Days in Space",
    date : "Feb. 25, 2016",
    summary : "When Scott J. Kelly returns to Earth next week after 340 days in space, he will be studied for insights into the health issues long space flights, like to Mars, might pose.",
    keywords : ["Space and Astronomy","International Space Station","Kelly  Scott J","National Aeronautics and Space Administration","Kelly  Mark E (1964- )"],
    content : "In less than a week, Scott J. Kelly will once again feel weight."
} );
//(30)
t.insert( {
    title : "Scott Kelly Poised to Set NASA Record for Consecutive Days in Space",
    date : "Feb. 25, 2016",
    summary : "When Scott J. Kelly returns to Earth next week after 340 days in space, he will be studied for insights into the health issues long space flights, like to Mars, might pose.",
    keywords : ["Space and Astronomy","International Space Station","Kelly  Scott J","National Aeronautics and Space Administration","Kelly  Mark E (1964- )"],
    content : "On Tuesday, a day after turning over command of the International Space Station to a fellow NASA astronaut, Timothy L. Kopra, he willclimb into a Russian Soyuz capsule. A few hours later, he will land in Kazakhstan, ending 340 consecutive days in space — a record for a NASA astronaut. The previous record was 215 days, reached by Michael Lopez-Alegria during a trip to the space station in 2006 and 2007. Counting his three previous trips to space, Mr. Kelly will have spent a total of 520 days in orbit. 'We’ll learn a lot about longer-duration spaceflight,' Mr. Kelly said during a news conference on Thursday broadcast on NASA Television. 'I’d like to think this is another of many steppingstones to landing on Mars sometime in our future.'Some of the memorable sights from space included auroras and Hurricane Patricia in October, Mr. Kelly said."
} );
//(31)
t.insert( {
    title : "Scott Kelly Poised to Set NASA Record for Consecutive Days in Space",
    date : "Feb. 25, 2016",
    summary : "When Scott J. Kelly returns to Earth next week after 340 days in space, he will be studied for insights into the health issues long space flights, like to Mars, might pose.",
    keywords : ["Space and Astronomy","International Space Station","Kelly  Scott J","National Aeronautics and Space Administration","Kelly  Mark E (1964- )"],
    content : "'The more I look at earth, at certain parts of earth, the more I feel more of an environmentalist,' Mr. Kelly said. 'There are definitely areas where the earth is covered with pollution almost all the time, and it’s not good for any of us.'"
} );
//(32)
t.insert( {
    title : "Scott Kelly Poised to Set NASA Record for Consecutive Days in Space",
    date : "Feb. 25, 2016",
    summary : "When Scott J. Kelly returns to Earth next week after 340 days in space, he will be studied for insights into the health issues long space flights, like to Mars, might pose.",
    keywords : ["Space and Astronomy","International Space Station","Kelly  Scott J","National Aeronautics and Space Administration","Kelly Mark E"],
    content : "Until now, astronauts have spent six months, give or take, on the International Space Station. By studying Mr. Kelly and Mikhail Kornienko, a Russian astronaut who is also part of this nearly one-year mission, scientists hope to gain a better understanding of what health issues astronauts might encounter during the six to eight months a trip to Mars would take. In the absence of gravity, bones become more brittle, fluids in the body move upward and vision sometimes shifts toward farsightedness. Scientists are also interested in how quickly the astronauts readjust to gravity. After landing, Mr. Kelly will have a series of tests on his balance, including navigating an obstacle course. Mr. Kelly said he was particularly intrigued by research on genetic changes that occur in space, which scientists will try to glean from comparisons with his twin brother, Mark E. Kelly, a retired NASA astronaut. But with just two test subjects who spent 340 days in orbit, there will not be definitive answers."
} );
//(33)
t.insert( {
    title : "Scott Kelly Poised to Set NASA Record for Consecutive Days in Space",
    date : "Feb. 25, 2016",
    summary : "When Scott J. Kelly returns to Earth next week after 340 days in space, he will be studied for insights into the health issues long space flights, like to Mars, might pose.",
    keywords : ["Space and Astronomy","International Space Station","Kelly  Scott J","National Aeronautics and Space Administration","Kelly  Mark E (1964- )"],
    content : "'We simply don’t have that many people flying in space,' Dr. Charles W. Lloyd, a NASA manager for communications about the agency’s human research program, said in an interview. 'But we still need to understand how space potentially affects you.'Mr. Kelly is far short of the overall record for longest human space mission: nearly 438 days, by Valeri Polyakov on the Russian Mir space station in 1994 and 1995. 'Yeah, I could go another 100 days,' Mr. Kelly said when asked to reflect about Dr. Polyakov’s record and whether he would be up for a longer stay. 'I could go another year if I had to.'Still, he conceded that the space station never fully became like home. 'Even after I’ve been here nearly a year, you don’t feel perfectly normal,' he said. 'There’s always a lingering something you feel. It’s not necessarily uncomfortable, but it is a harsh environment. For instance, having no running water. It’s kind of like I’ve been in the woods camping for a year.'Once NASA is done performing tests on him, Mr. Kelly said he was looking forward to jumping in his pool. He said the hardest part of the mission was being physically cut off from friends and family. He said that for a Mars mission, in which crew members would be housed in a space much smaller than the space station, the privacy of their personal space would be important. 'Making that private area as perfect as possible, I think, will go a long way towards reducing fatigue, reducing stress and helping for a successful mission,' Mr. Kelly said."
} );
//(34)
t.insert( {
    title : "So You Wanna Be a NASA Astronaut? Pretty Unlikely",
    date : "Feb. 19, 2016",
    summary : "By the deadline on Thursday, more than 18,300 people had submitted their résumés in hopes of joining the next group of NASA astronauts.",
    keywords : ["National Aeronautics and Space Administration","Space and Astronomy"],
    content : "More people than ever are hoping they have 'The Right Stuff,' and more people than ever will be disappointed that they do not. By the deadline on Thursday, more than 18,300 people had submitted their résumés in hopes of joining the next group of NASA astronauts. That includes 4,000 procrastinators who applied in the final 48 hours. 'It was certainly beyond our expectations,' said Anne Roemer, the NASA official in charge of the selection process. It is close to three times the number who responded the last time NASA put out a call for astronauts, in 2011. That time around, after sifting through 6,100 candidates, NASA selected eight, an acceptance rate of 0.13 percent. You have a much better chance of getting into Princeton or M.I.T., which admit about 8 percent of applicants."
} );
//(35)
t.insert( {
    title : "So You Wanna Be a NASA Astronaut? Pretty Unlikely",
    date : "Feb. 19, 2016",
    summary : "By the deadline on Thursday, more than 18,300 people had submitted their résumés in hopes of joining the next group of NASA astronauts.",
    keywords : ["National Aeronautics and Space Administration","Space and Astronomy"],
    content : "This time, the odds will be even lower. NASA will first toss out applicants who do not meet minimum requirements such as having a college degree in mathematics, science or engineering. Last time, that winnowed out 1,300. Then actual people, mostly NASA astronauts and not some computer algorithm, will take a look at each and every one of the remaining applications. Of those, about 400 to 600 will be deemed 'most qualified' and have their references checked. A selection board will then invite about 120 people to the Johnson Space Center in Houston for interviews. 'We’ve never gotten 18,000 applications, so I don’t know if that number may need to move up this time,' Ms. Roemer said. 'We’ll have to play that by ear as we start going through the applications.'NASA plans to announce eight to 14 new astronauts about halfway through 2017. The previous record for the number of astronaut applications was 8,000 in 1978 when the space shuttle program was gearing up for its first launch. At present, NASA’s human presence in space is modest — a couple of astronauts going in circles around Earth on the International Space Station. But NASA has been exuberantly proclaiming that it will send astronauts to Mars in two decades or so, although that is currently more aspirational than actual. Still, that is a dream strong enough to attract people hoping to travel far, far away."
} );
//(36)
t.insert( {
    title : "A Black Hole That Has Stopped Swallowing Stars",
    date : "Feb. 22, 2016",
    summary : "At the core of a galaxy some 300 million light-years away is a supermassive, inactive black hole that is about 21 billion times the size of the sun.",
    keywords : ["Black Holes (Space)","Space and Astronomy"],
    content : "The brightest orb in the center of this photograph captured by the Hubble Space Telescope is a galaxy some 300 million light-years away called NGC 4889."
} );
//(37)
t.insert( {
    title : "A Black Hole That Has Stopped Swallowing Stars",
    date : "Feb. 22, 2016",
    summary : "At the core of a galaxy some 300 million light-years away is a supermassive, inactive black hole that is about 21 billion times the size of the sun.",
    keywords : ["Black Holes (Space)","Space and Astronomy"],
    content : "At its core rests a supermassive black hole that is about 21 billion times the size of the sun, according to NASA and the European Space Agency."
} );
//(38)
t.insert( {
    title : "A Black Hole That Has Stopped Swallowing Stars",
    date : "Feb. 22, 2016",
    summary : "At the core of a galaxy some 300 million light-years away is a supermassive, inactive black hole that is about 21 billion times the size of the sun.",
    keywords : ["Black Holes (Space)","Space and Astronomy"],
    content : "Though you cannot see it in this image because black holes swallow light, NASA said it was one of the largest star devourers ever observed. It dwarfs the black hole that twists at the center of our Milky Way, which researchers estimate is only four million times the size of the sun. The monster once feasted upon many of its host galaxy’s stars, gas and dust, but is no longer active. The diameter of its event horizon, or the edge of where light is trapped and cannot escape, measured 80 billion miles, and its intense gravitational grasp was capable of heating material to millions of degrees, according to NASA."
} );
//(39)
t.insert( {
    title : "An Expanding Universe of Space Apps",
    date : "Feb. 3, 2016",
    summary : "While becoming an astronaut is out of reach for most of us, there are plenty of apps that can take your mind on a journey to the final frontier.",
    keywords : ["Mobile Applications","Space and Astronomy","Stars and Galaxies","National Aeronautics and Space Administration","Earth","Planets","Jet Propulsion Laboratory","Computers and the Internet","Photography","European Space Agency"],
    content : "FROM the reusable rockets by SpaceX to the stunning photos of dim and distant Pluto, space is all over the news. While becoming an astronaut is out of reach for most of us, there are plenty of apps that can take your mind on a journey to the final frontier."
} );
//(40)
t.insert( {
    title : "An Expanding Universe of Space Apps",
    date : "Feb. 3, 2016",
    summary : "While becoming an astronaut is out of reach for most of us, there are plenty of apps that can take your mind on a journey to the final frontier.",
    keywords : ["Mobile Applications","Space and Astronomy","Stars and Galaxies","National Aeronautics and Space Administration","Earth","Planets","Jet Propulsion Laboratory","Computers and the Internet","Photography","European Space Agency"],
    content : "Start with the official NASA app, which is easy to navigate and is free on iOS and Android, and for Amazon Fire devices. The app features photos and videos, news about current missions, NASA tweets and more. Using your location on Earth, the app can even calculate when you’ll next be able to spot the International Space Station. My favorite feature is the live video feed from the station itself: There’s something humbling and uplifting about seeing our planet from that vantage point in real time. The NASA app is educational, and it’s both fun and enlightening to browse through the news and recent images from NASA’s many missions. Although the app is inherently technology-focused, the interface and controls seem slightly old-fashioned. Still, exploring the NASA app is more likely to enrich your brain than playing a round of Angry Birds Space. Space Images (free on iOS and Android) offers a different way to learn about space. Coming from NASA’s famed Jet Propulsion Laboratory, this app catalogs recent images of planets, moons, asteroids and other features of the cosmos, captured by NASA-affiliated space programs. The app has easy-to-use, icon-based navigation, and you can sort by either the top-rated images or the latest photos from NASA, like those still arriving from the Dawn spacecraft’s mission to the dwarf planet Ceres. You can zoom in to explore the images in greater detail, and explanations about the photos are available with just a tap or two. This app is science-forward, meaning it requires some concentration. It won’t appeal to everyone, and children using the app may need an adult to explain some of the material. While the NASA apps offer interesting photos of our planet snapped from space, for a truly 21st-century space image experience check out EO Science 2.0 AR from the European Space Agency (free on iOS and Android). To use it, you first print out a special image and lay it on a surface in front of you. Then you launch the app, click start and point your smartphone’s camera at the printout."
} );
//(41)
t.insert( {
    title : "An Expanding Universe of Space Apps",
    date : "Feb. 3, 2016",
    summary : "While becoming an astronaut is out of reach for most of us, there are plenty of apps that can take your mind on a journey to the final frontier.",
    keywords : ["Mobile Applications","Space and Astronomy","Stars and Galaxies","National Aeronautics and Space Administration","Earth","Planets","Jet Propulsion Laboratory","Computers and the Internet","Photography","European Space Agency"],
    content : "The app then shows you a 3-D augmented reality image of Earth spinning over the printout. You can move your phone to look around or zoom in on the image. Tapping on Earth changes the image to show different maps incorporating data obtained from space, including height and depth, land cover, and ocean chlorophyll concentrations."
} );
//(42)
t.insert( {
    title : "An Expanding Universe of Space Apps",
    date : "Feb. 3, 2016",
    summary : "While becoming an astronaut is out of reach for most of us, there are plenty of apps that can take your mind on a journey to the final frontier.",
    keywords : ["Mobile Applications","Space and Astronomy","Stars and Galaxies","National Aeronautics and Space Administration","Earth","Planets","Jet Propulsion Laboratory","Computers and the Internet","Photography","European Space Agency"],
    content : "EO Science 2.0 AR won’t keep you occupied for long: While it’s visually attractive, it doesn’t contain much real science or explanation — you’ll have to search online for that information to better understand the maps. But the app is a lot of fun and will excite younger users. For a completely different way to keep up with the latest news from orbit, take a look at Space, Astronomy and NASA News from Newsfusion, which is free on iOS and Android. The app aggregates news stories from a long list of online sources and covers NASA and European Space Agency news as well as breakthroughs in space science. Its interface has big, bold images and uses simple taps and swipes to navigate. You can even choose filters to see only the space news that’s relevant to your interests."
} );
//(43)
t.insert( {
    title : "An Expanding Universe of Space Apps",
    date : "Feb. 3, 2016",
    summary : "While becoming an astronaut is out of reach for most of us, there are plenty of apps that can take your mind on a journey to the final frontier.",
    keywords : ["Mobile Applications","Space and Astronomy","Stars and Galaxies","National Aeronautics and Space Administration","Earth","Planets","Jet Propulsion Laboratory","Computers and the Internet","Photography","European Space Agency"],
    content : "And remember that winter nights can be perfect for exploring space using nothing more than your own eyes, if the weather is cooperative and skies are clear. To help you understand what you’re seeing up there, check out my new favorite astronomy app: Night Sky."
} );
//(44)
t.insert( {
    title : "An Expanding Universe of Space Apps",
    date : "Feb. 3, 2016",
    summary : "While becoming an astronaut is out of reach for most of us, there are plenty of apps that can take your mind on a journey to the final frontier.",
    keywords : ["Mobile Applications","Space and Astronomy","Stars and Galaxies","National Aeronautics and Space Administration","Earth","Planets","Jet Propulsion Laboratory","Computers and the Internet","Photography","European Space Agency"],
    content : "Billing itself as 'your own personal planetarium,' Night Sky acts like a virtual reality guide to what you can see in the sky above you: When you hold your phone up it shows a view of the stars as seen from your location. It also contains news about coming stargazing events. The app’s detailed weather forecasting section predicts naked-eye star viewing conditions for the week ahead. And if you pay to upgrade to the pro version, the app offers even more features, including very detailed information about galaxies, planets, constellations, stars and satellites, all displayed in an attractive, image-heavy interface. Night Sky Lite is free on iOS and Android, but is limited in its features. The more complete versions cost $1 and up. Have fun traveling to infinity and beyond from the comfort of your armchair.  Microsoft has a new, free iOS app intended to deliver news that’s relevant to your professional interests. The app, News Pro, connects to your LinkedIn and Facebook pages to learn about your work, then chooses news stories for you from various online sources. Released late last month, the app may be a bit buggy, but it’s an interesting way to consume news."
} );
//(45)
t.insert( {
    title : "China Telescope to Displace 9,000 Villagers in Hunt for Extraterrestrials",
    date : "Feb. 17, 2016",
    summary : "Thousands of villagers in Guizhou Province will relocate to make room for a $184 million telescope to detect signs of alien life and gather other data about space.",
    keywords : ["Guizhou (China)","Telescopes and Observatories","Extraterrestrial Life","Space and Astronomy","Chinese Academy of Sciences","China","FAST"],
    content : "BEIJING — More than 9,000 Chinese villagers are leaving their homes to make way for aliens — or for the possible echoes of them, at least."
} );
//(46)
t.insert( {
    title : "China Telescope to Displace 9,000 Villagers in Hunt for Extraterrestrials",
    date : "Feb. 17, 2016",
    summary : "Thousands of villagers in Guizhou Province will relocate to make room for a $184 million telescope to detect signs of alien life and gather other data about space.",
    keywords : ["Guizhou (China)","Telescopes and Observatories","Extraterrestrial Life","Space and Astronomy","Chinese Academy of Sciences","China","FAST"],
    content : "It is not a colonization plan from outer space. The Chinese government is relocating the villagers as it finishes building the world’s biggest radio telescope, one of whose purposes is to detect signs of extraterrestrial life. The telescope will be 500 meters, or 1,640 feet, in diameter, making it by far the largest instrument of its kind in the world. It is called FAST, short for 500-meter aperture spherical telescope, and will cost an estimated 1.2 billion renminbi, or $184 million, to erect. The government hopes to complete it by September."
} );
//(47)
t.insert( {
    title : "China Telescope to Displace 9,000 Villagers in Hunt for Extraterrestrials",
    date : "Feb. 17, 2016",
    summary : "Thousands of villagers in Guizhou Province will relocate to make room for a $184 million telescope to detect signs of alien life and gather other data about space.",
    keywords : ["Guizhou (China)","Telescopes and Observatories","Extraterrestrial Life","Space and Astronomy","Chinese Academy of Sciences","China","FAST"],
    content : "The mass relocation was announced on Tuesday in a report by Xinhua, the state news agency. The report said officials were moving 2,029 families, a total of 9,110 people, who live within about three miles of the telescope in the area of Pingtang and Luodian Counties in the southwestern province of Guizhou. Depopulating the area will create 'a sound electromagnetic wave environment' for the telescope, Xinhua said. Officials plan to give each person the equivalent of $1,800 for housing compensation, the report said. Guizhou is one of China’s poorest provinces."
} );
//(48)
t.insert( {
    title : "China Telescope to Displace 9,000 Villagers in Hunt for Extraterrestrials",
    date : "Feb. 17, 2016",
    summary : "Thousands of villagers in Guizhou Province will relocate to make room for a $184 million telescope to detect signs of alien life and gather other data about space.",
    keywords : ["Guizhou (China)","Telescopes and Observatories","Extraterrestrial Life","Space and Astronomy","Chinese Academy of Sciences","China","FAST"],
    content : "Forced relocations for large projects are common across China, and so are complaints about them and about the amount of compensation offered. The Three Gorges Dam displaced more than one million people along the Yangtze River, for example, and the middle route of the gargantuan South-North Water Diversion Project has resulted in the relocation of 350,000 people to make way for a series of canals. The Chinese government has announced ambitious plans for its space program, at a time when the American one’s direction is uncertain. China aims to put an astronaut on the moon and a space station in orbit. The FAST project is another important element in the larger plan. Some official Chinese news reports about the project have emphasized the search for alien life, but the telescope’s main scientific work will be somewhat less romantic, gathering large amounts of new data on a wide range of physical phenomena in space including pulsars, galaxies, black holes and gas clouds."
} );
//(49)
t.insert( {
    title : "China Telescope to Displace 9,000 Villagers in Hunt for Extraterrestrials",
    date : "Feb. 17, 2016",
    summary : "Thousands of villagers in Guizhou Province will relocate to make room for a $184 million telescope to detect signs of alien life and gather other data about space.",
    keywords : ["Guizhou (China)","Telescopes and Observatories","Extraterrestrial Life","Space and Astronomy","Chinese Academy of Sciences","China","FAST"],
    content : "The telescope is being built in a wide depression among karst hills. The site is far from any large city, and ideal for picking up radio transmissions from the sky, the Xinhua report said. Scientists began looking for a suitable site for the project in 1994. If the truth is out there, some Chinese scientists are confident that the giant telescope will find it. For decades, professional and amateur scientists have combed the data gathered by the largest currently operational radio telescope in the world, the 53-year-old Arecibo Observatory in Puerto Rico, hoping to find traces of intelligent life that, like mankind, may be advertising its existence to the universe through radio emissions. But they have yet to find any sign."
} );
//(50)
t.insert( {
    title : "China Telescope to Displace 9,000 Villagers in Hunt for Extraterrestrials",
    date : "Feb. 17, 2016",
    summary : "Thousands of villagers in Guizhou Province will relocate to make room for a $184 million telescope to detect signs of alien life and gather other data about space.",
    keywords : ["Guizhou (China)","Telescopes and Observatories","Extraterrestrial Life","Space and Astronomy","Chinese Academy of Sciences","China","FAST"],
    content : "'With a larger signal receiving area and more flexibility, FAST will be able to scan two times more sky area than Arecibo, with three to five times higher sensitivity,' Li Di, a chief scientist with the National Astronomical Observatories under the Chinese Academy of Sciences, told China Daily last year."
} );
//(51)
t.insert( {
    title : "China Telescope to Displace 9,000 Villagers in Hunt for Extraterrestrials",
    date : "Feb. 17, 2016",
    summary : "Thousands of villagers in Guizhou Province will relocate to make room for a $184 million telescope to detect signs of alien life and gather other data about space.",
    keywords : ["Guizhou (China)","Telescopes and Observatories","Extraterrestrial Life","Space and Astronomy","Chinese Academy of Sciences","China","FAST"],
    content : "The new telescope should be able to pick up all kinds of radio signals more clearly from sources much farther away than can the Arecibo dish, which is 300 meters (about 1,000 feet) in diameter."
} );
//(52)
t.insert( {
    title : "China Telescope to Displace 9,000 Villagers in Hunt for Extraterrestrials",
    date : "Feb. 17, 2016",
    summary : "Thousands of villagers in Guizhou Province will relocate to make room for a $184 million telescope to detect signs of alien life and gather other data about space.",
    keywords : ["Guizhou (China)","Telescopes and Observatories","Extraterrestrial Life","Space and Astronomy","Chinese Academy of Sciences","China","FAST"],
    content : "In November, scientists successfully tested the new telescope’s 'retina,' which weighs 33 tons and is suspended 460 to 525 feet above the reflector dish, which was half-finished at the time, China Daily reported. The telescope is made up of 4,500 mostly triangular panels that measure about 36 feet on a side, the report said, which together create an immense parabolic dish. Scientists will be able to adjust the panels’ positions to alter the shape of the dish and reflect radio signals from distant parts of the universe to a single focal point for detection and study."
} );
//(53)
t.insert( {
    title : "China Telescope to Displace 9,000 Villagers in Hunt for Extraterrestrials",
    date : "Feb. 17, 2016",
    summary : "Thousands of villagers in Guizhou Province will relocate to make room for a $184 million telescope to detect signs of alien life and gather other data about space.",
    keywords : ["Guizhou (China)","Telescopes and Observatories","Extraterrestrial Life","Space and Astronomy","Chinese Academy of Sciences","China","FAST"],
    content : "Mr. Li told China Daily that engineers were aiming to install all the panels by June and complete debugging the antenna by September. 'Ultimately, exploring the unknown is the nature of mankind,' he said, adding that it was 'as visceral as feeding and clothing ourselves.''It drives us to a greater future,' he said."
} );
//(54)
t.insert( {
    title : "Finding Beauty in the Darkness",
    date : "Feb. 11, 2016",
    summary : "Einstein’s 'ripples' should matter to everyone — not just physicists.",
    keywords : ["Laser Interferometer Gravitational-Wave Observatory (LIGO)","Black Holes (Space)","Gravitation and Gravity","Physics","Einstein  Albert"],
    content : "WITH presidential primaries in full steam, with the country wrapped up in concern about the economy, immigration and terrorism, one might wonder why we should care about the news of a minuscule jiggle produced by an event in a far corner of the universe."
} );
//(55)
t.insert( {
    title : "Finding Beauty in the Darkness",
    date : "Feb. 11, 2016",
    summary : "Einstein’s 'ripples' should matter to everyone — not just physicists.",
    keywords : ["Laser Interferometer Gravitational-Wave Observatory (LIGO)","Black Holes (Space)","Gravitation and Gravity","Physics","Einstein  Albert"],
    content : "The answer is simple. While the political displays we have been treated to over the past weeks may reflect some of the worst about what it means to be human, this jiggle, discovered in an exotic physics experiment, reflects the best. Scientists overcame almost insurmountable odds to open a vast new window on the cosmos. And if history is any guide, every time we have built new eyes to observe the universe, our understanding of ourselves and our place in it has been forever altered."
} );
//(56)
t.insert( {
    title : "Finding Beauty in the Darkness",
    date : "Feb. 11, 2016",
    summary : "Einstein’s 'ripples' should matter to everyone — not just physicists.",
    keywords : ["Laser Interferometer Gravitational-Wave Observatory (LIGO)","Black Holes (Space)","Gravitation and Gravity","Physics","Einstein  Albert"],
    content : "When Galileo turned his telescope toward Jupiter in 1609, he observed moons orbiting the giant planet, a discovery that destroyed the Aristotelian notion that everything in heaven orbited the Earth. When in 1964 Arno Penzias and Robert Wilson of Bell Laboratories detected radio waves emitted by celestial objects, they discovered that the universe began in a fiery Big Bang."
} );
//(57)
t.insert( {
    title : "Finding Beauty in the Darkness",
    date : "Feb. 11, 2016",
    summary : "Einstein’s 'ripples' should matter to everyone — not just physicists.",
    keywords : ["Laser Interferometer Gravitational-Wave Observatory (LIGO)","Black Holes (Space)","Gravitation and Gravity","Physics","Einstein  Albert"],
    content : "One hundred years ago, Albert Einstein used his newly discovered general theory of relativity (which implies that space itself responds to the presence of matter by curving, expanding or contracting) to demonstrate that each time we wave our hands around or move any matter, disturbances in the fabric of space propagate out at the speed of light, as waves travel outward when a rock is thrown into a lake. As these gravitational waves traverse space they will literally cause distances between objects alternately to decrease and increase in an oscillatory manner. This, of course, is far from the realm of human experience. In the absence of alcohol, your living room doesn’t appear to shrink and grow repeatedly. But, in fact, it does. The oscillations in space caused by gravitational waves are so small that those ripples in length had never been seen. And there was every reason to suspect they would never be seen."
} );
//(58)
t.insert( {
    title : "Finding Beauty in the Darkness",
    date : "Feb. 11, 2016",
    summary : "Einstein’s 'ripples' should matter to everyone — not just physicists.",
    keywords : ["Laser Interferometer Gravitational-Wave Observatory (LIGO)","Black Holes (Space)","Gravitation and Gravity","Physics","Einstein  Albert"],
    content : "Yet on Thursday, the Laser Interferometer Gravitational-Wave Observatory, or LIGO, announced that a signal from gravitational waves had been discovered emanating from the collision and merger of two massive black holes over a billion light-years away. How far away is that? Well, one light-year is about 5.88 trillion miles."
} );
//(59)
t.insert( {
    title : "Finding Beauty in the Darkness",
    date : "Feb. 11, 2016",
    summary : "Einstein’s 'ripples' should matter to everyone — not just physicists.",
    keywords : ["Laser Interferometer Gravitational-Wave Observatory (LIGO)","Black Holes (Space)","Gravitation and Gravity","Physics","Einstein  Albert"],
    content : "To see these waves, the experimenters built two mammoth detectors, one in Washington State, the other in Louisiana, each consisting of two tunnels about 2.5 miles in length at right angles to each other. By shooting a laser beam down the length of each tunnel and timing how long it took for each to be reflected off a mirror at the far end, the experimenters could precisely measure the tunnels’ length. If a gravitational wave from a distant galaxy traverses the detectors at both locations roughly simultaneously, then at each location, the length of one arm would get smaller, while the length of the other arm would get longer, alternating back and forth."
} );
//(60)
t.insert( {
    title : "Finding Beauty in the Darkness",
    date : "Feb. 11, 2016",
    summary : "Einstein’s 'ripples' should matter to everyone — not just physicists.",
    keywords : ["Laser Interferometer Gravitational-Wave Observatory (LIGO)","Black Holes (Space)","Gravitation and Gravity","Physics","Einstein  Albert"],
    content : "To detect the signal they observed they had to be able to measure a periodic difference in the length between the two tunnels by a distance of less than one ten-thousandth the size of a single proton. It is equivalent to measuring the distance between the earth and the nearest star with an accuracy of the width of a human hair. If the fact that this is possible doesn’t astonish, then read these statements again. This difference is so small that even the minuscule motion in the position of each mirror at the end of each tunnel because of quantum mechanical vibrations of the atoms in the mirror could have overwhelmed the signal. But scientists were able to resort to the most modern techniques in quantum optics to overcome this."
} );
//(61)
t.insert( {
    title : "Finding Beauty in the Darkness",
    date : "Feb. 11, 2016",
    summary : "Einstein’s 'ripples' should matter to everyone — not just physicists.",
    keywords : ["Laser Interferometer Gravitational-Wave Observatory (LIGO)","Black Holes (Space)","Gravitation and Gravity","Physics","Einstein  Albert"],
    content : "The two black holes that collided, which the LIGO experiment claimed to have detected, were immense. One was about 36 times the mass of our sun, the other, 29 times that mass. The collision and merger produced a black hole 62 times our sun’s mass. If your elementary arithmetic suggests that something is wrong, you’re right. Where did the extra three solar masses disappear to?"
} );
//(62)
t.insert( {
    title : "Finding Beauty in the Darkness",
    date : "Feb. 11, 2016",
    summary : "Einstein’s 'ripples' should matter to everyone — not just physicists.",
    keywords : ["Laser Interferometer Gravitational-Wave Observatory (LIGO)","Black Holes (Space)","Gravitation and Gravity","Physics","Einstein  Albert"],
    content : "Into pure energy in the form of gravitational waves. Our sun will burn for 10 billion years, with the intensity of over 10 billion thermonuclear weapons going off every second. In the process, only a small fraction of its total mass will be turned into energy, according to Einstein’s famous equation, E=mc2. But when those black holes collided, three times the entire mass of our sun disappeared in less than a second, transformed into pure energy. During that time, the collision generated more energy than was being generated by all the rest of the stars in the observable universe combined. Too often people ask, what’s the use of science like this, if it doesn’t produce faster cars or better toasters. But people rarely ask the same question about a Picasso painting or a Mozart symphony. Such pinnacles of human creativity change our perspective of our place in the universe. Science, like art, music and literature, has the capacity to amaze and excite, dazzle and bewilder. I would argue that it is that aspect of science — its cultural contribution, its humanity — that is perhaps its most important feature. What more can we learn about the universe from a stupefying experimental feat observing a stupefying wonder of nature? The answer is anyone’s guess. Gravitational-wave observatories of the future will be able to explore the exotic features of black holes. This may shed light on the evolution of galaxies, stars and gravity. Eventually, we may be able to observe gravitational waves from the Big Bang, which will push the limits of our current understanding of physics."
} );
//(63)
t.insert( {
    title : "Finding Beauty in the Darkness",
    date : "Feb. 11, 2016",
    summary : "Einstein’s 'ripples' should matter to everyone — not just physicists.",
    keywords : ["Laser Interferometer Gravitational-Wave Observatory (LIGO)","Black Holes (Space)","Gravitation and Gravity","Physics","Einstein  Albert"],
    content : "Gravitational waves emerge from near the 'event horizon' of black holes, the so-called exit door from the universe through which anything that passes can never return. Near such regions, for example, time slows down by a huge amount, as anyone who went to see the movie 'Interstellar' knows. (Coincidentally the original treatment for 'Interstellar' was written by Kip Thorne, one of the physicists who helped conceive of the LIGO experiment.)Ultimately, by exploring processes near the event horizon, or by observing gravitational waves from the early universe, we may learn more about the beginning of the universe itself, or even the possible existence of other universes. Every child has wondered at some time where we came from and how we got here. That we can try and answer such questions by building devices like LIGO to peer out into the cosmos stands as a testament to the persistent curiosity and ingenuity of humankind — the qualities that we should most celebrate about being human."
} );
//(64)
t.insert( {
    title : "Scientists Chirp Excitedly for LIGO, Gravitational Waves and Einstein",
    date : "Feb. 11, 2016",
    summary : "Before a big physics announcement, scientists took to social media to share their best imitations of two black holes colliding.",
    keywords : ["Gravitation and Gravity","Social Media","Physics","Space and Astronomy"],
    content : "How do you celebrate a major discovery in physics and astronomy that could change the shape of scientific inquiry for the next century? Many scientists active on social media did it by chirping."
} );
//(65)
t.insert( {
    title : "Scientists Chirp Excitedly for LIGO, Gravitational Waves and Einstein",
    date : "Feb. 11, 2016",
    summary : "Before a big physics announcement, scientists took to social media to share their best imitations of two black holes colliding.",
    keywords : ["Gravitation and Gravity","Social Media","Physics","Space and Astronomy"],
    content : "Evidence of gravitational waves was announced on Thursday by physicists associated with the Laser Interferometer Gravitational-Wave Observatory project. The experiment’s two L-shaped antennas, in Louisiana and Washington state, detected a signal in September that resulted from a collision of two black holes more than a billion light-years from our spot in the universe. That reading could go a long way toward confirming a part of Albert Einstein’s general theory of relativity."
} );
//(66)
t.insert( {
    title : "Scientists Chirp Excitedly for LIGO, Gravitational Waves and Einstein",
    date : "Feb. 11, 2016",
    summary : "Before a big physics announcement, scientists took to social media to share their best imitations of two black holes colliding.",
    keywords : ["Gravitation and Gravity","Social Media","Physics","Space and Astronomy"],
    content : "The disturbance that the antennas picked up was converted by LIGO researchers into sound waves, producing a chirping sound that is something like an interstellar ring tone that can be heard by anyone or anything in the universe listening for it."
} );
//(67)
t.insert( {
    title : "Scientists Chirp Excitedly for LIGO, Gravitational Waves and Einstein",
    date : "Feb. 11, 2016",
    summary : "Before a big physics announcement, scientists took to social media to share their best imitations of two black holes colliding.",
    keywords : ["Gravitation and Gravity","Social Media","Physics","Space and Astronomy"],
    content : "Rumors of the discovery swirled before the announcement, and while they waited to hear it, scientists took to Twitter, YouTube and other digital platforms to make their own chirps. The trend appears to have been kicked off by Katherine J. Mack, an astrophysicist in Australia. She wrote on Twitter that she was practicing her 'gravitational wave binary inspiral chirp. For science,' and shared a YouTube video:"
} );
//(68)
t.insert( {
    title : "Scientists Chirp Excitedly for LIGO, Gravitational Waves and Einstein",
    date : "Feb. 11, 2016",
    summary : "Before a big physics announcement, scientists took to social media to share their best imitations of two black holes colliding.",
    keywords : ["Gravitation and Gravity","Social Media","Physics","Space and Astronomy"],
    content : "Like a siege of herons or a bevy of larks, other physicists and science aficionados heeded her hashtag of #ChirpForLIGO and recorded their own sounds, many of which were captured in this YouTube roundup:"
} );
//(69)
t.insert( {
    title : "Scientists Chirp Excitedly for LIGO, Gravitational Waves and Einstein",
    date : "Feb. 11, 2016",
    summary : "Before a big physics announcement, scientists took to social media to share their best imitations of two black holes colliding.",
    keywords : ["Gravitation and Gravity","Social Media","Physics","Space and Astronomy"],
    content : "And as the LIGO announcement neared, a group of scientists at Monash University recorded their chirps as a group, with help from some libations:"
} );
//(70)
t.insert( {
    title : "Scientists Chirp Excitedly for LIGO, Gravitational Waves and Einstein",
    date : "Feb. 11, 2016",
    summary : "Before a big physics announcement, scientists took to social media to share their best imitations of two black holes colliding.",
    keywords : ["Gravitation and Gravity","Social Media","Physics","Space and Astronomy"],
    content : "But the people running the Albert Einstein Twitter account suggested that the eminent physicist would have found his own audible way to celebrate if he were with us today:"
} );
//(71)
t.insert( {
    title : "Gravitational Waves Detected, Confirming Einstein’s Theory",
    date : "Feb. 11, 2016",
    summary : "Scientists say they heard the faint chirp of two black holes colliding a billion light-years away, fulfilling Einstein’s general theory of relativity.",
    keywords : ["Gravitation and Gravity","Space and Astronomy","Black Holes (Space)","Einstein  Albert","Physics","Physical Review Letters","Laser Interferometer Gravitational-Wave Observatory (LIGO)","Thorne  Kip S","Weiss  Rainer (1932- )"],
    content : "A team of scientists announced on Thursday that they had heard and recorded the sound of two black holes colliding a billion light-years away, a fleeting chirp that fulfilled the last prediction of Einstein’s general theory of relativity."
} );
//(72)
t.insert( {
    title : "Gravitational Waves Detected, Confirming Einstein’s Theory",
    date : "Feb. 11, 2016",
    summary : "Scientists say they heard the faint chirp of two black holes colliding a billion light-years away, fulfilling Einstein’s general theory of relativity.",
    keywords : ["Gravitation and Gravity","Space and Astronomy","Black Holes (Space)","Einstein  Albert","Physics","Physical Review Letters","Laser Interferometer Gravitational-Wave Observatory (LIGO)","Thorne  Kip S","Weiss  Rainer (1932- )"],
    content : "That faint rising tone, physicists say, is the first direct evidence of gravitational waves, the ripples in the fabric of space-time that Einstein predicted a century ago. (Listen to it here.) It completes his vision of a universe in which space and time are interwoven and dynamic, able to stretch, shrink and jiggle. And it is a ringing confirmation of the nature of black holes, the bottomless gravitational pits from which not even light can escape, which were the most foreboding (and unwelcome) part of his theory."
} );
//(73)
t.insert( {
    title : "Gravitational Waves Detected, Confirming Einstein’s Theory",
    date : "Feb. 11, 2016",
    summary : "Scientists say they heard the faint chirp of two black holes colliding a billion light-years away, fulfilling Einstein’s general theory of relativity.",
    keywords : ["Gravitation and Gravity","Space and Astronomy","Black Holes (Space)","Einstein  Albert","Physics","Physical Review Letters","Laser Interferometer Gravitational-Wave Observatory (LIGO)","Thorne  Kip S","Weiss  Rainer (1932- )"],
    content : "More generally, it means that a century of innovation, testing, questioning and plain hard work after Einstein imagined it on paper, scientists have finally tapped into the deepest register of physical reality, where the weirdest and wildest implications of Einstein’s universe become manifest. Conveyed by these gravitational waves, power 50 times greater than the output of all the stars in the universe combined vibrated a pair of L-shaped antennas in Washington State and Louisiana known as LIGO on Sept. 14. If replicated by future experiments, that simple chirp, which rose to the note of middle C before abruptly stopping, seems destined to take its place among the great sound bites of science, ranking with Alexander Graham Bell’s 'Mr. Watson — come here' and Sputnik’s first beeps from orbit."
} );
//(74)
t.insert( {
    title : "Gravitational Waves Detected, Confirming Einstein’s Theory",
    date : "Feb. 11, 2016",
    summary : "Scientists say they heard the faint chirp of two black holes colliding a billion light-years away, fulfilling Einstein’s general theory of relativity.",
    keywords : ["Gravitation and Gravity","Space and Astronomy","Black Holes (Space)","Einstein  Albert","Physics","Physical Review Letters","Laser Interferometer Gravitational-Wave Observatory (LIGO)","Thorne  Kip S","Weiss  Rainer (1932- )"],
    content : "'We are all over the moon and back,' said Gabriela González of Louisiana State University, a spokeswoman for the LIGO Scientific Collaboration, short for Laser Interferometer Gravitational-Wave Observatory. 'Einstein would be very happy, I think.'Members of the LIGO group, a worldwide team of scientists, along with scientists from a European team known as the Virgo Collaboration, published a report in Physical Review Letters on Thursday with more than 1,000 authors. 'I think this will be one of the major breakthroughs in physics for a long time,' said Szabolcs Marka, a Columbia University professor who is one of the LIGO scientists. 'Everything else in astronomy is like the eye,' he said, referring to the panoply of telescopes that have given stargazers access to more and more of the electromagnetic spectrum and the ability to peer deeper and deeper into space and time. 'Finally, astronomy grew ears. We never had ears before.'The discovery is a great triumph for three physicists — Kip Thorne of the California Institute of Technology, Rainer Weiss of the Massachusetts Institute of Technology and Ronald Drever, formerly of Caltech and now retired in Scotland — who bet their careers on the dream of measuring the most ineffable of Einstein’s notions."
} );
//(75)
t.insert( {
    title : "Gravitational Waves Detected, Confirming Einstein’s Theory",
    date : "Feb. 11, 2016",
    summary : "Scientists say they heard the faint chirp of two black holes colliding a billion light-years away, fulfilling Einstein’s general theory of relativity.",
    keywords : ["Gravitation and Gravity","Space and Astronomy","Black Holes (Space)","Einstein  Albert","Physics","Physical Review Letters","Laser Interferometer Gravitational-Wave Observatory (LIGO)","Thorne  Kip S","Weiss  Rainer (1932- )"],
    content : "'Until now, we scientists have only seen warped space-time when it’s calm,' Dr. Thorne said in an email. 'It’s as though we had only seen the ocean’s surface on a calm day but had never seen it roiled in a storm, with crashing waves.'"
} );
//(76)
t.insert( {
    title : "Gravitational Waves Detected, Confirming Einstein’s Theory",
    date : "Feb. 11, 2016",
    summary : "Scientists say they heard the faint chirp of two black holes colliding a billion light-years away, fulfilling Einstein’s general theory of relativity.",
    keywords : ["Gravitation and Gravity","Space and Astronomy","Black Holes (Space)","Einstein  Albert","Physics","Physical Review Letters","Laser Interferometer Gravitational-Wave Observatory (LIGO)","Thorne  Kip S","Weiss  Rainer (1932- )"],
    content : "The black holes that LIGO observed created a storm 'in which the flow of time speeded, then slowed, then speeded,' he said. 'A storm with space bending this way, then that.'"
} );
//(77)
t.insert( {
    title : "Gravitational Waves Detected, Confirming Einstein’s Theory",
    date : "Feb. 11, 2016",
    summary : "Scientists say they heard the faint chirp of two black holes colliding a billion light-years away, fulfilling Einstein’s general theory of relativity.",
    keywords : ["Gravitation and Gravity","Space and Astronomy","Black Holes (Space)","Einstein  Albert","Physics","Physical Review Letters","Laser Interferometer Gravitational-Wave Observatory (LIGO)","Thorne  Kip S","Weiss  Rainer (1932- )"],
    content : "The chirp is also sweet vindication for the National Science Foundation, which spent about $1.1 billion over more than 40 years to build a new hotline to nature, facing down criticism that sources of gravitational waves were not plentiful or loud enough to justify the cost. 'It’s been decades, through a lot of different technological innovations,' France Córdova, the foundation’s director, said in an interview, recalling how, in the early years, the foundation’s advisory board had 'really scratched their heads on this one.'Word of LIGO’s success was met by hosannas in the scientific community, albeit with the requisite admonishments of the need for confirmation or replication. 'I was freaking out,' said Janna Levin, a theorist at Barnard College at Columbia who was not part of LIGO but was granted an early look at the results for her warts-and-all book about the project, 'Black Hole Blues,' to be published this spring. Robert Garisto, the editor of Physical Review Letters, said he had gotten goose bumps while reading the LIGO paper. When Einstein announced his theory in 1915, he rewrote the rules for space and time that had prevailed for more than 200 years, since the time of Newton, stipulating a static and fixed framework for the universe. Instead, Einstein said, matter and energy distort the geometry of the universe in the way a heavy sleeper causes a mattress to sag, producing the effect we call gravity."
} );
//(78)
t.insert( {
    title : "Gravitational Waves Detected, Confirming Einstein’s Theory",
    date : "Feb. 11, 2016",
    summary : "Scientists say they heard the faint chirp of two black holes colliding a billion light-years away, fulfilling Einstein’s general theory of relativity.",
    keywords : ["Gravitation and Gravity","Space and Astronomy","Black Holes (Space)","Einstein  Albert","Physics","Physical Review Letters","Laser Interferometer Gravitational-Wave Observatory (LIGO)","Thorne  Kip S","Weiss  Rainer (1932- )"],
    content : "A disturbance in the cosmos could cause space-time to stretch, collapse and even jiggle, like a mattress shaking when that sleeper rolls over, producing ripples of gravity: gravitational waves. Einstein was not quite sure about these waves. In 1916, he told Karl Schwarzschild, the discoverer of black holes, that gravitational waves did not exist, then said they did. In 1936, he and his assistant Nathan Rosen set out to publish a paper debunking the idea before doing the same flip-flop again. According to the equations physicists have settled on, gravitational waves would compress space in one direction and stretch it in another as they traveled outward. In 1969, Joseph Weber, a physicist at the University of Maryland, claimed to have detected gravitational waves using a six-foot-long aluminum cylinder as an antenna. Waves of the right frequency would make the cylinder ring like a tuning fork, he said. Others could not duplicate his result, but few doubted that gravitational waves were real. Dr. Weber’s experiment inspired a generation of scientists to look harder for Einsteinian marks on the universe."
} );
//(79)
t.insert( {
    title : "Gravitational Waves Detected, Confirming Einstein’s Theory",
    date : "Feb. 11, 2016",
    summary : "Scientists say they heard the faint chirp of two black holes colliding a billion light-years away, fulfilling Einstein’s general theory of relativity.",
    keywords : ["Gravitation and Gravity","Space and Astronomy","Black Holes (Space)","Einstein  Albert","Physics","Physical Review Letters","Laser Interferometer Gravitational-Wave Observatory (LIGO)","Thorne  Kip S","Weiss  Rainer (1932- )"],
    content : "In 1978, the radio astronomers Joseph H. Taylor Jr. and Russell A. Hulse, then at the University of Massachusetts Amherst, discovered a pair of neutron stars, superdense remnants of dead stars, orbiting each other. One of them was a pulsar, emitting a periodic beam of electromagnetic radiation. By timing its pulses, the astronomers determined that the stars were losing energy and falling closer together at precisely the rate that would be expected if they were radiating gravitational waves."
} );
//(80)
t.insert( {
    title : "Gravitational Waves Detected, Confirming Einstein’s Theory",
    date : "Feb. 11, 2016",
    summary : "Scientists say they heard the faint chirp of two black holes colliding a billion light-years away, fulfilling Einstein’s general theory of relativity.",
    keywords : ["Gravitation and Gravity","Space and Astronomy","Black Holes (Space)","Einstein  Albert","Physics","Physical Review Letters","Laser Interferometer Gravitational-Wave Observatory (LIGO)","Thorne  Kip S","Weiss  Rainer (1932- )"],
    content : "Dr. Hulse and Dr. Taylor won the Nobel Prize in Physics in 1993. Another group of astronomers who go by the name Bicep made headlines in 2014 when they claimed to have detected gravitational waves from the beginning of the Big Bang, using a telescope at the South Pole. They later acknowledged that their observations had probably been contaminated by interstellar stardust."
} );
//(81)
t.insert( {
    title : "Gravitational Waves Detected, Confirming Einstein’s Theory",
    date : "Feb. 11, 2016",
    summary : "Scientists say they heard the faint chirp of two black holes colliding a billion light-years away, fulfilling Einstein’s general theory of relativity.",
    keywords : ["Gravitation and Gravity","Space and Astronomy","Black Holes (Space)","Einstein  Albert","Physics","Physical Review Letters","Laser Interferometer Gravitational-Wave Observatory (LIGO)","Thorne  Kip S","Weiss  Rainer (1932- )"],
    content : "Dr. Thorne of Caltech and Dr. Weiss of M.I.T. first met in 1975, Dr. Weiss said, when they had to share a hotel room during a meeting in Washington. Dr. Thorne was already a renowned black-hole theorist, but he was looking for new experimental territory to conquer. They stayed up all night talking about how to test general relativity and debating how best to search for gravitational waves. Dr. Thorne then recruited Dr. Drever, a gifted experimentalist from the University of Glasgow, to start a gravitational wave program at Caltech. Dr. Drever wanted to use light — laser beams bouncing between precisely positioned mirrors — to detect the squeeze and stretch of a passing wave."
} );
//(82)
t.insert( {
    title : "Gravitational Waves Detected, Confirming Einstein’s Theory",
    date : "Feb. 11, 2016",
    summary : "Scientists say they heard the faint chirp of two black holes colliding a billion light-years away, fulfilling Einstein’s general theory of relativity.",
    keywords : ["Gravitation and Gravity","Space and Astronomy","Black Holes (Space)","Einstein  Albert","Physics","Physical Review Letters","Laser Interferometer Gravitational-Wave Observatory (LIGO)","Thorne  Kip S","Weiss  Rainer (1932- )"],
    content : "Dr. Weiss tried to mount a similar effort at M.I.T., also using the laser approach, but at the time, black holes were not in fashion there. (Things are better now, he said.)The technological odds were against both efforts. The researchers calculated that a typical gravitational wave from out in space would change the distance between a pair of mirrors by an almost imperceptible amount: one part in a billion trillion. Dr. Weiss recalled that when he explained the experiment to his potential funders at the National Science Foundation, 'everybody thought we were out of our minds.'  In 1984, to the annoyance of Dr. Drever and the relief of Dr. Weiss, the National Science Foundation ordered the two teams to merge. Dr. Thorne found himself in the dual roles of evangelist for the field of gravitational waves and broker for experimental disagreements. Progress was slow until the three physicists were replaced in 1987 by a single director as part of the price of going forward. The first version of the experiment, known as Initial LIGO, started in 2000 and ran for 10 years, mostly to show that it could work on the scale needed. There are two detectors: one in Hanford, Wash., the other in Livingston, La. Hunters once shot up the outside of one of the antenna arms in Louisiana, and a truck crashed into one of the arms in Hanford. In neither case was the experiment damaged."
} );
//(83)
t.insert( {
    title : "Gravitational Waves Detected, Confirming Einstein’s Theory",
    date : "Feb. 11, 2016",
    summary : "Scientists say they heard the faint chirp of two black holes colliding a billion light-years away, fulfilling Einstein’s general theory of relativity.",
    keywords : ["Gravitation and Gravity","Space and Astronomy","Black Holes (Space)","Einstein  Albert","Physics","Physical Review Letters","Laser Interferometer Gravitational-Wave Observatory (LIGO)","Thorne  Kip S","Weiss  Rainer (1932- )"],
    content : "Over the last five years, the entire system was rebuilt to increase its sensitivity to the point where the team could realistically expect to hear something. LIGO’s antennas are L-shaped, with perpendicular arms 2.5 miles long. Inside each arm, cocooned in layers of steel and concrete, runs the world’s largest bottle of nothing, a vacuum chamber a couple of feet wide containing 2.5 million gallons of empty space. At the end of each arm are mirrors hanging by glass threads, isolated from the bumps and shrieks of the environment better than any Rolls-Royce ever conceived."
} );
//(84)
t.insert( {
    title : "Gravitational Waves Detected, Confirming Einstein’s Theory",
    date : "Feb. 11, 2016",
    summary : "Scientists say they heard the faint chirp of two black holes colliding a billion light-years away, fulfilling Einstein’s general theory of relativity.",
    keywords : ["Gravitation and Gravity","Space and Astronomy","Black Holes (Space)","Einstein  Albert","Physics","Physical Review Letters","Laser Interferometer Gravitational-Wave Observatory (LIGO)","Thorne  Kip S","Weiss  Rainer (1932- )"],
    content : "Thus coddled, the lasers in the present incarnation, known as Advanced LIGO, can detect changes in the length of one of those arms as small as one ten-thousandth the diameter of a proton — a subatomic particle too small to be seen by even the most powerful microscopes — as a gravitational wave sweeps through."
} );
//(85)
t.insert( {
    title : "Gravitational Waves Detected, Confirming Einstein’s Theory",
    date : "Feb. 11, 2016",
    summary : "Scientists say they heard the faint chirp of two black holes colliding a billion light-years away, fulfilling Einstein’s general theory of relativity.",
    keywords : ["Gravitation and Gravity","Space and Astronomy","Black Holes (Space)","Einstein  Albert","Physics","Physical Review Letters","Laser Interferometer Gravitational-Wave Observatory (LIGO)","Thorne  Kip S","Weiss  Rainer (1932- )"],
    content : "Even with such extreme sensitivity, only the most massive and violent events out there would be loud enough to make the detectors ring. LIGO was designed to catch collisions of neutron stars, which can produce the violent flashes known as gamma ray bursts. As they got closer together, these neutron stars would swing around faster and faster, hundreds of times a second, vibrating space-time geometry with a rising tone that would be audible in LIGO’s vacuum-tube 'sweet spot.'Black holes, the even-more-extreme remains of dead stars, could be expected to do the same, but nobody knew if they existed in pairs or how often they might collide. If they did, however, the waves from the collision would be far louder and lower pitched than those from neutron stars."
} );
//(86)
t.insert( {
    title : "Gravitational Waves Detected, Confirming Einstein’s Theory",
    date : "Feb. 11, 2016",
    summary : "Scientists say they heard the faint chirp of two black holes colliding a billion light-years away, fulfilling Einstein’s general theory of relativity.",
    keywords : ["Gravitation and Gravity","Space and Astronomy","Black Holes (Space)","Einstein  Albert","Physics","Physical Review Letters","Laser Interferometer Gravitational-Wave Observatory (LIGO)","Thorne  Kip S","Weiss  Rainer (1932- )"],
    content : "Dr. Thorne and others long thought these would be the first waves to be heard by LIGO. But even he did not expect it would happen so quickly. On Sept. 14, the system had barely finished being calibrated and was in what is called an engineering run at 4 a.m. when a loud signal came through at the Livingston site. 'Data was streaming, and then ‘bam,’ ' recalled David Reitze, a Caltech professor who is the director of the LIGO Laboratory, the group that built and runs the detectors. Seven milliseconds later, the signal hit the Hanford site. LIGO scientists later determined that the likelihood of such signals landing simultaneously by pure chance was vanishingly small. Nobody was awake in the United States, but computers tagged the event, and European colleagues noticed."
} );
//(87)
t.insert( {
    title : "Gravitational Waves Detected, Confirming Einstein’s Theory",
    date : "Feb. 11, 2016",
    summary : "Scientists say they heard the faint chirp of two black holes colliding a billion light-years away, fulfilling Einstein’s general theory of relativity.",
    keywords : ["Gravitation and Gravity","Space and Astronomy","Black Holes (Space)","Einstein  Albert","Physics","Physical Review Letters","Laser Interferometer Gravitational-Wave Observatory (LIGO)","Thorne  Kip S","Weiss  Rainer (1932- )"],
    content : "Dr. Reitze was on a plane to Louisiana the next day. Dr. Weiss, on vacation in Maine, found out when he checked in by computer that morning. 'It was waving hello,' he said. 'It was amazing. The signal was so big, I didn’t believe it.'"
} );
//(88)
t.insert( {
    title : "Gravitational Waves Detected, Confirming Einstein’s Theory",
    date : "Feb. 11, 2016",
    summary : "Scientists say they heard the faint chirp of two black holes colliding a billion light-years away, fulfilling Einstein’s general theory of relativity.",
    keywords : ["Gravitation and Gravity","Space and Astronomy","Black Holes (Space)","Einstein  Albert","Physics","Physical Review Letters","Laser Interferometer Gravitational-Wave Observatory (LIGO)","Thorne  Kip S","Weiss  Rainer (1932- )"],
    content : "The frequency of the chirp was too low for neutron stars, the physicists knew. Detailed analysis of its form told a tale of Brobdingnagian activities in a far corner of the universe: the last waltz of a pair of black holes shockingly larger than astrophysicists had been expecting. One of them was 36 times as massive as the sun, the other 29. As they approached the end, at half the speed of light, they were circling each other 250 times a second. And then the ringing stopped as the two holes coalesced into a single black hole, a trapdoor in space with the equivalent mass of 62 suns. All in a fifth of a second, Earth time. Dr. Weiss said you could reproduce the chirp by running your fingernails across the keys of a piano from the low end to middle C. Lost in the transformation was three solar masses’ worth of energy, vaporized into gravitational waves in an unseen and barely felt apocalypse. As visible light, that energy would be equivalent to the brightness of a billion trillion suns."
} );
//(89)
t.insert( {
    title : "Gravitational Waves Detected, Confirming Einstein’s Theory",
    date : "Feb. 11, 2016",
    summary : "Scientists say they heard the faint chirp of two black holes colliding a billion light-years away, fulfilling Einstein’s general theory of relativity.",
    keywords : ["Gravitation and Gravity","Space and Astronomy","Black Holes (Space)","Einstein  Albert","Physics","Physical Review Letters","Laser Interferometer Gravitational-Wave Observatory (LIGO)","Thorne  Kip S","Weiss  Rainer (1932- )"],
    content : "And yet it moved the LIGO mirrors only four one-thousandths of the diameter of a proton. The signal conformed precisely to the predictions of general relativity for black holes as calculated in computer simulations, Dr. Reitze said. Shortly after the September event, LIGO recorded another, weaker signal that was probably also from black holes, the team said. According to Dr. Weiss, there were at least four detections during the first LIGO observing run, which ended in January. The second run will begin this summer. In the fall, another detector, Advanced Virgo, operated by the European Gravitational Observatory in Italy, will start up. There are hopes for more in the future, in India and Japan. Astronomers now know that pairs of black holes do exist in the universe, and they are rushing to explain how they got so big. According to Vicky Kalogera of Northwestern University, there are two contenders right now: Earlier in the universe, stars lacking elements heavier than helium could have grown to galumphing sizes and then collapsed straight into black holes without the fireworks of a supernova explosion, the method by which other stars say goodbye. Or it could be that in the dense gatherings of stars known as globular clusters, black holes sink to the center and merge. Michael S. Turner, a cosmologist at the University of Chicago, noted that astronomers had once referred to the search for gravitational waves as an experiment, not an observatory. 'LIGO has earned its ‘O,’ ' he said. 'That is, it will be an observatory, getting tens of events per year.'"
} );
//(90)
t.insert( {
    title : "Gravitational Waves Detected, Confirming Einstein’s Theory",
    date : "Feb. 11, 2016",
    summary : "Scientists say they heard the faint chirp of two black holes colliding a billion light-years away, fulfilling Einstein’s general theory of relativity.",
    keywords : ["Gravitation and Gravity","Space and Astronomy","Black Holes (Space)","Einstein  Albert","Physics","Physical Review Letters","Laser Interferometer Gravitational-Wave Observatory (LIGO)","Thorne  Kip S","Weiss  Rainer (1932- )"],
    content : "Dr. Turner added, 'The loudest things in the gravity-wave sky are the most exotic things in the universe: black holes, neutron stars and the early universe.'The future for the dark side looks bright. 'There just have to be big, momentous surprises, which there always have been when a new window is opened,' said Dr. Thorne, who is now retired from LIGO. Dr. Drever, who has dementia and lives in a nursing home near Edinburgh, is not able to enjoy the victory lap. 'Ron’s creative genius was crucial to LIGO’s future success and was the reason we brought him to Caltech,' Dr. Thorne wrote in an email."
} );
//(91)
t.insert( {
    title : "Gravitational Waves Detected, Confirming Einstein’s Theory",
    date : "Feb. 11, 2016",
    summary : "Scientists say they heard the faint chirp of two black holes colliding a billion light-years away, fulfilling Einstein’s general theory of relativity.",
    keywords : ["Gravitation and Gravity","Space and Astronomy","Black Holes (Space)","Einstein  Albert","Physics","Physical Review Letters","Laser Interferometer Gravitational-Wave Observatory (LIGO)","Thorne  Kip S","Weiss  Rainer (1932- )"],
    content : "Dr. Weiss, who is retired with emeritus status at M.I.T., said his life now was more like that of a graduate student — that is to say, tinkering and making things work. This tendency was almost the undoing of the LIGO discovery. Only three days before the black hole chirp came in, Dr. Weiss was at the Livingston site, he recalled, and was horrified to find that the antenna readings were plagued by radio interference. That needs to be fixed, he told his colleagues, imploring them to delay the engineering run. But they demurred, saying that everything was ready, that it was too late to stop the program. Lucky for them. 'We would have missed that big event,' Dr. Weiss said."
} );
//(92)
t.insert( {
    title : "That Wasn’t a Meteorite That Killed a Man in India, NASA Says",
    date : "Feb. 9, 2016",
    summary : "A 'land-based' explosion was the likely cause, not an object from space, which would have been a first of sorts in recorded history.",
    keywords : ["Space and Astronomy","Deaths (Fatalities)","Times of India","India","Siberia"],
    content : "The news reported by Indian newspapers and picked up by many outlets around the world was startling: A bus driver was killed and three people were injured after a meteorite hit a college campus on Saturday. If true, it would have been the first scientifically confirmed report in history of someone being killed by a meteorite impact. By Tuesday, however, the story appeared to be fizzling as scientific experts weighed in. The early reports included images of a crater, five feet deep and two feet wide. Witnesses described hearing an explosion, and the police recovered a black, pockmarked stone from the site, in southeast India. The chief minister of the state, Jayalalithaa Jayaram, promised compensation for the families of the driver, who was hit by debris, and for the other three people, The Times of India reported."
} );
//(93)
t.insert( {
    title : "That Wasn’t a Meteorite That Killed a Man in India, NASA Says",
    date : "Feb. 9, 2016",
    summary : "A 'land-based' explosion was the likely cause, not an object from space, which would have been a first of sorts in recorded history.",
    keywords : ["Space and Astronomy","Deaths (Fatalities)","Times of India","India","Siberia"],
    content : "At the college in the Tamil Nadu district of Vellore, the driver, identified only as Kamaraj, died of his injuries after window panes in the engineering building and on several buses shattered, officials there told the local media."
} );
//(94)
t.insert( {
    title : "That Wasn’t a Meteorite That Killed a Man in India, NASA Says",
    date : "Feb. 9, 2016",
    summary : "A 'land-based' explosion was the likely cause, not an object from space, which would have been a first of sorts in recorded history.",
    keywords : ["Space and Astronomy","Deaths (Fatalities)","Times of India","India","Siberia"],
    content : "Scientists from the Indian Institute of Astrophysics were analyzing samples of the rock provided by the police. 'Considering that there was no prediction of a meteorite shower and there was no meteorite shower observed, this certainly is a rare phenomena if it is a meteorite,' said Prof. G.C. Anupama, the dean of the institute, in a telephone interview Tuesday. But NASA scientists in the United States were more emphatic, saying in a public statement that the photographs posted online were more consistent with 'a land based explosion' than with something from space. Lindley Johnson, NASA’s planetary defense officer, said in an email that a death by meteorite impact was so rare that one has never been scientifically confirmed in recorded history. 'There have been reports of injuries, but even those were extremely rare before the Chelyabinsk event three years ago,' he said, referring to a 2013 episode in Russia. In addition, meteorites are often cool to the touch when they land, and the object recovered from the site in India weighed only a few grams and appeared to be a fragment of a common earth rock. Deaths and injuries by meteorites are tracked by the International Comet Quarterly, which notes the locations and sizes of meteorites. Some smash through houses, kill animals and spatter buildings. But deaths have been hard to confirm. In 1908 in Tunguska, Siberia, an apparent 'airblast' of an object entering Earth’s atmosphere leveled hundreds of square miles of forest and killed two men and hundreds of reindeer. But no meteorites were recovered, the quarterly said. There are reports of people’s limbs being amputated by meteorites, of farm animals being killed by them and of meteorites crashing through the roofs of houses. In 1954, a woman in Sylacauga, Ala., was hit by a particle from a meteorite that fell through the roof of her house. The object weighed nine pounds. Meteorites are fragments spawned from meteors — they are basically pieces of space rock. In one of the largest recent events, meteorites fell in Chelyabinsk from a meteor that hit Earth’s atmosphere in February 2013. About 1,200 people — 200 of them children — were injured, mostly by glass that exploded into schools and workplaces, according to Russia’s Interior Ministry."
} );
//(95)
t.insert( {
    title : "Edgar D. Mitchell, Sixth Moonwalking Astronaut, Dies at 85",
    date : "Feb. 5, 2016",
    summary : "Commander Mitchell, a member of NASA’s first lunar mission devoted exclusively to scientific research, Apollo 14, spent just over nine hours on the moon on two moonwalks.",
    keywords : ["Deaths (Obituaries)","Space and Astronomy","Apollo Project","Moon","National Aeronautics and Space Administration","Mitchell  Edgar D (1930-2016)"],
    content : "Edgar D. Mitchell, who became the sixth man to walk on the moon as a member of NASA’s first lunar mission devoted exclusively to scientific research, died on Thursday at a hospice in West Palm Beach, Fla. He was 85."
} );
//(96)
t.insert( {
    title : "Edgar D. Mitchell, Sixth Moonwalking Astronaut, Dies at 85",
    date : "Feb. 5, 2016",
    summary : "Commander Mitchell, a member of NASA’s first lunar mission devoted exclusively to scientific research, Apollo 14, spent just over nine hours on the moon on two moonwalks.",
    keywords : ["Deaths (Obituaries)","Space and Astronomy","Apollo Project","Moon","National Aeronautics and Space Administration","Mitchell  Edgar D (1930-2016)"],
    content : "NASA announced his death, which came one day before the 45th anniversary of his moon landing. The Apollo 14 flight, launched on Jan. 31, 1971, took Commander Mitchell and his fellow Navy officer, Capt. Alan B. Shepard Jr., to the moon’s Fra Mauro highlands. Captain Shepard had been America’s first man in space 10 years earlier. Maj. Stuart A. Roosa of the Air Force remained in orbit snapping photographs of potential sites for future missions while awaiting his colleagues’ return in the lunar module. The first two flights to the moon — the epic Apollo 11 of July 1969 with Neil Armstrong and Buzz Aldrin, and Apollo 12 four months later — were largely devoted to testing whether men could survive there, albeit for a brief period. Apollo 13’s scheduled moon landing had been aborted by a near-disastrous oxygen tank explosion."
} );
//(97)
t.insert( {
    title : "Edgar D. Mitchell, Sixth Moonwalking Astronaut, Dies at 85",
    date : "Feb. 5, 2016",
    summary : "Commander Mitchell, a member of NASA’s first lunar mission devoted exclusively to scientific research, Apollo 14, spent just over nine hours on the moon on two moonwalks.",
    keywords : ["Deaths (Obituaries)","Space and Astronomy","Apollo Project","Moon","National Aeronautics and Space Administration","Mitchell  Edgar D (1930-2016)"],
    content : "For the 14th mission, scientists were counting on Commander Mitchell and Captain Shepard to be the first astronauts to return with a large collection of rocks from high elevations, where some might be old enough to provide clues to the moon’s origin and its evolution. (Apollo 11 and Apollo 12 had landed in fairly level areas.)Spending just over nine hours on two moonwalks, the astronauts collected more than 94 pounds of rock samples, piling them in a two-wheeled cart they were hauling. But they missed out on completing one important task. NASA had hoped that they could climb to the rim of the nearly 400-foot-high Cone crater and collect especially significant rock samples there. But in lugging the cart the astronauts found the climb to be difficult and experienced rapid heartbeats. Mission control, concerned about exhaustion and wary of time constraints, ordered them to turn back. Unbeknown to the men at the time, they were only about 20 yards from their goal. Commander Mitchell, who had a doctorate in flight sciences, had long maintained a parallel interest in the study of consciousness, a fascination that was heightened during his return from the moon. 'It was a sense of the Earth being in critical condition, a recognition of the massive insanity which had led man into deeper and deeper crises on the planet,' he told the writer Francine du Plessix Gray in The New York Times Magazine in August 1974. 'Above all, I felt the need for a radical change in our culture. I knew we were replete with untapped intuitive and psychic forces which we must utilize if we were to survive, forces that Western society had programmed us to disregard.'Heading home, Commander Mitchell secretly conducted an experiment in extrasensory perception — thought transference — while his fellow astronauts were asleep. He concentrated on symbols in a set of cards he had brought with him in the hope that four people he had selected back on Earth could read his thoughts and determine what those drawings were."
} );
//(98)
t.insert( {
    title : "Edgar D. Mitchell, Sixth Moonwalking Astronaut, Dies at 85",
    date : "Feb. 5, 2016",
    summary : "Commander Mitchell, a member of NASA’s first lunar mission devoted exclusively to scientific research, Apollo 14, spent just over nine hours on the moon on two moonwalks.",
    keywords : ["Deaths (Obituaries)","Space and Astronomy","Apollo Project","Moon","National Aeronautics and Space Administration","Mitchell  Edgar D (1930-2016)"],
    content : "In discussing the experiment at a news conference five months later, he said it produced 'results far exceeding anything expected.' Of the 200 guesses by his contacts back on Earth, he said, 51 correctly identified his thoughts. Another Apollo 14 moment having nothing to do with rocks was provided by Captain Shepard, who took three golf balls with him to the moon. Wielding a makeshift 6-iron, he hit a shot, televised back to Earth, that traveled 'miles and miles and miles,' as he put it, in lunar gravity only one-sixth that of the Earth. (The shot was presumed to have gone more than 800 yards, more than six times his normal range with a 6-iron back on Earth.)Edgar Dean Mitchell was born on Sept. 17, 1930, in Hereford, Tex., and grew up in Artesia, N.M. He became fascinated by flight when he watched crop duster pilots flying biplanes from an airfield near his home. He received a bachelor of science degree in industrial management from Carnegie Institute of Technology (now Carnegie Mellon University) in Pittsburgh in 1952 and joined the Navy the next year. After flying fighter planes, he obtained another bachelor’s degree, in aeronautics, from the Naval Postgraduate School in 1961. He earned his doctorate, in aeronautics and astronautics, from the Massachusetts Institute of Technology in 1964. He graduated from test pilot school, then joined the astronaut corps in April 1966. Apollo 14 was Commander Mitchell’s only spaceflight. He retired from NASA and the Navy in 1972 and at his death lived in Lake Worth, Fla., south of West Palm Beach. Mr. Mitchell’s two marriages ended in divorce. Survivors include four daughters, Karlyn, Elizabeth, Mary and Kimberly, and a son, Paul, according to the South Florida website TCPalm.com. Kimberly Mitchell is a former city commissioner of West Palm Beach. Mr. Mitchell owned a business consulting firm in South Florida but retained his interest in studying the mind. In 1973 he founded the Institute of Noetic Sciences, a California-based nonprofit that supports research in the field. Its name is derived from the Greek word variously defined as intellect or inner wisdom. Mr. Mitchell created a stir in 2008 when he told a British radio station that his contacts in military and intelligence circles had told him that 'we’ve been visited on this planet, and the U.F.O. phenomena is real,' but that governments had 'covered up' the matter for at least 60 years. (His boyhood home was 40 miles south of Roswell, N.M., site of the celebrated claim of an unidentified flying object crash and government cover-up in 1947.)NASA, Mr. Mitchell’s former employer, was quick to respond. 'NASA does not track U.F.O.s,' a spokesman for the agency said. 'NASA is not involved in any sort of cover-up about alien life on this planet or anywhere else in the universe.'"
} );
//(99)
t.insert( {
    title : "Goodness Gracious, Fireballs in February",
    date : "Feb. 4, 2016",
    summary : "Dashcams, rooftop cameras and a GoPro on a small airplane captured footage of bright objects streaking night skies in recent days.",
    keywords : ["Video Recordings  Downloads and Streaming"],
    content : "Two fireballs streaked across the sky in the past week, creating dazzling, ephemeral displays for hundreds of people below. Dashboard cameras, rooftop cameras and even one mounted on a small airplane captured footage of the bright objects in the night skies."
} );
//(100)
t.insert( {
    title : "Goodness Gracious, Fireballs in February",
    date : "Feb. 4, 2016",
    summary : "Dashcams, rooftop cameras and a GoPro on a small airplane captured footage of bright objects streaking night skies in recent days.",
    keywords : ["Video Recordings  Downloads and Streaming"],
    content : "The first meteor appeared on Jan. 30, at 6:16 p.m. Eastern Standard Time, and was seen by more than 900 people across Virginia, New York and New Jersey, according to the American Meteor Society."
} );
//(101)
t.insert( {
    title : "Goodness Gracious, Fireballs in February",
    date : "Feb. 4, 2016",
    summary : "Dashcams, rooftop cameras and a GoPro on a small airplane captured footage of bright objects streaking night skies in recent days.",
    keywords : ["Video Recordings  Downloads and Streaming"],
    content : "Mike Grossman spotted it from 1,500 feet in the air while piloting his private plane over the Hudson River in New York. He captured video using a camera he had previously mounted to the tail of his aircraft to record that night’s scenic flight."
} );
//(102)
t.insert( {
    title : "Goodness Gracious, Fireballs in February",
    date : "Feb. 4, 2016",
    summary : "Dashcams, rooftop cameras and a GoPro on a small airplane captured footage of bright objects streaking night skies in recent days.",
    keywords : ["Video Recordings  Downloads and Streaming"],
    content : "'There’s no way you could miss it,' he said. 'With your peripheral vision, you’re immediately struck by it.' He watched as the meteor blazed across the sky for about three seconds, then radioed in to the La Guardia Airport radio tower to report what he saw. Upon reviewing his footage, Mr. Grossman said he was pleasantly surprised that he had captured the fireball but said that the video does not compare with the spectacle he saw from the cockpit. 'It’s totally unexpected, one of those moments when you don’t know how to process what you’re seeing.'"
} );
//(103)
t.insert( {
    title : "Goodness Gracious, Fireballs in February",
    date : "Feb. 4, 2016",
    summary : "Dashcams, rooftop cameras and a GoPro on a small airplane captured footage of bright objects streaking night skies in recent days.",
    keywords : ["Video Recordings  Downloads and Streaming"],
    content : "Alexander Salvador caught this dashcam video of the same bright white object from Falls Church, Va., while out food shopping for his family. 'It came out of nowhere,' he said. 'The first thing I said was ‘Ooh a comet!’ Then it quickly dawned on me that it couldn’t have been a comet, it was too close.'Mr. Salvador said the sight was unnerving at first, but that he was happy to have caught it with his camera. 'You can’t take credit for anything that’s luck. And that’s what this was, being at the right place at the right time.'A rooftop weather camera on the campus of the University of Wisconsin-Madison captured footage of the second fireball, which flew over Lake Michigan on Feb. 1 at 7:27 p.m. E.S.T. It was also reported by more than a hundred people in Wisconsin and Michigan."
} );
//(104)
t.insert( {
    title : "Goodness Gracious, Fireballs in February",
    date : "Feb. 4, 2016",
    summary : "Dashcams, rooftop cameras and a GoPro on a small airplane captured footage of bright objects streaking night skies in recent days.",
    keywords : ["Video Recordings  Downloads and Streaming"],
    content : "'We’re seeing something that’s coming into the atmosphere at very high speed, fast enough that the friction with the Earth’s atmosphere causes it to begin to vaporize,' said Jim Lattis, an astronomer at the university. Hundreds of fireballs streak across Earth’s atmosphere every day, Dr. Lattis said, but people witness few of them. The majority fly over uninhabited areas, and many also occur during daytime when the sun’s glare makes them hard to detect. 'For someone who doesn’t spend much time looking at the sky, seeing something like this could be a once in a lifetime experience,' he said. In total, the A.M.S. website received more than a thousand reports about the two events. Using that data, the organization can estimate the velocity and trajectory of the fireballs, according to Mike Hankey, the operations manager for the A.M.S. Fireball, he said, is an astronomical term that defines a meteor brighter than the planet Venus. Luminosity is measured on a scale, where Venus has a magnitude of about -3 brightness and the sun measures about -24, he said. 'A -3 is like ‘Whoa, that’s a bright shooting star.’ You might see it in New York City,' he said. 'A -24 is so bright you might be like ‘Oh my God, the world is ending.’ It would stop traffic.' He said that these two were about a -14, or about the brightness of the full moon. What people saw during these events were either chunks of ice from comets that rain through Earth’s atmosphere, or rocky pieces of asteroids. Mr. Hankey also said that their website receives more reports in February than any other month, though scientists aren’t exactly clear why. 'It’s a good month to look at the sky,' he said. 'Your chances of seeing a fireball definitely go up.'"
} );
//(105)
t.insert( {
    title : "Let the Moon Be Your Guide in Finding Five Planets",
    date : "Feb. 2, 2016",
    summary : "Learn a low-fi method for spotting five planets at once.",
    keywords : ["Moon","Planets"],
    content : "For the past two weeks, five of our solar system’s planets have paraded across the pre-dawn sky, visible to the naked eye, giving early-risers a rare visual treat. The show will continue into mid-February but as many a stargazer will attest to, distinguishing Mercury, Venus, Mars, Saturn and Jupiter amid the medley of twinkling dots can be tricky. There are a number of apps and computer programs that can help people track the quintet, but for those in need of a low-fi way to spot the planets, a recent NASA video offers the following advice: Look for the moon."
} );
//(106)
t.insert( {
    title : "Let the Moon Be Your Guide in Finding Five Planets",
    date : "Feb. 2, 2016",
    summary : "Learn a low-fi method for spotting five planets at once.",
    keywords : ["Moon","Planets"],
    content : "On Monday morning the moon was positioned right next to Mars, which looked like a red disk. On Wednesday morning Saturn will emerge near the moon. Then on Feb. 6 it will line up with Venus and form a triangle with Mercury, offering stargazers one of their clearest chances to catch a glimpse of the elusive first planet. On Feb. 23 the moon will be right next to Jupiter and then sweep by Mars again on Feb. 29."
} );
//(107)
t.insert( {
    title : "Signs of Modern Astronomy Seen in Ancient Babylon",
    date : "Jan. 28, 2016",
    summary : "Scientists have found a small clay tablet with markings indicating that a sort of precalculus technique was used to track Jupiter’s motion in the night sky.",
    keywords : ["Archaeology and Anthropology","Space and Astronomy","Mathematics","Jupiter (Planet)","Babylon (Iraq)","Science (Journal)"],
    content : "For people living in the ancient city of Babylon, Marduk was their patron god, and thus it is not a surprise that Babylonian astronomers took an interest in tracking the comings and goings of the planet Jupiter, which they regarded as a celestial manifestation of Marduk."
} );
//(108)
t.insert( {
    title : "Signs of Modern Astronomy Seen in Ancient Babylon",
    date : "Jan. 28, 2016",
    summary : "Scientists have found a small clay tablet with markings indicating that a sort of precalculus technique was used to track Jupiter’s motion in the night sky.",
    keywords : ["Archaeology and Anthropology","Space and Astronomy","Mathematics","Jupiter (Planet)","Babylon (Iraq)","Science (Journal)"],
    content : "What is perhaps more surprising is the sophistication with which they tracked the planet, judging from inscriptions on a small clay tablet dating to between 350 B.C. and 50 B.C. The tablet, a couple of inches wide and a couple of inches tall, reveals that the Babylonian astronomers employed a sort of precalculus in describing Jupiter’s motion across the night sky relative to the distant background stars. Until now, credit for this kind of mathematical technique had gone to Europeans who lived some 15 centuries later."
} );
//(109)
t.insert( {
    title : "Signs of Modern Astronomy Seen in Ancient Babylon",
    date : "Jan. 28, 2016",
    summary : "Scientists have found a small clay tablet with markings indicating that a sort of precalculus technique was used to track Jupiter’s motion in the night sky.",
    keywords : ["Archaeology and Anthropology","Space and Astronomy","Mathematics","Jupiter (Planet)","Babylon (Iraq)","Science (Journal)"],
    content : "'That is a truly astonishing find,' said Mathieu Ossendrijver, a professor at Humboldt University in Berlin, who describes his archaeological astronomy discovery in an article on Thursday in the journal Science."
} );
//(110)
t.insert( {
    title : "Signs of Modern Astronomy Seen in Ancient Babylon",
    date : "Jan. 28, 2016",
    summary : "Scientists have found a small clay tablet with markings indicating that a sort of precalculus technique was used to track Jupiter’s motion in the night sky.",
    keywords : ["Archaeology and Anthropology","Space and Astronomy","Mathematics","Jupiter (Planet)","Babylon (Iraq)","Science (Journal)"],
    content : "'It’s a figure that describes a graph of velocity against time,' he said. 'That is a highly modern concept.'Mathematical calculations on four other tablets show that the Babylonians realized that the area under the curve on such a graph represented the distance traveled. 'I think it’s quite a remarkable discovery,' said Alexander Jones, a professor at the Institute for the Study of the Ancient World at New York University, who was not involved with the research. 'It’s really quite clear from the text.'Ancient Babylon, situated in what is now Iraq, south of Baghdad, was a thriving metropolis, a center of trade and science. Early Babylonian mathematicians who lived between 1800 B.C. and 1600 B.C. had figured out, for example, how to calculate the area of a trapezoid, and even how to divide a trapezoid into two smaller trapezoids of equal area. For the most part, Babylonians used their mathematical skills for mundane calculations, like figuring out the size of a plot of land. But on some tablets from the later Babylonian period, there appear to be some trapezoid calculations related to astronomical observations. In the 1950s, an Austrian-American mathematician and science historian, Otto E. Neugebauer, described two of them. Dr. Ossendrijver, in his recent research, turned up two more. But it was not clear what the Babylonian astronomers were calculating. A year ago, a visitor showed Dr. Ossendrijver a stack of photographs of Babylonian tablets that are now held by the British Museum in London. He saw a tablet he had not seen before. This tablet, with impressions of cuneiform script pressed into clay, did not mention trapezoids, but it recorded the motion of Jupiter, and the numbers matched those on the tablets with the trapezoid calculations. 'I was certain now it was Jupiter,' Dr. Ossendrijver said. When Jupiter first appears in the night sky, it moves at a certain velocity relative to the background stars. Because Jupiter and Earth both constantly move in their orbits, to observers on Earth, Jupiter appears to slow down, and 120 days after it becomes visible, it comes to a standstill and reverses course. In September, Dr. Ossendrijver went to the British Museum, where the tablets were taken in the late 19th century after being excavated. A close-up look of the new tablet confirmed it: The Babylonians were calculating the distance Jupiter traveled in the sky from its appearance to its position 60 days later. Using the technique of splitting a trapezoid into two smaller ones of equal area, they then figured out how long it took Jupiter to travel half that distance. Dr. Ossendrijver said he did not know the astronomical or astrological motivation for these calculations. It was an abstract concept not known elsewhere at the time. 'Ancient Greek astronomers and mathematicians didn’t make plots of something against time,' Dr. Ossendrijver said. He said that until now, such calculations were not known until the 14th century by scholars in England and France. These mathematicians of the Middle Ages perhaps had seen some as yet unknown texts dating to Babylonian times, or they developed the same techniques independently. 'It anticipates integral calculus,' Dr. Ossendrijver said. 'This is utterly familiar to any modern physicist or mathematician.'"
} );

