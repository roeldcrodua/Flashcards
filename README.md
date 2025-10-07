# Web Development Project 2 & 3- FlashCards: World Flags Knowledge Trivia

Submitted by: Roel Crodua

This web app:  In this project, I had created a web app for flashcards! I used pairs of items to store in a flashcard-like format that users can then use to study, learn something new, or play a guessing game. Users will be able to study/play cards in a randomized order.

Time spent: 20 hours spent in total

##
## PART 1
### Required Features
The following **required** functionality is completed:

- [x] **The app displays the title of the card set, a short description, and the total number of cards**
  - [x] Title of card set is displayed 
  - [x] A short description of the card set is displayed 
  - [x] A list of card pairs is created
  - [x] The total number of cards in the set is displayed 
  - [x] Card set is represented as a list of card pairs (an array of dictionaries where each dictionary contains the question and answer is perfectly fine)
- [x] **A single card at a time is displayed**
  - [x] Only one half of the information pair is displayed at a time
- [x] **Clicking on the card flips the card over, showing the corresponding component of the information pair**
  - [x] Clicking on a card flips it over, showing the back with corresponding information 
  - [x] Clicking on a flipped card again flips it back, showing the front
- [x] **Clicking on the next button displays a random new card**

### Optional Features
The following **optional** features are implemented:

- [x] Cards contain images in addition to or in place of text
  - [x] Some or all cards have images in place of or in addition to text
- [x] Cards have different visual styles such as color based on their category
  - Example categories you can use:
    - Difficulty: Easy/medium/hard
    - Subject: Biology/Chemistry/Physics/Earth science

### Additional Features
The following **additional** features are implemented:

* [x] Added shadow on the card container, button, and headers.
* [x] Added guess counter function to count the number of flags being guess.

##
## PART 2
### Required Features
The following **required** functionality is completed:

- [x] **The user can enter their guess into an input box *before* seeing the flipside of the card**
  - Application features a clearly labeled input box with a submit button where users can type in a guess
  - Clicking on the submit button with an **incorrect** answer shows visual feedback that it is wrong 
  -  Clicking on the submit button with a **correct** answer shows visual feedback that it is correct
- [x] **The user can navigate through an ordered list of cardss**
  - A forward/next button displayed on the card navigates to the next card in a set sequence when clicked
  - A previous/back button displayed on the card returns to the previous card in the set sequence when clicked
  - Both the next and back buttons should have some visual indication that the user is at the beginning or end of the list (for example, graying out and no longer being available to click), not allowing for wrap-around navigation

### Optional Features
The following **optional** features are implemented:

- [x] Users can use a shuffle button to randomize the order of the cards
  - Cards should remain in the same sequence (**NOT** randomized) unless the shuffle button is clicked 
  - Cards should change to a random sequence once the shuffle button is clicked
- [x] A user’s answer may be counted as correct even when it is slightly different from the target answer
  - Answers are considered correct even if they only partially match the answer on the card 
  - Examples: ignoring uppercase/lowercase discrepancies, ignoring punctuation discrepancies, matching only for a particular part of the answer rather than the whole answer
- [x] A counter displays the user’s current and longest streak of correct responses
  - The current counter increments when a user guesses an answer correctly
  - The current counter resets to 0 when a user guesses an answer incorrectly
  - A separate counter tracks the longest streak, updating if the value of the current streak counter exceeds the value of the longest streak counter 
- [x] A user can mark a card that they have mastered and have it removed from the pool of displayed cards
  - The user can mark a card to indicate that it has been mastered
  - Mastered cards are removed from the pool of displayed cards and added to a list of mastered cards

### Additional Features
The following **additional** features are implemented:

* [x] Added filter to only accept at least 3 letter to guess and submit.
* [x] Added guess counter function to count the number of submission. In addition, I added also counter for remaining cards.
* [x] Disable submit button if input filed is empty.

### TO-DO-LIST Features
* [ ] Disable submit button once submitted to prevent multiple guess for same flag or same guess.

## Video Walkthrough

Here's a walkthrough of implemented required features:

### PART 1
<img src='https://github.com/roeldcrodua/Flashcards/blob/main/src/assets/demo.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

### PART 2
<img src='https://github.com/roeldcrodua/Flashcards/blob/main/src/assets/demo2.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />
<!-- Replace this with whatever GIF tool you used! -->
GIF created with Wondershare Uniconverter 14 Tool - GIF Maker 
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

Took time fixing the do-do list for disabling the submit button to avoid guessing multiple times.

## License

    Copyright 2025 Roel Crodua

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.