DROP DATABASE IF EXISTS clever;
CREATE DATABASE clever;

\c clever;

CREATE TABLE notes (
id SERIAL PRIMARY KEY,
title VARCHAR,
author VARCHAR,
body TEXT NOT NULL
);

INSERT INTO notes (title, author, body) VALUES
('This is a Test', 'admin', 'Testing, Testing, 123. I rule all...MUAH HA HAHAAHAHHAHAHAHA!!!!!!!!!'),
('Why Donald Glover is Great', 'Da Great Gambino', 'This week marks one of those moments in which a single individual could make for an entire college course. Last week: Janelle Monáe. This week: Donald Glover. After he dropped his This Is America video on Saturday– incidentally the same day he hosted– nay, starred in– SNL– the intellectuals of the internet just about exploded. The video features Gambino executing sick dance moves in the foreground of a warehouse in which all kinds of other stuff is going on, but you’re too focused on Glover to notice. Every so often he’ll snap out of dancing to shoot people: first a guitarist, and then a full church choir. Shocking and replete with symbolism, the video is everyone’s favorite topic of conversation this week. Some of you are already fully ensconced in the discussion, but for those who haven’t dug in yet, I’m going to direct you to some voices on this that are worth listening to, cause my lone white voice isn’t going to cut it.



 
THE GLOWING
“a dreamy and profoundly disturbing rumination on police brutality and gun violence and the way such serious issues clash artistically with traditional nonthreatening notions of black superstardom… Glover’s output this past weekend makes clear that merely watching the throne is no longer an option.” –Rob Harvilla, The Ringer 

“The more you watch the #ThisIsAmerica video, the more you realize that there’s so much going on in the background and that Donald is just a distraction – and that’s the whole point. #StayWoke (don’t catch you slippin’ now)” –@sabu_mahlaba



 
THE NEUTRAL
“I think in a lot of ways what Glover is trying to do is really bring our focus and our attention to black violence, black entertainment [and] the way they’re juxtaposed in society. They seem to cancel each other out in the greater public consciousness,” –Rodney Carmichael, NPR’s All Songs Considered.

““This Is America” reflects the desire to use every one of our available platforms to punch at America’s conscience. So we keep recycling our trauma into art, which mainstream America then consumes and judges on the same scale as black entertainers’ less burdened white peers.” –Tre Johnson, Rolling Stone



 
THE CRITICAL
“its frustrating how re-traumatizing black ppl is the key to legibility as a high artist. It was not for us.” -@tapji

“who needs nazis when you got teamblack malegenius eager to fling black corpses for yt clout? that’s the real tea & i stand by the shit. black men serve a dead black body over a fire beat and call themselves avant-grade. must be french for lazy.” –@hoodqueer

In words longer than a tweet: The video’s depictions of violence towards black people re-traumatize a black audience. That it needed to harm its black characters to make its point about blackness in America demonstrates that it wasn’t made for a black audience, but for white viewers who need to be reminded, graphically, of the state of affairs to pay attention.

(Also, both these tweets are a part of a longer thread from a black studies PhD student at Berkeley that is worth digging into fully, and will take you 3 minutes cause it’s tweets.)



 
THE KANYE
“When God closes a Kanye, he opens a Childish Gambino” –@sarahcpr

“Without even trying, Donald Glover put Kanye West to shame” –Dani Di Placido, Forbes

That one’s emblematic of a bunch of people’s idea that “Glover is doing what Kanye thinks he’s doing.” After appearing publicly in a MAGA hat and professing his love for Trump last week, and then positing that slavery was a choice on TMZ, Kanye’s bringing up some questions about what he’s trying to do for our national conversation on race. Is this ironic? Sincere and imbalanced? An attempt at subversion, or freedom? Who knows.

Which Glover addressed this head-on in the SNL sketch called A Kanye Place, a scene set in a dark field in which Glover and his friends will be eaten by monsters if they make any noise, but they can’t keep themselves from whisper-debriefing on Kanye’s latest antics, and one by one they’re driven to loud exclamations, and get eaten. Takeaway being, he’s a total distraction, that Kanye, and yet…

Ta-Nehisi Coates on Kanye:
“West lending his imprimatur, as well as his Twitter platform of some 28 million people, to the racist rhetoric of the conservative movement. West’s thoughts are not original—the apocryphal Harriet Tubman quote and the notion that slavery was a “choice” echoes the ancient trope that slavery wasn’t that bad; the myth that blacks do not protest crime in their community is pure Giulianism; and West’s desire to “go to Charlottesville and talk to people on both sides” is an extension of Trump’s response to the catastrophe. These are not stray thoughts. They are the propaganda that justifies voter suppression, and feeds police brutality, and minimizes the murder of Heather Heyer. And Kanye West is now a mouthpiece for it.”'),
('ICanCode', '', 'ICANCODE MISSION
iCanCode’s mission is to jump-start lower and middle school kids digital literacy and afford our youth in the Rochester community the opportunity to unlock their tech future and learn about computing in a fun digital sandbox.

ICANCODE STORY
In 2013, my 1st grade son asked me to teach him how to make a game. A few hours later, he created his first game “Cupcake Eating Gorilla” and became my inspiration to provide younger kids in the Rochester community a fun environment to learn how to code. All technology is governed by code and is the soul of every electronic device our kids interact with, now, not only can they play games and install apps, they can also learn how to code and make their own!

ABOUT THE PROGRAM
iCanCode is an after-school community hub for lower and middle school kids Grades 3-10 where they can participate in various computer science based activities using fun aspects of programming and technology tools. Our curriculum is designed to help students unlock their inner Tech Whiz and develop logical thinking and problem solving skills that last a lifetime Learn more about our Program Offerings.'),
('', 'Lorie', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut morbi tincidunt augue interdum. Auctor eu augue ut lectus arcu bibendum. Sit amet est placerat in. Mauris rhoncus aenean vel elit. Adipiscing at in tellus integer. Nisi scelerisque eu ultrices vitae. Non consectetur a erat nam at. Quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna. Diam quam nulla porttitor massa id neque aliquam. Turpis egestas sed tempus urna et pharetra pharetra. Neque convallis a cras semper auctor neque vitae. Tincidunt arcu non sodales neque sodales. Eget magna fermentum iaculis eu non. Sit amet nisl suscipit adipiscing bibendum est. Cras semper auctor neque vitae. Volutpat ac tincidunt vitae semper quis lectus nulla at volutpat. Mi bibendum neque egestas congue quisque. Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper.

Neque ornare aenean euismod elementum nisi quis eleifend quam adipiscing. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Amet volutpat consequat mauris nunc congue nisi. Blandit aliquam etiam erat velit scelerisque in dictum non. Tortor id aliquet lectus proin nibh nisl. Et sollicitudin ac orci phasellus egestas. Et tortor at risus viverra adipiscing. Egestas purus viverra accumsan in. Enim neque volutpat ac tincidunt. Ac tortor dignissim convallis aenean et tortor at risus viverra. Ullamcorper eget nulla facilisi etiam dignissim diam quis. Maecenas pharetra convallis posuere morbi leo urna molestie at elementum. Dui id ornare arcu odio ut. Tristique senectus et netus et malesuada fames ac. Tortor at auctor urna nunc id cursus metus aliquam. Diam maecenas ultricies mi eget mauris. Nascetur ridiculus mus mauris vitae ultricies leo.'),
('', '', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet aliquam id diam maecenas. Convallis aenean et tortor at risus viverra adipiscing at in. Varius vel pharetra vel turpis nunc. Nunc faucibus a pellentesque sit amet porttitor eget dolor morbi. Malesuada bibendum arcu vitae elementum curabitur. Id venenatis a condimentum vitae sapien pellentesque habitant morbi tristique. Venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin. Turpis egestas maecenas pharetra convallis. Dolor purus non enim praesent elementum facilisis leo vel fringilla.'),
('', 'HipsterJoey', 'Lorem ipsum dolor amet hella cliche cold-pressed, letterpress biodiesel food truck tote bag raclette sustainable wolf. Neutra gochujang photo booth narwhal church-key cardigan tousled. Bespoke vegan hot chicken mustache keytar forage wayfarers bushwick artisan tattooed you probably haven''t heard of them live-edge lomo. Blue bottle austin dreamcatcher palo santo fashion axe kitsch fingerstache.

Offal migas fixie roof party, shaman freegan palo santo locavore wayfarers vaporware 90''s cold-pressed la croix leggings selfies. Poke palo santo cliche distillery vice fixie butcher dreamcatcher ugh cardigan thundercats. You probably haven''t heard of them PBR&B neutra, ennui retro migas literally kombucha squid biodiesel enamel pin flexitarian tilde shoreditch. Mixtape master cleanse kogi shaman mustache umami street art. Farm-to-table activated charcoal tousled narwhal leggings readymade ugh cornhole banh mi kale chips heirloom hell of. Seitan direct trade farm-to-table PBR&B authentic. Art party green juice echo park activated charcoal locavore meh hell of keffiyeh everyday carry tumblr adaptogen knausgaard vegan cold-pressed.

Tattooed franzen cred ethical tofu, kogi you probably haven''t heard of them. Adaptogen shoreditch cornhole distillery squid literally hashtag leggings raclette bushwick deep v tacos pop-up gentrify. Truffaut air plant wayfarers mustache trust fund swag live-edge knausgaard. Chambray godard church-key, vape raclette health goth whatever art party chicharrones.

Oh. You need a little dummy text for your mockup? How quaint.

I bet you’re still using Bootstrap too…'),
('Please Delete', 'admin', 'Made an err');