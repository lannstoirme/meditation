import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {StyleSheet, Text, View, SafeAreaView } from 'react-native'; 

import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

import SwipeCards from 'react-native-swipe-cards';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.card}>
        <Image style={styles.thumbnail} source={{uri: this.props.image}} />
        <Text style={styles.text}>This is card {this.props.name}</Text>
      </View>
    )
  }
}

class NoMoreCards extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.noMoreCards}>
        <Text>No more cards</Text>
      </View>
    )
  }
} 
 
const cards = [
    {
      "name": "Going to a quiz or trivia night",
      "image": "https://i.ibb.co/ZcjL48y/gamenight.jpg"
    },
    {
        "name": "Plant a windowsill garden",
        "image": "https://i.ibb.co/ZHK76dd/Screen-Shot-2020-08-13-at-8-35-50-am.png",
    },
    {
        "name": "Take a long luxury bath at home",
        "image": "https://i.ibb.co/7YY1ZZ9/Screen-Shot-2020-08-13-at-8-38-11-am.png",
    },
    {   
        "name": "Learn to draw",
        "image": "https://i.ibb.co/N6pH04k/drawing.jpg"
    },
    {
        "name": "Do a home workout",
        "image": "https://i.ibb.co/vD4NRWW/stay-home-workout.jpg",
    },
    {
        "name": "Do craft",
        "image": "https://i.ibb.co/rFZf8vh/craft.jpg"
    },
    {
        "name": "Play with puzzles",
        "image": "https://i.ibb.co/xq2z6jt/puzzle.jpg",
    },
    {
        "name": "Tie dye fabric at home",
        "image": "https://i.ibb.co/6wmSg40/Screen-Shot-2020-08-13-at-8-50-16-am.png",
    },
    {
        "name": "Make your own home made pizza",
        "image": "https://i.ibb.co/D1NbtQR/pizza.jpg",
    },
    {
        "name": "Learn a foreign language",
        "name": "https://i.ibb.co/hgjjXFg/Reason-to-Learn-a-Foreign-Language.jpg",
    },
    {
        "name": "Do an online course",
        "image": "https://i.ibb.co/r3fcN9F/onlinecourse.jpg",     
    },
    {
      "name": "Spending time in nature",
      "image": "https://i.ibb.co/N2kqg3b/naturewalk.png"
    },
    {
      "name": "Debating",
      "image": "https://i.ibb.co/mN86vg5/debating.png"
    },
    {
      "name": "Painting my nails",
      "image": "https://i.ibb.co/610d00g/neutral-nail-polish.jpg"
    },
    {
      "name": "Going Ice Skating",
      "image": "https://i.ibb.co/mXgCKPs/iceskating.png"
     },
    {
      "name": "Roller Blading",
      "image": "https://i.ibb.co/dmB1GcB/rollerblading.png"
     },
    {
      "name": "Scheduling a day with nothing to do",
      "image": "https://i.ibb.co/ZzYctS5/relaxing.jpg"
     },
    {
      "name": "Giving positive feedback about something",
      "image": "https://i.ibb.co/4KRX1nw/feedback.png"
     },
    {
      "name": "Feeding the birds",
      "image": "https://i.ibb.co/92xjyZz/feedingbirds.png"
    },
    {
      "name": "Spending an evening with good friends",
      "image": "https://i.ibb.co/PFLRWBh/party.jpg"
     },
    {
      "name": "Making jam or preserves",
      "image": "https://i.ibb.co/dDb5S78/preserves.jpg"
     },
    {
      "name": "Going out to dinner",
      "image": "https://i.ibb.co/K9FSLRs/Dinner-Restaurants.jpg"
     },
    {
      "name": "Buying gifts",
      "image": "https://i.ibb.co/YjM5CT0/giftgiving.jpg"
    },
    {
      "name": "Having a political discussion",
      "image": "https://i.ibb.co/xjgySF4/political.jpg"
     },
    {
      "name": "Repairing things around the house",
      "image": "https://i.ibb.co/Bwc0jsz/houserepairs.jpg"
    },
    {
      "name": "Washing my car",
      "image": "https://i.ibb.co/GcV9TSt/washcar.jpg"
     },
    {
      "name": "Watching TV, videos",
      "image": "https://i.ibb.co/kSxSsxL/watchtv.jpg"
    },
    {
      "name": "Sending a loved one a card in the mail",
      "image": "https://i.ibb.co/3mBgPbX/cardinmail.jpg"
    },
    {
      "name": "Baking something to share with others",
      "image": "https://i.ibb.co/ZGx1vGj/baking.jpg"
      },
    {
      "name": "Hosting a potluck",
      "image": "https://i.ibb.co/vB22H8h/potluck.jpg"
    },
    {
      "name": "Having a barbecue",
      "image": "https://i.ibb.co/P4d9hbS/barbecue.jpg"
    },
    {
      "name": "Having a games and cards night",
      "image": "https://i.ibb.co/ZcjL48y/gamenight.jpg"
    },
    {
      "name": "Taking a sauna or steam bath",
      "image": "https://i.ibb.co/1Z3tCcx/spa.jpg"
     },
    {
      "name": "Having a video call",
      "image": "https://i.ibb.co/vqY55jk/whatsapp-video-calling1.png"
    },
    {
      "name": "Organising my wardrobe",
      "image": "https://i.ibb.co/8NSWNMS/wardrobe.jpg"
     },
    {
      "name": "Playing musical instruments",
      "image": "https://i.ibb.co/18RMhcJ/playinstruments.jpg"
    },
    {
      "name": "Going to the ballet or opera",
      "image": "https://i.ibb.co/TB24Kgg/ballet.jpg"
    },
    {
      "name": "Lighting scented candles, oil or incense",
      "image": "https://i.ibb.co/xJsGmHb/candles.jpg"
     },
    {
      "name": "Spending time alone",
      "image": "https://i.ibb.co/7Vs5yqZ/boy-1822614-960-720.jpg"
    },
    {
      "name": "Exercising",
      "image": "https://i.ibb.co/xLB24Gf/Happy-female-fitness-class-doing-aerobics-exercise-in-health-club-Horizontal-shot.jpg"
     },
    {
      "name": "Putting up a framed picture or artwork",
      "image": "https://i.ibb.co/cQXmN6R/pictureframing.jpg"
     },
    {
      "name": "Flirting",
      "image": "https://i.ibb.co/2t5rzMb/flirting.jpg"
     },
    {
      "name": "Riding a motorbike",
      "image": "https://i.ibb.co/nkw2DhD/motorcycling.jpg"
    },
    {
      "name": "Cycling",
      "image": "https://i.ibb.co/X3k4MR2/cycling.jpg"
    },
    {
      "name": "Wine tasting",
      "image": "https://i.ibb.co/h7XpKLt/winetasting.jpg"
    },
    {
      "name": "Going to a planetarium or observatory",
      "image": "https://i.ibb.co/gWYqGr3/planetarium.jpg"
     },
    {
      "name": "Birdwatching",
      "image": "https://i.ibb.co/VCpgQct/birdwatching.jpg"
    },
    {
      "name": "Doing something spontaneously",
      "image": "https://i.ibb.co/F8cKKBv/ballpit.jpg"
    },
    {
      "name": "Massaging hand cream into my hands",
      "image": "https://i.ibb.co/PWxLTVY/woman-applying-hand-cream.jpg"
    },
    {
      "name": "Fantasising about the future",
      "image": "https://i.ibb.co/pfyj4vd/dreaming.jpg"
     },
    {
      "name": "Laughing",
      "image": "https://i.ibb.co/WxBJ5xx/laughing.jpg"
     },
    {
      "name": "Fly a plane simulator or other simulation game",
      "image": "https://i.ibb.co/JqXNjD9/simgame.jpg"
      },
    {
      "name": "Playing tennis or badminton",
      "image": "https://i.ibb.co/ZWvtxp3/Dominic-Thiem-AUT-rallies-with-Rafael-Nadal-ESP-on-the-Competitors-Practice-Courts-The-Championships.jpg"
    },
    {
      "name": "Making origami",
      "image": "https://i.ibb.co/rk4X52v/origami.jpg"
      },
    {
      "name": "Playing lawn games (bocce or bowls)",
      "image": "https://i.ibb.co/HdK6Lr1/bocce.jpg"
     },
    {
      "name": "Going to a party",
      "image": "https://i.ibb.co/wKj1Tbw/party.jpg"
      },
    {
      "name": "Seeing or showing photos",
      "image": "https://i.ibb.co/NV625RY/slideshow.jpg"
      },
    {
      "name": "Going on a city tour",
      "image": "https://i.ibb.co/4TV5Qfg/tour.jpg"
    },
    {
      "name": "Going to an agricultural show",
      "image": "https://i.ibb.co/vzs5Fbs/show.jpg"
     },
    {
      "name": "Jogging, walking",
      "image": "https://i.ibb.co/h8q9NQs/jogging.jpg"
      },
    {
      "name": "Going to open homes",
      "image": "https://i.ibb.co/MVrTg33/openhomes.jpg"
      },
    {
      "name": "Researching a topic of interest",
      "image": "https://i.ibb.co/ydQJGrr/researchingtopic.jpg"
    },
    {
      "name": "Fishing",
      "image": "https://i.ibb.co/s6Szk4p/fishing.jpg"
     },
    {
      "name": "Going to the beach",
      "image": "https://i.ibb.co/2dhMXh1/beach.jpg"
     },
    {
      "name": "Redecorating",
      "image": "https://i.ibb.co/xD13m0w/Screen-Shot-2020-07-30-at-6-34-29-pm.png"  
    },
    {
      "name": "Volunteering for a cause I support",
      "image": "https://i.ibb.co/jhD4j6c/volunteer.jpg"
     },
    {
      "name": "Smelling a flower",
      "image": "https://i.ibb.co/svHsmyC/a-man-smelling-a-flower.jpg"
    },
    {
      "name": "Hiking",
      "image": "https://i.ibb.co/XFxn0kW/hiking.jpg"
    },
    {
      "name": "Opening the curtains to let the sunlight in",
      "image": "https://i.ibb.co/XXqfTN2/opencurtains.jpg"
    },
    {
      "name": "Going to the zoo",
      "image": "https://i.ibb.co/Z6jn7bt/zoo.jpg"
     },
    {
      "name": "Going to the aquarium",
      "image": "https://i.ibb.co/RNLLt0P/aquarium.jpg"
     },
    {
      "name": "Doing jigsaw puzzles",
      "image": "https://i.ibb.co/BBk0JKN/puzzle.jpg"
      },
    {
      "name": "Playing video games",
      "image": "https://i.ibb.co/VQwWpmS/videogames.jpg"
       },
    {
      "name": "Donating old clothes to charity",
      "image": "https://i.ibb.co/FgcyDb0/donation.jpg"
     },
    {
      "name": "Learning a magic trick",
      "image": "https://i.ibb.co/tbf000Q/magictricks.jpg"
    },
    {
      "name": "Lying in the sun briefly",
      "image": "https://i.ibb.co/Rv1ZTJ3/poollying.jpg" 
    },
    {
      "name": "Talking on the phone",
      "image": "https://i.ibb.co/MGF61Qd/talkingonphone.jpg"
     },
    {
      "name": "Listening to a podcast or radio show",
      "image": "https://i.ibb.co/nMgbB9W/podcast.jpg"
    },
    {
      "name": "Watching YouTube",
      "image": "https://i.ibb.co/kG09X9v/watchingyoutube.jpg"
      },
    {
      "name": "Walking around my city",
      "image": "https://i.ibb.co/R4P1pw3/walkingincity.jpg"
      },
    {
      "name": "Looking at architecture",
      "image": "https://i.ibb.co/4TV5Qfg/tour.jpg"
      },
    {
      "name": "Doing arts and crafts",
      "image": "https://i.ibb.co/ZzwnpQ2/artcraft.jpg"
      },
    {
      "name": "Sewing",
      "image": "https://i.ibb.co/59ZvLH5/sewing.jpg"
     },
    {
      "name": "Mowing the lawn",
      "image": "https://i.ibb.co/dQNbPN8/lawnmowing.jpg"
     },
    {
      "name": "Restoring furniture",
      "image": "https://i.ibb.co/F05kvpQ/furniturerestoration.jpg"
    },
    {
      "name": "Doing horseback riding",
      "image": "https://i.ibb.co/dBY6tC4/horseriding.jpg"
     },
    {
      "name": "Mountain bike riding",
      "image": "https://i.ibb.co/C95sXhQ/mountainbikeriding.jpg"
    },
    {
      "name": "Going kayaking",
      "image": "https://i.ibb.co/Kmn4Lcr/kayaking.jpg"
     },
    {
      "name": "Do some dishes or other cleaning",
      "image": "https://i.ibb.co/YTSDXtn/cleaning.jpg" 
    },
    {
      "name": "Sitting outside and listening to the birds",
      "image": "https://i.ibb.co/xzTxzFW/singingbird.jpg"
      },
    {
      "name": "Sitting around a campfire",
      "image": "https://i.ibb.co/y8ys3P1/campfire.jpg"
     },
    {
      "name": "Travelling to national parks",
      "image": "https://i.ibb.co/231KzRd/nationalpark.jpg"
    },
    {
      "name": "Going to a fair",
      "image": "https://i.ibb.co/J3ktXqB/fair.jpg"
    },
    {
      "name": "Playing cards",
      "image": "https://i.ibb.co/hZz9Kyq/cards.jpg"
      },
    {
      "name": "Putting moisturising cream on my face",
      "image": "https://i.ibb.co/YBVM9BC/elixir.jpg"
     },
    {
      "name": "Volunteering at an animal shelter",
      "image": "https://i.ibb.co/w6YxTP6/animalshelter.jpg"
      },
    {
      "name": "Riding a scooter",
      "image": "https://i.ibb.co/V3WC8Yw/scooter.jpg"
    },
    {
      "name": "Going for drinks with friends",
      "image": "https://i.ibb.co/hRXy10S/drinks.jpg"
      },
    {
      "name": "Going to a meetup",
      "image": "https://i.ibb.co/NV08yXb/meetup.jpg"
     },
    {
      "name": "Gardening",
      "image": "https://i.ibb.co/VJc4s4R/gardening.jpg"
      },
    {
      "name": "Growing vegetables",
      "image": "https://i.ibb.co/vdsgQdM/growvegetables.jpg"
    },
    {
      "name": "Entering a competition",
      "image": "https://i.ibb.co/YR5WSYt/winning.jpg"
    },
    {
      "name": "Doing crossword puzzles",
      "image": "https://i.ibb.co/YytJTQZ/crossword.jpg"
      },
    {
      "name": "Playing with my pet",
      "image": "https://i.ibb.co/y86BLXg/petcat.jpg"
     },
    {
      "name": "Soaking in the bath",
      "image": "https://i.ibb.co/zJmHDq2/havebath.jpg"
    },
    {
      "name": "Cooking a special meal",
      "image": "https://i.ibb.co/SJRQJPV/cooking.jpg"
     },
    {
      "name": "Having a dayspa treatment",
      "image": "https://i.ibb.co/L65NDCy/dayspa.jpg"
      },
    {
      "name": "Putting extra effort into my appearance",
      "image": "https://i.ibb.co/2swbc77/hipster.jpg"
     },
    {
      "name": "Getting a makeover",
      "image": "https://i.ibb.co/2cpqm7m/makeover.jpg"
     },
    {
      "name": "Playing golf",
      "image": "https://i.ibb.co/b74V3mY/golf.jpg"
     },
    {
      "name": "Doing a random act of kindness",
      "image": "https://i.ibb.co/xXWFhZ7/kindness.jpg"
    },
    {
      "name": "Build a bird house",
      "image": "https://i.ibb.co/N6xYrXw/birdhouse.jpg"
      },
    {
      "name": "Have a family get-together",
      "image": "https://i.ibb.co/SKwcRDZ/young-happy-family-talking-while-having-lunch-Getty-Images-1132278686.jpg"
     },
    {
      "name": "Listening to music",
      "image": "https://i.ibb.co/vhQV9nb/listentomusic.jpg"
    },
    {
      "name": "Learning a new language",
      "image": "https://i.ibb.co/dWtsM5W/language.png"
     },
    {
      "name": "Taking a free online class",
      "image": "https://i.ibb.co/mBHp3qM/onlineclasses.jpg"
      },
    {
      "name": "Working",
      "image": "https://i.ibb.co/CmcSCPx/working.jpg"
     },
    {
      "name": "Washing my hair",
      "image": "https://i.ibb.co/tbN9DdF/shampoo.jpg"
     },
    {
      "name": "Do the Dishes",
      "image": "https://i.ibb.co/znM3mnM/dishes.jpg"
    },
    {
      "name": "Meditate, Pray or Practise Spirituality",
      "image": "https://i.ibb.co/z6Jdh4L/Meditate6.jpg"
       },
    {
      "name": "Singing",
      "image": "https://i.ibb.co/WBrDDF0/singing.jpg"
     },
    {
      "name": "Going to a standup comedy night",
      "image": "https://i.ibb.co/fYPJQhd/standup.jpg"
     }
]

const cards2 = [

    {
        "name": "Going to a quiz or trivia night",
        "image": "https://i.ibb.co/ZcjL48y/gamenight.jpg"
      },
      {
          "name": "Plant a windowsill garden",
          "image": "https://i.ibb.co/ZHK76dd/Screen-Shot-2020-08-13-at-8-35-50-am.png",
      },
      {
          "name": "Take a long luxury bath at home",
          "image": "https://i.ibb.co/7YY1ZZ9/Screen-Shot-2020-08-13-at-8-38-11-am.png",
      },
      {   
          "name": "Learn to draw",
          "image": "https://i.ibb.co/N6pH04k/drawing.jpg"
      },
      {
          "name": "Do a home workout",
          "image": "https://i.ibb.co/vD4NRWW/stay-home-workout.jpg",
      },
      {
          "name": "Do craft",
          "image": "https://i.ibb.co/rFZf8vh/craft.jpg"
      },
      {
          "name": "Play with puzzles",
          "image": "https://i.ibb.co/xq2z6jt/puzzle.jpg",
      },
      {
          "name": "Tie dye fabric at home",
          "image": "https://i.ibb.co/6wmSg40/Screen-Shot-2020-08-13-at-8-50-16-am.png",
      },
      {
          "name": "Make your own home made pizza",
          "image": "https://i.ibb.co/D1NbtQR/pizza.jpg",
      },
      {
          "name": "Learn a foreign language",
          "name": "https://i.ibb.co/hgjjXFg/Reason-to-Learn-a-Foreign-Language.jpg",
      },
      {
          "name": "Do an online course",
          "image": "https://i.ibb.co/r3fcN9F/onlinecourse.jpg",     
      },
      {
        "name": "Spending time in nature",
        "image": "https://i.ibb.co/N2kqg3b/naturewalk.png"
      },
      {
        "name": "Debating",
        "image": "https://i.ibb.co/mN86vg5/debating.png"
      },
      {
        "name": "Painting my nails",
        "image": "https://i.ibb.co/610d00g/neutral-nail-polish.jpg"
      },
      {
        "name": "Going Ice Skating",
        "image": "https://i.ibb.co/mXgCKPs/iceskating.png"
       },
      {
        "name": "Roller Blading",
        "image": "https://i.ibb.co/dmB1GcB/rollerblading.png"
       },
      {
        "name": "Scheduling a day with nothing to do",
        "image": "https://i.ibb.co/ZzYctS5/relaxing.jpg"
       },
      {
        "name": "Giving positive feedback about something",
        "image": "https://i.ibb.co/4KRX1nw/feedback.png"
       },
      {
        "name": "Feeding the birds",
        "image": "https://i.ibb.co/92xjyZz/feedingbirds.png"
      },
      {
        "name": "Spending an evening with good friends",
        "image": "https://i.ibb.co/PFLRWBh/party.jpg"
       },
      {
        "name": "Making jam or preserves",
        "image": "https://i.ibb.co/dDb5S78/preserves.jpg"
       },
      {
        "name": "Going out to dinner",
        "image": "https://i.ibb.co/K9FSLRs/Dinner-Restaurants.jpg"
       },
      {
        "name": "Buying gifts",
        "image": "https://i.ibb.co/YjM5CT0/giftgiving.jpg"
      },
      {
        "name": "Having a political discussion",
        "image": "https://i.ibb.co/xjgySF4/political.jpg"
       },
      {
        "name": "Repairing things around the house",
        "image": "https://i.ibb.co/Bwc0jsz/houserepairs.jpg"
      },
      {
        "name": "Washing my car",
        "image": "https://i.ibb.co/GcV9TSt/washcar.jpg"
       },
      {
        "name": "Watching TV, videos",
        "image": "https://i.ibb.co/kSxSsxL/watchtv.jpg"
      },
      {
        "name": "Sending a loved one a card in the mail",
        "image": "https://i.ibb.co/3mBgPbX/cardinmail.jpg"
      },
      {
        "name": "Baking something to share with others",
        "image": "https://i.ibb.co/ZGx1vGj/baking.jpg"
        },
      {
        "name": "Hosting a potluck",
        "image": "https://i.ibb.co/vB22H8h/potluck.jpg"
      },
      {
        "name": "Having a barbecue",
        "image": "https://i.ibb.co/P4d9hbS/barbecue.jpg"
      },
      {
        "name": "Having a games and cards night",
        "image": "https://i.ibb.co/ZcjL48y/gamenight.jpg"
      },
      {
        "name": "Taking a sauna or steam bath",
        "image": "https://i.ibb.co/1Z3tCcx/spa.jpg"
       },
      {
        "name": "Having a video call",
        "image": "https://i.ibb.co/vqY55jk/whatsapp-video-calling1.png"
      },
      {
        "name": "Organising my wardrobe",
        "image": "https://i.ibb.co/8NSWNMS/wardrobe.jpg"
       },
      {
        "name": "Playing musical instruments",
        "image": "https://i.ibb.co/18RMhcJ/playinstruments.jpg"
      },
      {
        "name": "Going to the ballet or opera",
        "image": "https://i.ibb.co/TB24Kgg/ballet.jpg"
      },
      {
        "name": "Lighting scented candles, oil or incense",
        "image": "https://i.ibb.co/xJsGmHb/candles.jpg"
       },
      {
        "name": "Spending time alone",
        "image": "https://i.ibb.co/7Vs5yqZ/boy-1822614-960-720.jpg"
      },
      {
        "name": "Exercising",
        "image": "https://i.ibb.co/xLB24Gf/Happy-female-fitness-class-doing-aerobics-exercise-in-health-club-Horizontal-shot.jpg"
       },
      {
        "name": "Putting up a framed picture or artwork",
        "image": "https://i.ibb.co/cQXmN6R/pictureframing.jpg"
       },
      {
        "name": "Flirting",
        "image": "https://i.ibb.co/2t5rzMb/flirting.jpg"
       },
      {
        "name": "Riding a motorbike",
        "image": "https://i.ibb.co/nkw2DhD/motorcycling.jpg"
      },
      {
        "name": "Cycling",
        "image": "https://i.ibb.co/X3k4MR2/cycling.jpg"
      },
      {
        "name": "Wine tasting",
        "image": "https://i.ibb.co/h7XpKLt/winetasting.jpg"
      },
      {
        "name": "Going to a planetarium or observatory",
        "image": "https://i.ibb.co/gWYqGr3/planetarium.jpg"
       },
      {
        "name": "Birdwatching",
        "image": "https://i.ibb.co/VCpgQct/birdwatching.jpg"
      },
      {
        "name": "Doing something spontaneously",
        "image": "https://i.ibb.co/F8cKKBv/ballpit.jpg"
      },
      {
        "name": "Massaging hand cream into my hands",
        "image": "https://i.ibb.co/PWxLTVY/woman-applying-hand-cream.jpg"
      },
      {
        "name": "Fantasising about the future",
        "image": "https://i.ibb.co/pfyj4vd/dreaming.jpg"
       },
      {
        "name": "Laughing",
        "image": "https://i.ibb.co/WxBJ5xx/laughing.jpg"
       },
      {
        "name": "Fly a plane simulator or other simulation game",
        "image": "https://i.ibb.co/JqXNjD9/simgame.jpg"
        },
      {
        "name": "Playing tennis or badminton",
        "image": "https://i.ibb.co/ZWvtxp3/Dominic-Thiem-AUT-rallies-with-Rafael-Nadal-ESP-on-the-Competitors-Practice-Courts-The-Championships.jpg"
      },
      {
        "name": "Making origami",
        "image": "https://i.ibb.co/rk4X52v/origami.jpg"
        },
      {
        "name": "Playing lawn games (bocce or bowls)",
        "image": "https://i.ibb.co/HdK6Lr1/bocce.jpg"
       },
      {
        "name": "Going to a party",
        "image": "https://i.ibb.co/wKj1Tbw/party.jpg"
        },
      {
        "name": "Seeing or showing photos",
        "image": "https://i.ibb.co/NV625RY/slideshow.jpg"
        },
      {
        "name": "Going on a city tour",
        "image": "https://i.ibb.co/4TV5Qfg/tour.jpg"
      },
      {
        "name": "Going to an agricultural show",
        "image": "https://i.ibb.co/vzs5Fbs/show.jpg"
       },
      {
        "name": "Jogging, walking",
        "image": "https://i.ibb.co/h8q9NQs/jogging.jpg"
        },
      {
        "name": "Going to open homes",
        "image": "https://i.ibb.co/MVrTg33/openhomes.jpg"
        },
      {
        "name": "Researching a topic of interest",
        "image": "https://i.ibb.co/ydQJGrr/researchingtopic.jpg"
      },
      {
        "name": "Fishing",
        "image": "https://i.ibb.co/s6Szk4p/fishing.jpg"
       },
      {
        "name": "Going to the beach",
        "image": "https://i.ibb.co/2dhMXh1/beach.jpg"
       },
      {
        "name": "Redecorating",
        "image": "https://i.ibb.co/xD13m0w/Screen-Shot-2020-07-30-at-6-34-29-pm.png"  
      },
      {
        "name": "Volunteering for a cause I support",
        "image": "https://i.ibb.co/jhD4j6c/volunteer.jpg"
       },
      {
        "name": "Smelling a flower",
        "image": "https://i.ibb.co/svHsmyC/a-man-smelling-a-flower.jpg"
      },
      {
        "name": "Hiking",
        "image": "https://i.ibb.co/XFxn0kW/hiking.jpg"
      },
      {
        "name": "Opening the curtains to let the sunlight in",
        "image": "https://i.ibb.co/XXqfTN2/opencurtains.jpg"
      },
      {
        "name": "Going to the zoo",
        "image": "https://i.ibb.co/Z6jn7bt/zoo.jpg"
       },
      {
        "name": "Going to the aquarium",
        "image": "https://i.ibb.co/RNLLt0P/aquarium.jpg"
       },
      {
        "name": "Doing jigsaw puzzles",
        "image": "https://i.ibb.co/BBk0JKN/puzzle.jpg"
        },
      {
        "name": "Playing video games",
        "image": "https://i.ibb.co/VQwWpmS/videogames.jpg"
         },
      {
        "name": "Donating old clothes to charity",
        "image": "https://i.ibb.co/FgcyDb0/donation.jpg"
       },
      {
        "name": "Learning a magic trick",
        "image": "https://i.ibb.co/tbf000Q/magictricks.jpg"
      },
      {
        "name": "Lying in the sun briefly",
        "image": "https://i.ibb.co/Rv1ZTJ3/poollying.jpg" 
      },
      {
        "name": "Talking on the phone",
        "image": "https://i.ibb.co/MGF61Qd/talkingonphone.jpg"
       },
      {
        "name": "Listening to a podcast or radio show",
        "image": "https://i.ibb.co/nMgbB9W/podcast.jpg"
      },
      {
        "name": "Watching YouTube",
        "image": "https://i.ibb.co/kG09X9v/watchingyoutube.jpg"
        },
      {
        "name": "Walking around my city",
        "image": "https://i.ibb.co/R4P1pw3/walkingincity.jpg"
        },
      {
        "name": "Looking at architecture",
        "image": "https://i.ibb.co/4TV5Qfg/tour.jpg"
        },
      {
        "name": "Doing arts and crafts",
        "image": "https://i.ibb.co/ZzwnpQ2/artcraft.jpg"
        },
      {
        "name": "Sewing",
        "image": "https://i.ibb.co/59ZvLH5/sewing.jpg"
       },
      {
        "name": "Mowing the lawn",
        "image": "https://i.ibb.co/dQNbPN8/lawnmowing.jpg"
       },
      {
        "name": "Restoring furniture",
        "image": "https://i.ibb.co/F05kvpQ/furniturerestoration.jpg"
      },
      {
        "name": "Doing horseback riding",
        "image": "https://i.ibb.co/dBY6tC4/horseriding.jpg"
       },
      {
        "name": "Mountain bike riding",
        "image": "https://i.ibb.co/C95sXhQ/mountainbikeriding.jpg"
      },
      {
        "name": "Going kayaking",
        "image": "https://i.ibb.co/Kmn4Lcr/kayaking.jpg"
       },
      {
        "name": "Do some dishes or other cleaning",
        "image": "https://i.ibb.co/YTSDXtn/cleaning.jpg" 
      },
      {
        "name": "Sitting outside and listening to the birds",
        "image": "https://i.ibb.co/xzTxzFW/singingbird.jpg"
        },
      {
        "name": "Sitting around a campfire",
        "image": "https://i.ibb.co/y8ys3P1/campfire.jpg"
       },
      {
        "name": "Travelling to national parks",
        "image": "https://i.ibb.co/231KzRd/nationalpark.jpg"
      },
      {
        "name": "Going to a fair",
        "image": "https://i.ibb.co/J3ktXqB/fair.jpg"
      },
      {
        "name": "Playing cards",
        "image": "https://i.ibb.co/hZz9Kyq/cards.jpg"
        },
      {
        "name": "Putting moisturising cream on my face",
        "image": "https://i.ibb.co/YBVM9BC/elixir.jpg"
       },
      {
        "name": "Volunteering at an animal shelter",
        "image": "https://i.ibb.co/w6YxTP6/animalshelter.jpg"
        },
      {
        "name": "Riding a scooter",
        "image": "https://i.ibb.co/V3WC8Yw/scooter.jpg"
      },
      {
        "name": "Going for drinks with friends",
        "image": "https://i.ibb.co/hRXy10S/drinks.jpg"
        },
      {
        "name": "Going to a meetup",
        "image": "https://i.ibb.co/NV08yXb/meetup.jpg"
       },
      {
        "name": "Gardening",
        "image": "https://i.ibb.co/VJc4s4R/gardening.jpg"
        },
      {
        "name": "Growing vegetables",
        "image": "https://i.ibb.co/vdsgQdM/growvegetables.jpg"
      },
      {
        "name": "Entering a competition",
        "image": "https://i.ibb.co/YR5WSYt/winning.jpg"
      },
      {
        "name": "Doing crossword puzzles",
        "image": "https://i.ibb.co/YytJTQZ/crossword.jpg"
        },
      {
        "name": "Playing with my pet",
        "image": "https://i.ibb.co/y86BLXg/petcat.jpg"
       },
      {
        "name": "Soaking in the bath",
        "image": "https://i.ibb.co/zJmHDq2/havebath.jpg"
      },
      {
        "name": "Cooking a special meal",
        "image": "https://i.ibb.co/SJRQJPV/cooking.jpg"
       },
      {
        "name": "Having a dayspa treatment",
        "image": "https://i.ibb.co/L65NDCy/dayspa.jpg"
        },
      {
        "name": "Putting extra effort into my appearance",
        "image": "https://i.ibb.co/2swbc77/hipster.jpg"
       },
      {
        "name": "Getting a makeover",
        "image": "https://i.ibb.co/2cpqm7m/makeover.jpg"
       },
      {
        "name": "Playing golf",
        "image": "https://i.ibb.co/b74V3mY/golf.jpg"
       },
      {
        "name": "Doing a random act of kindness",
        "image": "https://i.ibb.co/xXWFhZ7/kindness.jpg"
      },
      {
        "name": "Build a bird house",
        "image": "https://i.ibb.co/N6xYrXw/birdhouse.jpg"
        },
      {
        "name": "Have a family get-together",
        "image": "https://i.ibb.co/SKwcRDZ/young-happy-family-talking-while-having-lunch-Getty-Images-1132278686.jpg"
       },
      {
        "name": "Listening to music",
        "image": "https://i.ibb.co/vhQV9nb/listentomusic.jpg"
      },
      {
        "name": "Learning a new language",
        "image": "https://i.ibb.co/dWtsM5W/language.png"
       },
      {
        "name": "Taking a free online class",
        "image": "https://i.ibb.co/mBHp3qM/onlineclasses.jpg"
        },
      {
        "name": "Working",
        "image": "https://i.ibb.co/CmcSCPx/working.jpg"
       },
      {
        "name": "Washing my hair",
        "image": "https://i.ibb.co/tbN9DdF/shampoo.jpg"
       },
      {
        "name": "Do the Dishes",
        "image": "https://i.ibb.co/znM3mnM/dishes.jpg"
      },
      {
        "name": "Meditate, Pray or Practise Spirituality",
        "image": "https://i.ibb.co/z6Jdh4L/Meditate6.jpg"
         },
      {
        "name": "Singing",
        "image": "https://i.ibb.co/WBrDDF0/singing.jpg"
       },
      {
        "name": "Going to a standup comedy night",
        "image": "https://i.ibb.co/fYPJQhd/standup.jpg"
       }
]


export default class Swipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: cards,
      outOfCards: false
    }
  }

  handleYup (card) {
    console.log("yup")
  }

  handleNope (card) {
    console.log("nope")
  }

  cardRemoved (index) {
    console.log(`The index is ${index}`);

    let CARD_REFRESH_LIMIT = 3

    if (this.state.cards.length - index <= CARD_REFRESH_LIMIT + 1) {
      console.log(`There are only ${this.state.cards.length - index - 1} cards left.`);

      if (!this.state.outOfCards) {
        console.log(`Adding ${cards2.length} more cards`)

        this.setState({
          cards: this.state.cards.concat(cards2),
          outOfCards: true
        })
      }

    }

  }

  render() {
    return (
      <SwipeCards
        cards={this.state.cards}
        loop={false}

        renderCard={(cardData) => <Card {...cardData} />}
        renderNoMoreCards={() => <NoMoreCards />}
        showYup={true}
        showNope={true}

        handleYup={this.handleYup}
        handleNope={this.handleNope}
        cardRemoved={this.cardRemoved.bind(this)}
      />
    )
  }
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
    borderColor: '#301934',
    backgroundColor: '#c8a2c8',
    borderWidth: 1,
    elevation: 1,
  },
  thumbnail: {
    width: 300,
    height: 300,
  },
  text: {
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10
  },
  noMoreCards: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
