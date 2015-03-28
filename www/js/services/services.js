(function() {
	'use strict';

	angular.module('whynotme.services', [])
		.factory('Album', function() {
			var obj = {};
			
			obj.albums = [
				{ 
					id: 1, 
					title: 'When nonsense makes perfect sense', 
					pubyear: 'February 2015', 
					cover: 'when_nonsense_makes_perfect_sense.jpg',
					songs: [
						{ 
							title: 'Welcome to Methadonia', 
							url: '', 
							duration: '',
							chords: '',
							lyrics: 'We are the typically race of cold black heart. '+
											'Maybe you have heard of us, '+
											'build it up and tear it apart. '+
											'We are the only ones with the time and means. '+
											'Puff puff give, pop a pill. I\'m still high it\'s making me ill.\n\n'+
											'Welcome, welcome, welcome to Methadonia. '+
											'Welcome, welcome, welcome to Methadonia. '+
											'Welcome, welcome, welcome to Methadonia. '+
											'Welcome, wake up, welcome to where time stands still we kill.\n\n'+
											'We\'ve been wasting to much time, you or yours of mine. '+
											'I\'ve been watching to much porn, wanking of I\'m almost blind. '+
											'Late at night turn to the streets, pick up the pace, get drunk. '+
											'Where the ones with the booze, to much drugs, fucked up tattoos!\n\n'+
											'Welcome, welcome, welcome to Methadonia. '+
											'Welcome, welcome, welcome to Methadonia. '+
											'Welcome, welcome, welcome to Methadonia. '+
											'Welcome, wake up, welcome to where time stands still we kill.\n\n'+
											'We are the one intoxicated. '+
											'We are the ones married than separated. '+
											'We\'re alcoholics, self abusers. '+
											'Liver damage, drugs users.\n\n'+
											'Welcome, welcome, welcome to Methadonia. '+
											'Welcome, welcome, welcome to Methadonia. '+
											'Welcome, welcome, welcome to Methadonia. '+
											'Welcome, wake up, welcome to where time stands still we kill.'

						},
						{ 
							title: 'Hate and aggression', 
							url: '', 
							duration: '',
							lyrics: 'What if we all woke up. '+
											'And said enough is enough. '+
											'Do you think they would listen to us. '+
											'Uneducated, unpolished and rough. '+
											'No I don\'t think so. '+
											'We have been asleep for so long. '+
											'I\'m affraid the damage has been done. '+
											'We burned all the bridges, the only thing left is to run.\n\n'+
											'I wanna make my own decisions. '+
											'I create my own frustrations. '+
											'I wish I was deaf, when I listen to you. (When I listen to you) '+
											'Wanna feel love and passion. '+
											'I\'m done with hate and aggression.\n\n'+
											'When we all fall asleep. '+
											'Afraid of falling in to deep. '+
											'Hope when we wake up. '+
											'Someone says: WAZZUP. '+
											'I know it must be hard. '+
											'When you have delt all your cards. '+
											'In need of integrity. '+
											'Thats what you get, when you second guessed me. (When you second guess me).\n\n'+
											'I wanna make my own decisions. '+
											'I create my own frustrations. '+
											'I wish I was deaf, when I listen to you. (When I listen to you) '+
											'Wanna feel love and passion. '+
											'I\'m done with hate and aggression.\n\n'+
											'I wanna make my own decisions. '+
											'I create my own frustrations. '+
											'I wish I was deaf, when I listen to you. (When I listen to you) '+
											'Wanna feel love and passion. '+
											'I\'m done with hate and aggression.\n\n'

						},
						{ 
							title: 'Hello cockatoo', 
							url: '', 
							duration: '',
							lyrics: 'A classic example of a boy\'s young mind. '+
											'He tells the girl her breasts are fine. '+
											'She\'s got a saggy ass that smells like shit. '+
											'Never backing down for a willing young clit. '+
											'(Never backing down for a willing young clit).\n\n'+
											'You think you\'ve got a problem, well he got one too. '+
											'He drops down his pants, say hello cockatoo. '+
											'He\'s cock and his balls are ready to burst. '+
											'It\'s not that big but it clense your thirst. '+
											'(It\'s not that big but it clense your thirst).\n\n'+
											'It might be small, but I got a trick. '+
											'Do you wanna taste my Cheese Doodle dick. '+
											'You can\'t take a bit, but you can lick. '+
											'It\'s not that long and it\'s not that thick. '+
											'Don\'t you wanna taste my Cheese Doodle dick .\n\n'+
											'You think you\'ve got a problem, well he got one too. '+
											'He drops down his pants, say hello cockatoo. '+
											'He\'s cock and his balls are ready to burst. '+
											'It\'s not that big but it clense your thirst. '+
											'It might be small, but I got a trick. '+
											'Do you wanna taste my Cheese Doodle dick. '+
											'You can\'t take a bit, but you can lick. '+
											'It\'s not that long and it\'s not that thick. '+
											'Don\'t you wanna taste my Cheese Doodle dick.'
											
						},
						{ 
							title: 'Paint the town bright', 
							url: '', 
							duration: '',
							lyrics: 'So nice, waking up alone again, my head don\'t hurt from the night before. '+
											'So good I think I got used, but didn\'t have to pay for a whore.\n\n'+
											'So tonight, it\'s allright, I\'m gonna get drunk and I\'m gonna fight. '+
											'I \'m gonna paint the town bright tonight.\n\n'+
											'So nice, picking up the boys again, we\re going downtown to raise a hell '+
											'It stared of nice, then it came as no surprise, we all ended up in a cell.\n\n'+
											'So tonight, it\'s allright, I\'m gonna get drunk and I\'m gonna fight. '+
											'I \'m gonna paint the town bright tonight.\n\n'+
											'We want no cure, we will do it all again. '+
											'Hey, hey, hey hey.\n\n'+
											'So tonight, it\'s allright, we\'re gonna get drunk and we\'re gonna fight. '+
											'We\'re gonna paint the town bright tonight.\n\n'+
											'So tonight, it\'s allright, we\'re gonna get drunk and we\'re gonna fight. '+
											'We\'re gonna paint the town bright tonight.\n\n'

						},
						{ 
							title: 'Fuck you then', 
							url: '', 
							duration: '',
							chords: 'Verse: D | G | D | C D | D# | A# | D# | E# D#\n'+
											'Ref: G | Hb | F | C D | D# | D | G',
							lyrics: 'Takes a while, finding a way to cosurvive. Not pushed aside, by all of you. '+
											'Under the impression of let me through, don\'t care what happens to. '+
											'Yell at me, for bringing controversity. Ignore the fact that you\'ve began. '+
											'Trying to make you\'re son become, just like you.\n\n'+
											'So you\'re people fuck you then.\n\n'+
											'Off to work, right next to the office jerk. '+
											'Always knowing better than all the rest. '+
											'He\'s the guy who knows the best. Everyone sees .'+
											'Transparency, an idea works in theory. '+
											'Authority doens\'t care for it. Exposing all that corporate shit, that you don\'t wanna know.\n\n'+
											'So you\'re people fuck you then.\n'+
											'So you\'re people fuck you then.'
						},
						{ 
							title: 'Beats me',
							url: '',
							duration: '',
							lyrics: 'All the wealth we enjoy, we\'ve got from gold. '+
											'No green direction, we pollute our souls. '+
											'We\'ve got nothing to show for the day the drain runs out of flow. '+
											'We can\'t build roads or even go to hell. '+
											'We\'ve just rich morons, spoiled, whats that smell. '+
											'When a leader gets fired, he\' reallocated upstairs.\n\n'+
											'Beats me, I don\'t wanna think about it. '+
											'Set me free, enlighten me to know about it. '+
											'Beats me, I didn\'t care about it.\n\n'+
											'Tell me something I didn\'t know before. '+
											'Tell me something I can\'t ignore. '+
											'Maybe I\'ll start paying attention to what\'s going on. '+
											'Try to open up your eyes and see. '+
											'Before they fuck us, our society. '+
											'It\'s elementry.\n\n'+
											'Beats me, I don\'t wanna think about it. '+
											'Set me free, enlighten me to know about it. '+
											'Beats me, I didn\'t care about it.\n\n'+
											'Beats me, I don\'t wanna think about it. '+
											'Set me free, enlighten me to know about it. '+
											'Beats me, I didn\'t care about it.\n\n'+
											'Beats me, I don\'t wanna think about it. '+
											'Set me free, enlighten me to know about it. '+
											'Beats me, I didn\'t care about it.\n\n'

						},
						{ 
							title: 'Killer like killer', 
							url: '', 
							duration: '',
							lyrics: 'If you we\re to say you\'ve commited no crime. '+
											'You would be a lier, you would be wasting my time. '+
											'Cause I know so much better, sons are together. '+
											'Father like son, killer like killer.'+
											'You\'re like a rash, never ending lister. '+
											'For some reason, you\'re still prime minister. '+
											'Sit back and hear my final summary. '+
											'When you die I will shit all over your memory.\n\n'+
											'Hey, you can\'t make this go away. '+
											'You got yours to answer for, on your dying day. '+
											'Hey, it will never go away. '+
											'The damage done it\'s over son. '+
											'Take some time and think about today. \n\n'+
											'As you we\'re to blame and glad you escaped. '+
											'You left behind frustraction and hate. '+
											'Don\'t you see, it\'s not meant to be. '+
											'We\'re not meant to die, we\'re meant to be free. '+
											'The battle was won, the battle was won. '+
											'You takes us back where where we wanna buy guns. '+
											'You divide when you should unite. '+
											'You have woken the beast, so now we fight.\n\n'+
											'Hey, you can\'t make this go away. '+
											'You got yours to answer for, on your dying day. '+
											'Hey, it will never go away. '+
											'The damage done it\'s over son. '+
											'If you we\re to say you\'ve commited no crime. '+
											'You would be a lier, you would be wasting my time. '+
											'Cause I know so much better, sons are together. '+
											'Father like son, killer like killer.'+
											'You\'re like a rash, never ending lister. '+
											'For some reason, you\'re still prime minister. '+
											'Sit back and hear my final summary. '+
											'When you die I will shit all over your memory.\n\n'+
											'Hey, you can\'t make this go away. '+
											'You got yours to answer for, on your dying day. '+
											'Hey, it will never go away. '+
											'The damage done it\'s over son. '+
											'So take some time and think about today.\n\n'+
											'Hey, you can\'t make this go away. '+
											'You got yours to answer for, on your dying day. '+
											'Hey, it will never go away. '+
											'The damage done it\'s over son. '+
											'Take some time and think your ways.'
						},
						{ 
							title: 'In a bag', 
							url: '',
							duration: '',
							lyrics: 'I have figured out a brand new game. '+
											'It is to walk in a bag. '+
											'From my place in it I can see you. '+
											'You can see the bag, but not me. '+
											'(See the bag, Whynotme). '+
											'I go to the city to get fed. '+
											'I meet a girl, she gives head.\n\n'+
											'Everyone who sees the bag. '+
											'Thinks wierdo, but I\'m no fag.\n\n'+
											'I am inside of a bag, everyone turnes around, but who is inside they don\'t know. '+
											'I am inside of a bag, everyone turnes around, but who is inside they don\'t know.\n\n'+
											'I walk around and make a show. '+
											'Not one is mad, they all glow. '+
											'Into a classroom, whats the sum. '+
											'Down on a caoch, I play dumb.\n\n'+
											'The teacher sit down and they stare. '+
											'Maybe I\'m an in-struct-tor.\n\n'+
											'I am inside of a bag, everyone turnes around, but who is inside they don\'t know. '+
											'I am inside of a bag, everyone turnes around, but who is inside they don\'t know.\n\n'+
											'People point and shout, I let them do. '+
											'Hey there\'s another bag, we are two. '+
											'We want all your drugs and all your beer. '+
											'No one says no, they do not dare.\n\n'+
											'Thank you for what we\'ve got. '+
											'We\'re wasted now, it means alot\n\n.'+
											'I am inside of a bag, everyone turnes around, but who is inside they don\'t know. '+
											'I am inside of a bag, everyone turnes around, but who is inside they don\'t know.'
						},
						{ 
							title: 'WNM', 
							url: '', 
							duration: '',
							lyrics: 'Well here I stand with a mike in my hand, and I\'m doing the best that I can. '+
											'I might sound like a mule, but pour me some fuel, shut the fuck up and take it like a man. '+
											'We\'re pounds away in the mysterious ways, sometimes he even keeps the pace. '+
											'When he falls out he listens to me, why the hell can\'t you just follow the bass?\n\n'+
											'The reason is quite clear, cause the bass is never here. '+
											'He\'s at home devouring burgers, drinking beer. '+
											'We miss you big bastard, follow him not me. '+
											'Some reason we wish you we\'re here.\n\n'+
											'Barry plays guitar when not hitting the bars, at the age of 32 he starts to drink. '+
											'Moved to the city and we know it won\'t end pretty, at least we hope he ends up with some ink. '+
											'Even Folke tries to play and he might succeed some day, but for now we find that hard to believe. '+
											'He doens\'t rehearse, forget every verse, he makes it hard to be Whynotme.\n\n'+
											'Sometimes we\'re angry, sometimes we don\'t give a fuck. '+
											'Thats the upside when you\'re unsigned, you can leave it all behind when you get stuck. '+
											'We sing about politics it makes me sick. '+
											'We sing about ass, pussy, suck my dick. '+
											'No one really cares so why should we. '+
											'No one really listens to Whynotme.'


						}
					]
				},
 				{ 
 					id: 2, 
 					title: 'And out came shit II', 
 					pubyear: 'June 2011', 
 					cover: 'And_out_came_shit.jpg',
 					songs: [
 						{ 
 							title: 'I can\'t fuck', 
 							url: 'And_out_came_shit_II/I_cant_fuck.mp3', 
 							duration: '1:35',
 							chords: 'Verse: G | D# | A# | C :: G\n'+
 											'Ref: G | C | A# | D# :: D',
 							lyrics: 'I can\'t fuck when your pussys all shut, '+
 											'it\'s not very nice when you treat me like a mutt. '+
 											'I can\'t take it. '+
 											'I can\'t get laid if the pussys ain\'t paid, I gave you everything, rejected anyway. '+
 											'I can\'t take it no more.\n\n'+
 											'I say fuck you if you wont fuck me. '+
 											'You say no way, makes me wonder if you are gay.\n\n'+
 											'You smoke my stash or hide it up your ass, '+
 											'you can\'t keep it there, cause I need the cash. '+
 											'You can\'t have it, '+
 											'so where the hell are you when I am feeling blue, '+
 											'you pissed in my bong, now I have got the flu. '+
 											'I can\'t smoke it no more.\n\n'+
 											'I say fuck you if you wont fuck me. ' +
 											'You say no way, makes me wonder if you are gay\n\n'+
 											'You can\'t blow are you all for show, '+
 											'I\'ll smack you in the face, with an hard elbow. '+
 											'You can\'t take it. '+
 											'I will get drunk you think im all junk, '+
 											'but you can\'t stop me, cause im a PUNK. '+
 											'I can\'t take it no more. '+
 											'Yeah.'
						},
 						{ 
 							title: 'Down', 
 							url: 'And_out_came_shit_II/Down.mp3', 
 							duration: '2:56',
 							chords: 'Intro: D | D/E | D/F | Gm\n'+
 											'Verse: D | A# | C | F | A\n'+
 											'Bridge: G | Hb | F | C :: A\n'+
 											'Ref: D | F | A# | G | F | A# | G | A\n'+
 											'Part: D | A# | G',
 							lyrics: 'Brings me down, watch you fade away into the dark, '+
 											'like our next summer-holiday. '+
 											'I feel I should, better understood, '+
 											'all the things that we went through, '+
 											'didn\'t know that it would rip us apart.\n\n'+
											'Now I feel like I\'m choking on something. '+
											'The whole world\'s coming crashing down\n\n'+
											'Now I\'m sorry, i\'m sorry, i\'m sorry. '+
											'Everything was fine but nothing seems to last in the end. '+
											'Now i\'m lonely, i\'m lonely, i\'m lonely. '+
											'On top of the roof looking down down down down down.\n\n'+
											'Recall the things, all the things we shared, '+
											'I remember all the good stuff, '+
											'I remember what you used to do. '+
											'But now, its gone, better left undone, '+
											'now i\'m standing in the rain, '+
											'pouring down down down down\n\n'+
											'Now I feel like I\'m choking on something. '+
											'The whole world\'s coming crashing down.\n\n'+
											'Now I\'m sorry, i\'m sorry, i\'m sorry. '+
											'Everything was fine but nothing seems to last in the end. '+
											'Now i\'m lonely, i\'m lonely, i\'m lonely. '+
											'On top of the roof looking down down down down down.\n\n'+
											'Now I feel like I\'m choking on something. '+
											'The whole world\'s coming collapsing down.\n\n'+
											'Now I\'m sorry, i\'m sorry, i\'m sorry. '+
											'Everything was fine but nothing seems to last in the end. '+
											'Now i\'m lonely, i\'m lonely, i\'m lonely. '+
											'On top of the roof looking down down down down down.'
											

 						},
 						{ 
 							title: 'Change my life', 
 							url: 'And_out_came_shit_II/Change_my_life.mp3', 
 							duration: '2:50',
 							chords: 'Intro: D | F | C\n'+
 											'Verse: D | A# | C | D | D | A# | F | G\n'+
 											'Bridge: C | D | A# :: G | A | D\n'+
 											'Ref: A# | C | D | F :: D\n'+
 											'Part: G | A# | D',
 							lyrics: 'I don\'t have a place to live but I don\'t give a fuck. '+
 											'Everywhere there\'s options, but yet i\'m feeling so stuck. '+
 											'Entering an intersection but i don\'t know where to go. '+
 											'All the places i\'ve been before	they all made me feel so.\n\n'+
 											'Things are never what they seem to be and I don\'t know where I am. '+
 											'These squares are fake and I walking in a circle and I don\'t know who I am.\n\n'+
 											'Wanna change my life, I\'ll change it all for you. '+
 											'Wanna change it all, i\'ll change it all somehow. '+
 											'Wanna change my life to something else than this.\n\n'+
 											'I\'m giving it all but I don\'t know what they get. '+
 											'You\'re probably wasting your time but now its set. '+
 											'I don\'t know where we\'re going and I don\'t know where we end. '+
 											'Building an union is equal to the time we spend.\n\n'+
 											'When I am king you\'ll be the first against the wall. '+
 											'This kingdom will die, it will never be the same as it just to be before\n\n'+
 											'Wanna change my life, i\'ll change it all for you. '+
 											'Wanna change it all, i\'ll change it all somehow. '+
 											'Wanna change my life to something else than this.\n\n'+
 											'STAND UP, RAISE YOUR FIST AND SHOUT!'


 						},
 						{ 
 							title: 'Hit me', 
 							url: 'And_out_came_shit_II/Hit_me.mp3', 
 							duration: '0:57',
 							chords: 'Intro C | A# | A | F\n'+
 											'Verse: D D/F D/Fsus4 D/F | A# A#/C A#/Csus4 A# :: C | A# | A | F\n'+
 											'Ref: D | A# | G | C | F | A :: A# | A',
 							lyrics: 'Hit me and kick me while I\'m on the ground. '+
 											'Leave me some place where you think I might not ever be found. '+
 											'Put me in a plastic bag and drive me to the sea. '+
 											'Handcuff my wrists cause i don\'t seem to agree.\n\n'+
 											'Hate me and punch out my lights once again. '+
 											'Hear the croud cheer while the ref counts to ten. '+
 											'(9 8 7 6 5 4 3 2 1) '+
 											'Leave me behind as you walk out the door. '+
 											'A bullet in your back, and your face cracks on the floor.'
 						},
 						{ 
 							title: 'I believe', 
 							url: 'And_out_came_shit_II/I_believe.mp3', 
 							duration: '2:22',
 							chords: 'Verse: G | D | C\n'+
 											'Ref: G | A# | F | G',
 							lyrics: 'I turn to God, I turn to Jesus. '+
				 							'I paid attention to the words they tried to teach us. '+
				 							'But I started debati\'n. '+
				 							'The day I met satan. '+
				 							'So now Im pretty fucked, but I don\'t give a fuck start celebrati\'n.\n\n'+
				 							'Send me straight to hell.\n\n'+
				 							'Oi oi oi oi.\n\n'+
				 							'Well I placed my bet, sure took a beati\'n. '+
				 							'I lost it all and i was left down barely breathi\'n. '+
				 							'But I took a stand there. '+
				 							'Though I nearly died there. '+
				 							'Still I\'m fucked, ran shit out of luck, man this sucks, but I still believe.\n\n'+
				 							'I still believe, I still believe, I still believe. '+
				 							'I believe in individual rights, so fuck the politics.\n\n'+
				 							'Fuck it all, fuck it all, fuck it all. '+
				 							'I believe i got no rights, stand up say fuck it all.'

 						},
 						{ 
 							title: 'Smalltown', 
 							url: 'And_out_came_shit_II/Smalltown.mp3', 
 							duration: '3:03',
 							chords: 'Intro G/D | Gm/D | Gsus4 | Gm/D | F :: D/A (guitar1)\n'+
 											'Intro G | D | C | D# | A# | D# | D (guitar2)\n'+
 											'Verse: G | D# | D :: A# | F | D# | A# | D# | D\n'+
 											'Ref: D# | C | G | A# :: G (D)',
 							lyrics: 'Skating down the streets on concreete. '+
				 							'Some guy is passing by. '+
				 							'With a misspelled tattoo on his upper arm, '+
				 							'stating that I live to dye\n\n'+
				 							'Some yards are sat on fire. '+
				 							'Please, come on, let the motherfucker burn. '+
				 							'I don\'t need no vacation either. '+
				 							'Cause I never leave this world (leave this world).\n\n'+
				 							'Welcome to the smalltown where your life belongs to everyone, '+
				 							'and everyone is somehow related to you. '+
				 							'Welcome to the smalltown where your grades can make you drop down, '+
				 							'to a class containing your drunken abusive dad. It\'s sad.\n\n'+
				 							'Sun is shining, take a look around, '+
				 							'nothing happens please do make a sound. '+
				 							'Make some noise cause I don\'t wanna hear, '+
				 							'all these voices that are in my head (in my head).\n\n'+
				 							'Welcome to the smalltown where your life belongs to everyone, '+
				 							'and everyone is somehow related to you. '+
				 							'Welcome to the smalltown where your grades can make you drop down, '+
				 							'to a class containing your drunken abusive dad.\n\n'+
				 							'Welcome to the smalltown where your life belongs to everyone, '+
				 							'and everyone is somehow related to you. '+
				 							'Welcome to the smalltown where your grades can make you drop down, '+
				 							'to a class containing your drunken abusive dad.'
 						},
 						{ 
 							title: 'Big fat bastard', 
 							url: 'And_out_came_shit_II/Big_fat_bastard.mp3', 
 							duration: '2:49',
 							chords: 'Intro: D\n'+
 											'Verse: D | A# | Gm | A :: F :: (D F E | F E)  A\n'+
 											'Bridge: G | A'+
 											'Ref: D | A | G | D | C',
 							lyrics: 'Sorry guys I can\'t come today. '+
				 							'That is all we hear that motherfucker say. '+
				 							'I need some time to watch tv. '+
				 							'My dog ate my homework, '+
				 							'and my father is at sea.\n\n'+
				 							'Sorry guys I can\'t come today. '+
				 							'Why don\'t you tape it so i can watch you play, '+
				 							'everyday, that you say you\'re away, you\'re at home. '+
				 							'You fucking laying-hen, you fucking laying-hen.\n\n'+
				 							'Where the hell is the Big fat bastard. '+
				 							'Nowbody knows. '+
				 							'He\'s always at home, '+
				 							'thats why we ain\'t doing shows.\n\n'+
				 							'Sorry guys I can\'t come today. '+
				 							'That is all we hear that motherfucker say. '+
				 							'My brother is having a party just for me, '+
				 							'I would like you to come, '+
				 							'but you are not my family.\n\n'+
				 							'Sorry guys I can\'t come today. '+
				 							'I popped my knee and I got bills to pay. '+
				 							'There\'s a beer in my rear, '+
				 							'what the hell\'s it doing there, '+
				 							'oh yeah, am I a queer?\n\n'+
				 							'Where the hell is the Big fat bastard. '+
				 							'Nowbody knows. '+
				 							'He\'s always at home, '+
				 							'thats why we ain\'t doing shows.\n\n'+
				 							'I am the Big fat bastard. '+
				 							'So now you know, '+
				 							'I am always at home, '+
				 							'Whynotme\'s all alone.\n\n'+
				 							'I am the Big fat bastard. '+
				 							'So now you know, '+
				 							'I am always at home, '+
				 							'Thats why.'

 						},
 					]
 				},
 				{ 
 					id: 3, 
 					title: 'And out came shit I', 
 					pubyear: 'April 2010', 
 					cover: 'And_out_came_shit.jpg',
 					songs: [
 						{ 
 							title: 'One by one', 
 							url: 'And_out_came_shit_I/One_by_one.mp3', 
 							duration: '1:18',
 							chords: 'Verse: D | F# | C | A\n'+
 											'Ref: F | A | F | C | A',
 							lyrics: 'So many beers gattered on one plate. '+
 											'Watch the glasses turn empty as I accelerate. '+
 											'Watch them go down, watch glass fly, loving it. '+
 											'This is my war against soberness you see. '+
 											'I have seen what it does to people I don\'t want it to be me. '+
 											'So I pin them down one by one.\n\n'+
 											'One by one. '+
 											'We\'re killing again. '+
 											'We got to many braincells to many anyway. '+
 											'One by one. '+
 											'I wish it could be two three four or five. '+
 											'I pass one down to you. '+
 											'One by one\n\n'+
 											'So i did my time by drinking all sorts of wine. '+
 											'Shooting down tequilas with yet another twist of lime. '+
 											'Lets build a pyramid, loving it. '+
 											'Gotta admit I could have done this on my own. '+
 											'Gotta lot of friends they are all so drunk to the bone. '+
 											'We all pin them down.\n\n'+
 											'One by one '+
 											'We\'re killing again. '+
 											'We got to many braincells to many anyway. '+
 											'One by one. '+
 											'I wish it could be two three four or five. '+
 											'I pass one down to you. '+
 											'One by one'

 						},
 						{ 
 							title: 'Fucked up again', 
 							url: 'And_out_came_shit_I/Fucked_up_again.mp3', 
 							duration: '2:54',
 							chords: 'Verse: E | H | A | H\n'+
 											'Ref: C | A | E | G',
 							lyrics: 'I fucked up again. Shouldn\'t have written that song and now I\'m scared. '+
				 							'Cause I might do it again. And I\'m afraid I will loose you as a friend. '+
				 							'Though, it wasn\'t that tense. I got nothing to say in my defense. '+
				 							'I thought it might be fun, but now were all over and done.\n\n'+
				 							'Now I\'m drunk as never before, pretty fed up with the fuckers next door. '+
				 							'Playing their annoying techno shit, don\'t want to be a part of it. '+
				 							'I\'m sorry L for giving you hell, we went up and right back again. '+
				 							'Somehow it allways turns to shit, god I\'m loosing it.\n\n'+
				 							'I\'m sorry for lies. But I won\'t back down or appologize. '+
				 							'Cause I know you don\'t care, we\'ve never been much and were not going anywhere. '+
				 							'Sorry for pulling you in, I know how it should end, but I don\'t know how to begin. '+
				 							'So I do what I do best, I write a bad song and fail every goddamn test\n\n'+
				 							'Now I\'m drunk as never before, pretty fed up with the fuckers next door. '+
				 							'Playing their annoying techno shit, don\'t want to be a part of it. '+
				 							'I\'m sorry L for giving you hell, we went up and right back again. '+
				 							'Somehow it allways turns to shit, god I\'m loosing it.\n\n'+
				 							'Now I\'m drunk as never before, pretty fed up with the fuckers next door. '+
				 							'Playing their annoying techno shit, don\'t want to be a part of it. '+
				 							'I\'m sorry L for giving you hell, we went up and right back again. '+
				 							'Somehow it allways turns to shit, god I\'m loosing it.'
				 							
 						},
 						{ 
 							title: 'How does it feel', 
 							url: 'And_out_came_shit_I/How_does_it_feel.mp3', 
 							duration: '2:35',
 							chords: 'Intro: E | H | C  | G | H | G F#\n'+
 											'Verse: E | H | C | G :: 2 D/A :: H\n'+
 											'Ref: E | G | D | C H | E\n'+
 											'Part: E | H | C',

 							lyrics: 'Eyes wide open mouth still shut. '+
 											'So many times and still we\'re giving up. '+
 											'Somehow it comes so easy to me, to sit my ass down and quietly agree.\n\n'+
 											'Hey, we never wanted you dead. But it feels so good to see you screaming in pain. '+
 											'Hey, tell me how does it feel. Created by me this nightmare is suddenly real. '+
 											'Tell me how does it feel\n\n'+
 											'Destroying idols killing all our dreams. '+
 											'Maybe good intentions using all the wrong means. '+
 											'Maybe fictive values got no doctor degree. '+
 											'To sit my ass down and quietly submit. '+
 											'To the powerfucks that makes me feel like shit.\n\n'+
 											'Hey, we never wanted you dead. '+
 											'But it feels so good to see you screaming in pain. '+
 											'Hey, tell me how does it feel. Created by me this nightmare is suddenly real. '+
 											'Tell me how does it feel.'
 						},
 						{ 
 							title: 'From Russia with vodka', 
 							url: 'And_out_came_shit_I/From_russia_with_vodka.mp3', 
 							duration: '3:50',
 							chords: 'Intro: H | F#/C# | D9 | E/H\n'+
 											'Verse: H | G E | H | G | D | A :: E | F#\n'+
 											'Ref: Hm | F# | D | A | G | G/F# | A | D :: G | A | H :: A | G | A | H | D\n'+
 											'Part: D | Hm | D | C#\n'+
 											'Outro: E :: G | Em | Hm | D',
 							lyrics: 'So the borders have opened up wide, I can go where I never been before, so I did. '+
 											'Through the iron curtain I went to track down you. '+
 											'Your former name was Smetanina, now your known as the russian girl with vodka. '+
 											'I know I am the only one for you.\n\n'+
 											'(I\'ve been traveling) I\'ve been traveling in long lost confusion. '+
 											'I don\'t understand what your saying to me. '+
 											'(To me) Now I stand here in acid pollution. '+
 											'I don\'t understand what you do.\n\n'+
 											'Now I\'ve learned I can\'t bring you back with me. '+
 											'No chance in hell, they\'re weired, they\'re your family. '+
 											'I\'m sorry I\'m leaving this feeling is east-european. '+
 											'I can\'t be sure I did the right thing. No, I can\'t be sure I did the right thing you know. '+
 											'Don\'t cross the border, it\'s about to close, oh yeah.\n\n'+
 											'(I\'ve been traveling) I\'ve been traveling in long lost confusion. '+
 											'I don\'t understand what your saying to me. '+
 											'(To me) Now I stand here in acid pollution. I don\'t understand what you do. '+
 											'I don\'t understand what your saying to me.\n\n'+
 											'From Russia, from Russia, I\'ve have vodka in my vains. '+
 											'From Russia, From Russia, I\'m gonna drink you down the drain. '+
 											'From Russia, from Russia, I\'ve got vodka, you got brain. '+
 											'From Russia, from Russia, drink this and you\'ll go insane.'
 						},
 						{ 
 							title: 'TL', 
 							url: 'And_out_came_shit_I/TL.mp3', 
 							duration: '1:40',
 							chords: 'Verse: E | C | G | D\n'+
 											'Bridge: E | E/C :: H\n'+
 											'Ref: E | H C | G | D | E | C | G | H :: E',
 							lyrics: 'He is our only fan, why we don\'t give a damn. '+
				 							'Don\'t know why what the hell is his problem. '+
				 							'He must be drunk or wasted or something. '+
				 							'Tell me now, tell me whats his name. Tell me his name. '+
				 							'Tell me his name, ah.\n\n'+
				 							'He\'s got a brother from the same mother. '+
				 							'We are to loud, but he don\'t seem to bother. '+
				 							'You hear us when it calls, when he\'s in shopping malls. '+
				 							'You can see the man has balls. Tell me his name. '+
				 							'Tell me his name, ah.\n\n'+
				 							'TL, what the hell. We wonder why you think were swell. '+
				 							'It didn\'t take that long, didn\'t take that long to write this song. '+
				 							'TL, what the fuck, we used to be bad but with you we just suck. '+
				 							'Take this song and shut, shut the fuck up.\n\n'+
				 							'He is our world wide web, he should get drunk instead. '+
				 							'Plays our songs to every occasion. '+
				 							'Oh no my friend, don\'t play those songs again. '+
				 							'Fed up but now they know your name. '+
				 							'Know your name. Know your name, ah.\n\n'+
				 							'TL, what the hell. We wonder why you think were swell. '+
				 							'It didn\'t take that long, didn\'t take that long to write this song. '+
				 							'TL, what the fuck. We used to be bad but with you we just suck. '+
				 							'Take this song and shut, shut the fuck up. '+
				 							'TL what the hell.'

 						},
 						{ 
 							title: 'Fuckalujah', 
 							url: 'And_out_came_shit_I/Fuckalujah.mp3', 
 							duration: '',
 							lyrics: ''
 						},
 					]
 				},
 				{ 
 					id: 4, 
 					title: 'Sparkling chandeliers (single)', 
 					pubyear: 'May 2008', 
 					cover: 'And_out_came_shit.jpg',
 					songs: [
 						{ title: 'Sparkling chandeliers', url: 'Sparkling_chandeliers/Sparkling_chandeliers.mp3', duration: '3.24'}
 					]
 				},
 				{ 
 					id: 5, 
 					title: 'The rise of the big fat bastard',
 					folder: 'The_rise_of_the_big_fat_bastard/',
 					pubyear: 'November 2007', 
 					cover: 'The_rise_of_the_big_fat_bastard.jpg',
 					songs: [
 						{ 
 							title: 'Second best', 
 							url: 'The_rise_of_the_big_fat_bastard/second_best.mp3', 
 							duration: '2:10',
 							chords: 'Verse: F#->G | D->E | H->C | H->A | A D | D->C\n'+
										   'Ref: C | D | E |:G',
 							lyrics: 'Just this once i would like to reach an end. '+
 											'Of something great maybe something I have made. '+
 											'With my own hands, developed in my mind. '+
 											'Would like to say i didn\'t wast my time. '+
 											'I wanna know how it feels to be content. '+
 											'To be satisfied with time and effort well spent. '+
 											'Fall asleep with a smile on my face, so proud, '+
 											'finally pulled myself out of the haze.\n\n'+
 											'But it all seems so far away (guess there\'s nothing left to say). '+
 											'I will wake up tomorrow where I fall asleep today, (sleep today). '+
 											'And it all feels so long ago (when i first told myself no). '+
 											'Nothing but a puppet, nothing but a show.\n\n'+
 											'Just this once i would like to reach an end. '+
 											'Of something great maybe something I have made. '+
 											'With my own hands developed in my mind. '+
 											'Would like to say i didn\'t wast my time. '+
 											'Increase the pace cause I\'m running out of time. '+
 											'Need to succede before I go blind. '+
 											'I\'m on a quest no longer second best. '+
 											'Sorry to say I failed yet another test.\n\n'+
 											'But it all seems so far away (guess there\'s nothing left to say). '+
 											'I will wake up tomorrow where I fall asleep today, sleep today. '+
 											'And it all feels so long ago (when I first told myself no). '+
 											'Nothing but a puppet, nothing but a show.'
 						},
						{ 
							title: 'Deuce',
							url: 'The_rise_of_the_big_fat_bastard/deuce.mp3', 
							duration: '2:44',
							chords: 'Verse: H | G | E (F#) :: D | A\n'+
												'Ref: H | G | D | A\n'+
												'Bridge: G | A | H | :: F#',
							lyrics: 'Liquid poison, fake id - thank god for talking care of me. '+
											'Honestly, I lost track just recently. '+
											'Now I want my money back for all the braincells that I lack. '+
											'You\'ll see, its me, no guilt no integrity.\n\n'+
											'I believe theres time to kill, so bring me the kegg before i get ill (refill). '+
											'Lets not waste anymore time. '+
											'Lets finish this kegg while we chill, can\'t afford one single drop spilled (refill). '+
											'What about that twist of lime?\n\n'+
											'Bottoms up for you my friend, this time we\'ll stay until the end. '+
											'I don\'t care, I drink my poison anywhere. '+
											'Some people say don\'t drink and drive, they won\'t be here for quite a while. '+
											'More for us, sorry man but life is tough.\n\n'+
											'I believe theres time to kill, so bring me the kegg before i get ill (refill). '+
											'Lets not waste anymore time. '+
											'Lets finish this kegg while we chill, can\'t afford one single drop spilled (refill). '+
											'What about that twist of lime?\n\n'+
											'I belive i could drink more, but I\'m sorry for my aim. '+
											'Somehow it ends up at the floor, am I the only one to blame?\n\n'+
											'I believe theres time to kill, so bring me the kegg before i get ill (refill). '+
											'Lets not waste anymore time. '+
											'Lets finish this kegg while we chill, cant afford one single drop spilled (refill). '+
											'What about that twist of lime?'

						},
						{	
							title: 'Going to mars', 
							url: 'The_rise_of_the_big_fat_bastard/going_to_mars.mp3', 
							duration: '2:12',
							chords: 'Verse: E | H | E | H | D | A | H\n'+
											'Ref: E | H | D | D A | H/A G F#',
							lyrics: 'Time to go I think I\'ll stay forever, and you know what. '+
											'I\'m not the person I attempt to be, this journey is for free. '+
											'Be no add-ons are required, instantly.\n\n'+
											'Please don\'t remove my compressions, my sores still hurts. '+
											'The gyro lockdown is complete, feel free to take your seat. '+
											'Onboard, get bored this flying saucer\'s obsolete.\n\n'+
											'I won\'t be the one left behind. '+
											'Self abduction is a find.\n\n'+
											'Choking on ads slight depression, sub-human mind. '+
											'Drowning in air that I can not find, do you know why. '+
											'I want to leave this place to free me, from myself.\n\n'+
											'I won\'t recover so please don\'t fake it, but I\'m still here. '+
											'I\'ve been in all kinds of white, do you know what it\'s like. '+
											'To be the only one breathing, living Indoors.\n\n'+
											'I won\'t be the one left behind. '+
											'Self abduction is a find.'

						},
						{	
							title: 'Shut eyes', 
							url: 'The_rise_of_the_big_fat_bastard/shut_eyes.mp3', 
							duration: '2.55',
							chords: 'Verse: G# | E | C# | F# | :: D# | C#\n'+
											 'Ref (G# A#) H | F# | C# | G# | :: H | A# | H A# | G#',
							lyrics: 'Stand aside while I preach my lines, this might be the end of your so called life. '+
											'There\'s no justice inside these walls, its survival of the fittest and minority will fall. '+
											'Cause I know you took it all for granted, it wasn\'t me it was you who tainted it all. '+
											'Lost inside you deny your lies, I\'m the one standing waving in front of shut eyes.\n\n'+
											'Cause no one seems to care these days, we vanish in our own lies. '+
											'Prime-time TV before shut eyes. '+
											'No one seems to understand the reason why we\'re here. '+
											'Neither do I, just like you I live to die.\n\n'+
											'I kill my pain while you kill me, easy way out lets blame society. '+
											'The guilt lays heavy on my shoulders, as I as well as you trying so hard to be. '+
											'Something that im not a puppet on a string, I follow your advice wait and see what it will bring. '+
											'Lost inside you deny their lies, Im the one standing waving in front of shut eyes.\n\n'+
											'Cause no one seems to care these days, we vanish in our own lies. '+
											'Prime-time TV before shut eyes. '+
											'No one seems to understand the reason why we\'re here. '+
											'Neither do i, just like you I live to die.\n\n'+
											'Just like you I live to die. '+
											'Just like you I was born to die.'

						},
						{	
							title: 'Happy meal', 
							url: 'The_rise_of_the_big_fat_bastard/happy_meal.mp3', 
							duration: '2:49',
							chords: 'Verse: A | E | F# | D\n'+
											 'Ref: A | E | F# | D',
							lyrics: 'I\'m a walking happy meal and it makes me feel allright. '+
											'Come undone as package deal fall a sleep at night. '+
											'Dream about tomorrows dinner burger king or mickey d\'s. '+
											'I know i won\'t get thinner extra cheese and bacon greese.\n\n'+
											'All the things that makes me happy is unhealthy. '+
											'Beer burgers drugs thats what I need. '+
											'Some even might say that i am gready. '+
											'When all I ever do is feed.\n\n'+
											'Im a walking liqourstore and it makes me feel allright. '+
											'Come undone as package deal and pass out at night. '+
											'Dream about tomorrows dinner malt whiskey will do the trick. '+
											'I know I wont get thinner, extra vodka and tequila shots.\n\n'+
											'All the things that makes me happy is unhealthy. '+
											'Beer burgers drugs thats what i need. '+
											'Some even might say that i am gready. '+
											'When all i ever do is feed.\n\n'+
											'I am a walking drugstore and it makes me feel allright. '+
											'Come undone as package deal and fade away tonight. '+
											'Dream about tomorrow\'s stow, smoking all to death comes close. '+
											'I know i won\'t get thinner ... cocain.\n\n'+
											'All the things that makes me happy is unhealthy. '+
											'Beer burgers drugs thats what I need. '+
											'Some even might say that i am gready. '+
											'When all I ever do is feed.\n\n'+
											'I cant help it but im hungry, giving me something to eat. '+
											'Beware cause im not a fucking veggy. I need something dead on a plate. '+
											'Dead on a plate. '+
											'That\'s what a need.'

						},
						{	
							title: 'Punks', 
							url: 'The_rise_of_the_big_fat_bastard/punks.mp3', 
							duration: '3:22',
							chords: 'Intro: H | G | A | F#\n'+
											'Verse: H | D | A | F# | A | F# | D C#\n'+
											'Ref: H | G | D | A | F#\n'+
											'Part: H | A | G | E', 

							lyrics: 'Went to a party at the upper west side, cause i met a girl who couldn\'t be denied. '+
											'Bitch were up to no good, dragged me into her neighbourhood. '+
											'I brought my beers but they were drinking Chardonnay. '+
											'I thought of something that would save my day. '+
											'Picked up my phone and called my friends. This mixed party doesn\'t make sense.\n\n'+
											'Those punks ain\'t good enough for us. They drink, do drugs and laugh at us. '+
											'Those punks aint good enough for us. '+
											'Those punks ain\'t good enough for us. They drink, do drugs and laugh at us. '+
											'Those punks aint good enough for us\n\n'+
											'Went to a disco don\'t ask me why. We knew it would suck, but we gave it a try. '+
											'Went to buy a beer, all they had was Crystal Champagne. '+
											'One of the slick-ricks looked kinda mad, cause i scored with a girl he never had. '+
											'Then I heard them say, those bastards gonna pay.\n\n'+
											'Those punks ain\'t good enough for us. They drink, do drugs and laugh at us. '+
											'Those punks aint good enough for us. '+
											'Those punks ain\'t good enough for us. They drink, do drugs and laugh at us. '+
											'Those punks aint good enough for us.\n\n'+
											'Bouncer threw us out cause we didn\'t fit in. Pricks followed along to a battle they couln\'t win. '+
											'A fist and a foot in the face, the faggot put up his mace. '+
											'We left them bleeding in the street, they said can this be our first defeat. '+
											'As we walked away, we heard them say.\n\n'+
											'Those punks aint good enough for us. They drink, do drugs and laugh at us. '+
											'Those punks aint good enough for us. '+
											'Those punks aint good enough for us. They drink, do drugs and laugh at us. '+
											'Those punks aint good enough for us.\n\n'+
											'Those punks\n\n'+
											'We, punks, are far to good for you. We drink, do drugs, and laugh at you. '+
											'We, punks, are far to good for you. '+
											'We, punks, are far to good for you. We drink, do drugs, and laugh at you. '+
											'We, punks, are far to good for you.'
						},			
						{	
							title: 'Twist of lime', 
							url: 'The_rise_of_the_big_fat_bastard/twist_of_lime.mp3', 
							duration: '3:31',
							chords: 'Intro: Hb | Hb/A | G | F\n'+
											'Verse: Hb | Hb/A | G | F :: D# | A\n'+
											'Ref: A# | F | G | D#\n'+
											'Outro: G | A# | D | C',
							lyrics: 'I turn my head and close my eyes, i\'ve been waiting for this day all my life. '+
											'Now it\'s finally here and i can\'t wait for it to end. '+
											'Long lost thoughts of dreams comes true, I\'ve been longing for an answer just like you. '+
											'Obviously good intentions doesn\'t allways make it right.\n\n'+
											'Breathe, all I do is breathe, '+
											'what the hell am i doing here? '+
											'Consequence is blury, consequence unclear. '+
											'Am I just wasting my time?, still waiting for my prime. '+
											'All fucked up, with a little twist of lime\n\n'+
											'I turn my head towards the raising sun, '+
											'whats done is done and what is not done remains undone. '+
											'I have wasted all my time but I don\'t really care.\n\n'+
											'Disfigured figures so called art, '+
											'no fucking logic wanna tear it all apart. '+
											'Am i not just, am i not fair.\n\n'+
											'Beathe, all I do is breathe '+
											'what the hell am i doing here? '+
											'Consequence is blury, consequence unclear. '+
											'Am I just wasting my time?, still waiting for my prime. '+
											'All fucked up, with a little twist of lime.\n\n'+
											'All I do is breathe, '+
											'what the hell am i doing here?'+
											'Consequence is blury, consequence unclear. '+
											'Am I just wasting my time?, still waiting for my prime. '+
											'All fucked up, with a little twist of lime.\n\n'+
											'All the stories sounds the same to me.'
						},		
						{	
							title: 'Retards', 
							url: 'The_rise_of_the_big_fat_bastard/retards.mp3', 
							duration: '3:07',
							chords: 'Verse: E | D | G | D :: G | h\n'+
											'Bridge: E\n'+
											'Ref: A | A/C# | F# | H | H/A | G# | C# | F# | H\n'+
											'Outro: E | E/C | A | H',
							lyrics: 'What\'s your excuse for this abuse? '+
											'Trying to look like rock \'n roll looney tunes. '+
											'Now we know why you (guys) dress up. '+
											'Thats because you guys really suck\n\n'+
											'Hiding your agony by wearing makeup. '+
											'Wouldn\'t wanna see your faces when you wake up. '+
											'I can see why you wanna trade up\n\n'+
											'What the hell is wrong with being yourself? '+
											'(shut up and) Just leave punkrock to someone else. '+
											'The girls will always love you, even though your act is untrue. '+
											'Just leave punkrock to someone else\n\n'+
											'OLP maybe sponsoring your guitars. '+
											'But there\'s no such thing as a punkrock star. '+
											'So glad i don\'t watch MTV. I don\'t want your shit to effect me\n\n'+
											'You retards really make me sick. '+
											'If I asked i\'m sure you\'ll suck my dick. '+
											'A carrot wouldn\'t hurt if you make it stick\n\n'+
											'What the hell is wrong with being yourself? '+
											'(shut up and) Just leave punkrock to someone else. '+
											'The girls will always love you, even though your act is untrue. '+
											'Just leave punkrock to someone else\n\n'+
											'I\'m so tired of your shit, please kill me.'

						},
						{	
							title: 'Mathilda', 
							url: 'The_rise_of_the_big_fat_bastard/mathilda.mp3', 
							duration: '2:17',
							chords: 'Intro: A | F#m | D | E :: A | F#m | E | D C# H\n'+
											 'Verse: F#m | E | D | C#\n'+
											 'Ref: A | F#m | D | E',
							lyrics: 'Dear Mathilda you should have known, I wrote you this letter long time ago. '+
											'Now it\'s tearing you up inside, you are in too deep this you can not deny. '+
											'Reasons for silent treatment is gone, I know its hard but you have to carry on. '+
											'You have taken your time destroying yourself, never needed anybodys help.\n\n'+
											'Dear Mathilda looking good, down in the mud, missunderstood. '+
											'Dear Mathilda all fucked up, it was all so fun but never enough.\n\n'+
											'Dear Mathilda it might not be too late, even dough life dont seem too great. '+
											'Listening to me might bring a little hope, pull your head away from the rope. '+
											'Your addiction much like the tide, when all tied up useless to hide. '+
											'Give me some I will give you all, save you from the unavoidable fall.\n\n'+
											'Dear Mathilda cares a lot, but too much cocain, too much pot. '+
											'Dear Mathilda all fucked up, a little reefers allright but then you should stop.\n\n'+
											'Dear Mathilda looking good, down in the mud, missunderstood. '+
											'Dear Mathilda all fucked up, it was all so fun but never enough.\n\n'+
											'Dear Mathilda cares a lot, but too much cocain, too much pot. '+
											'Dear Mathilda all fucked up, a little reefers allright but then you should stop.'

						},
						{	
							title: 'Inject the resurrection', 
							url: 'The_rise_of_the_big_fat_bastard/inject.mp3',
							duration: '2:14',
							chords: 'Intro: E | H | D | A | G | A | F | G\n'+
											 'Verse: E | H | D | A | G | A | F | G :: A\n'+
											 'Ref: F | G | D',
							lyrics: 'Why can\'t you see, you\'ll never be me, '+
											'no matter how much you work out, you will always be in doubt. '+
											'You\'re body is a ageing wreck, even worse it\'s gonna get, '+
											'but by then it\'s too late, to regret you\'re a mess\n\n'+
											'Put it in, right through your skin, '+
											'you are growing bigger, now am I supposed to bow? '+
											'Much to loose for short time gain, you are all completely insane, '+
											'one thing is getting smaller, it\'s your brain\n\n'+
											'I used to feel so small, all my friends on steroids, '+
											'now I don\'t care at all, they\'re walking just like androids. '+
											'I will rise and they will fall, all my friends on steroids, '+
											'They are all out of control.\n\n'+
											'You think that you\'re a perfect fit, your dick is sized like an average clit, '+
											'are you supposed to see me here?, it sure as hell isn\'t you I fear. '+
											'I\'ll break you down by remaining you, how it used to be.\n\n'+
											'Hear me out, later you can scream and shout, '+
											'I\'m going to tell you what\'s it all about. '+
											'Your lack of self-esteem almost broke all your dreams, '+
											'at least you\'re feeling better now, or so it seems\n\n'+
											'I used to feel so small, all my friends on steroids, '+
											'now I don\'t care at all, they\'re walking just like androids. '+
											'I will rise and they will fall, all my friends on steroids, '+
											'They are all out of control.\n\n'+
											'I used to feel so small, all my friends on steroids, '+
											'now I don\'t care at all, they\'re walking just like androids. '+
											'I will rise and they will fall, all my friends on steroids, '+
											'They are all out of control.\n\n'+
											'I used to feel so small, all my friends on steroids, '+
											'now I don\'t care at all, they\'re walking just like androids. '+
											'I will rise and they will fall, all my friends on steroids, '+
											'They are all out of control.'
						},				
 					]
 				}
 			];

			obj.query = function() {
				return obj.albums;
			}

			obj.get = function(id) {
				var album;
				
				obj.albums.forEach(function(item) {
					if(+item.id === +id) {
						album = item;
					}
				})
				return album;
			};

			return obj;
		})

		.factory('Mediaplayer', function($ionicLoading) {
			var obj = {}, m = null, self = obj;
			
			obj.get = function(url, callback) {
				m = new Media(url, null, null, function(status) {
					return callback(status);
				});
				return m;
			};

			obj.stop = function() {
				if(m) m.stop();
			}

			return obj;
			
		})

})();