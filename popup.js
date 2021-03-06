



var randomStats = [
    "Social media is something of a double-edged sword. At its best, social media offers unprecedented opportunities for marginalized people to speak and bring much needed attention to the issues they face. At its worst, social media also offers 'everyone' an unprecedented opportunity to share in collective outrage without reflection. - Roxane Gay",
    
   " We live in a culture where everyone's opinion, view, and assessment of situations and people spill across social media, a lot of it anonymously, much of it shaped by mindless meanness and ignorance. - Mike Barnicle",
    
    "The dark side of social media is that, within seconds, anything can be blown out of proportion and taken out of context. And it's very difficult not to get swept up in it all. - Nicola Formichetti",
    
   " When it comes to social media, there are just times I turn off the world, you know. There are just some times you have to give yourself space to be quiet, which means you've got to set those phones down. - Michelle Obama",
    
    "I think social media has taken over for our generation. It's a big part of our lives, and it's kind of sad. - Kendall Jenner",
    
    "There are a lot of pros and cons about social media; it's just how you choose to handle it and how you have to be prepared for the negatives as well. - Aubrey Peeples",
    
    "It's so funny how social media was just this fun thing, and now it's this monster that consumes so many millennial lives. - Cazzie David",
    
   " We all have personal brands and most of us have already left a digital footprint, whether we like it or not. Proper social media use highlights your strengths that may not shine through in an interview or application and gives the world a broader view of who you are. Use it wisely. - Amy Jo Martin",
    
   " What is interesting is the power and the impact of social media... So we must try to use social media in a good way. - Malala Yousafzai",
    
    "There's a danger in the internet and social media. The notion that information is enough, that more and more information is enough, that you don't have to think, you just have to get more information - gets very dangerous. - Edward de Bono",
    
    "The Office for National Satistics found that while 12% of children in the nation have symptoms of mental ill-health and don't use social media, 27% of kids also have symptoms who use the internet for 3 hours or more a day.",
    
    "One in ten girls were found to be in the top category for time spent on the internet while for boys it shrinks to one in twenty.",
    
    "Between 2012 and 2013, the number of children spending no time on social networking sites increased from 32% to 37%.",
    
    "For both 10 to 15-year-olds and 16 to 24-year-olds, 80 percent of those asked rated their life satisfaction as high or very high in 2014.",
    
    "Young people are now going online at a younger age and that this trend is happening earlier in the UK than in comparable countries.",  

];

var randomNumber = Math.floor(Math.random()*randomStats.length) ;

var randStat = randomStats[randomNumber];
document.getElementById("statistic").innerHTML = randStat;
