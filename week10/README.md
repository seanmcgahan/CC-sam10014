# week10

## Instrument (Finger Drums)

The instrument I made was a drum kit that is played by pinching different fingers together. I don't play drums but really wanted to when I was like 10 years old. One of the biggest challenges of making this was figuring out how to most effectively map different drum sounds to each finger and keep things easy to understand. 

I first had to distinguish between left and right so I split the screen in half, with pinches played on the right triggering some sounds, and pinches played on the left triggering others. This also gives the user the option to put both hands on one side of the screen to trigger multiple sounds mapped to that side.

The sounds I recorded on a garageband drum kit and then exported as .mp3s. This allowed me to get the specific drum sounds I wanted

I had to play around with some ideas and figure out which fingers + sides should be mapped to each sound. I mapped the pointers on the right and left to the kick and the snare respectfully. I figured these would be the most commonly played. I think it makes it easiest to make a rhythym.

I mapped a crash cymbal to the left middle, hi-hat to the right middle, cowbell to the left ring, and another cymbal (played more towards the bell) to the right ring. I think there could be a more ergonomic way to map these but I found that these worked. Fingers next to eachother can be piched at the same time to trigger 2 sounds at once. I tried to make the further out from my index be less-used sounds. 

Practicing these proved to be pretty hard, but I do think I made progress over the last few days. I have been using a metronome to try to keep tempo. Also coming from a background of not having ever played drums is also making this a lot harder. Keeping time is super essential to drums and is something I find a little difficult with other instruments, so it was a real challenge here. Once I find the groove I can keep up with it for a little while. I have tried different rhythms and have been continually increasing bpm on the metronome.

I lastly added some visuals: a color that appears on each side of the screen for each drum sound that is triggered, and also a fft visualizer that creates a series of circles that scale for different frequency bands. The fft is pretty cool to visualize the way that different drums and cymbals ring out.

### Bonus instrument I made (plus some questions)

I also tried making a step sequencer over the weekend. The goal with this was to have a step sequencer trigger my drum samples so you could play a synthesizer over it. I admittedly had a lot of trouble making this myself. I had an idea in my mind of how I could get it to work but I was having trouble getting the logic to work out. 

I tried looking up some other step sequencers other people have made plus also used to the LLM for this week to work out how to make this work. 

I was ultimately able to get the step sequencer working but it was through a lot of help from this week's LLM and I don't fully understand the logic of it yet. I built some stuff out around it but also ran into some issues there of having two oscilators play at the same time. 

I want to go back at some point soon and try to re-write the sequencer code with more of my own input so I can understand it better. Would really like to fully build out this, it was fun to play from what I made so far.