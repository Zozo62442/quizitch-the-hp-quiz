# Quizitch - The Harry Potter Quiz
Harry Potter Facts Quiz is a magical, browser-based trivia game that invites fans to test their knowledge of the wizarding world—from Hogwarts houses to enchanted creatures. Designed with simplicity and immersion in mind, the quiz opens with a clear call to action and lets users begin at their own pace. As players progress through ten randomized questions, their score and progress are tracked in real time, all wrapped in smooth animations and intuitive navigation. Built with HTML, CSS, and JavaScript, this responsive project fetches its data from an external JSON file, demonstrating clean separation of content and logic. Whether you’re a Muggle or a seasoned witch or wizard, the Harry Potter Facts Quiz is an enchanting way to relive the magic—one question at a time.

![quizitch](/docs/quizitch-the-hp-quiz.png)

[Contents](#contents)
  * [User Goals](#user-goals)
  * [User Stories](#user-stories)
  * [Website Goals and Objectives](#website-goals-and-objectives)
  * [Wireframes](#wireframes)
  * [Design Choices](#design-choices)
    + [Typography](#typography)
    + [Colour Scheme](#colour-scheme)
    + [Images](#images)
- [Features](#features)
  * [Existing Features](#existing-features)
    + [Header](#header)
    + [Home (Landing) View](#landing-view)
    + [Marathons View](#marathon-view)
    + [Sign-Up View](#sign-up-view)
    + [Footer / Contact](#footer/contact)
  * [Future Enhancements](#future-enhancements)
- [Technologies Used](#technologies-used)
  * [Languages](#languages)
  * [Libraries & Framework](#libraries---framework)
  * [Tools](#tools)
- [Testing](#testing)
  * [Bugs Fixed](#bugs-fixed)
  * [Responsiveness Tests](#responsiveness-tests)
  * [Code Validation](#code-validation)
    + [HTML](#html)
    + [CSS](#css)
  * [Feature Testing](#feature-testing)
  * [Accessibility Testing](#accessibility-testing)
  * [Lighthouse Testing](#lighthouse-testing)
  * [Browser Testing](#browser-testing)
- [Deployment](#deployment)
  * [To deploy the project](#to-deploy-the-project)
- [Credits](#credits)


## User Goals
* Start the quiz easily: A clear, welcoming intro screen with a single call-to-action to begin.
* Engage with magical content: Play through 10 randomized Harry Potter trivia questions with multiple-choice answers.
* Track quiz progress: Live score and question count displayed throughout.
* Finish with feedback: A final score screen that congratulates or encourages retaking the quiz.
* Replay the quiz: A retake button allows users to try again instantly with a fresh set of shuffled questions.
* Enjoy smooth visuals: Transitions, styling, and clear layout create an immersive user experience.
* Use on any device: Fully responsive quiz layout for phones, tablets, and desktops.
* Load quickly and clearly: Lightweight assets and clean code ensure fast loading and good readability.

---

## User Stories
* As a user who is a Harry Potter fan, I want to test my knowledge with a fun quiz, so I can challenge myself on wizarding facts.
* As a user who is a first-time visitor, I want an intuitive, responsive layout, so I can take the quiz easily on any device.
* As a user who is a trivia lover, I want randomized questions each time, so I can enjoy replayability.
* As a user who is a player, I want to see my score update live and track how far I am through the quiz.
* As a user who got a low score, I want to quickly restart the quiz, so I can try again and improve.
* As a user, I want fast load times and simple controls, so I’m not frustrated by delays or confusion.
* As a visually-minded user, I want smooth transitions and animations, so the quiz feels polished and fun.
* As an accessibility-minded user, I want high contrast, clear buttons, and readable fonts, so I can participate easily.

---

## Website Goals and Objectives
* Entertain & educate: Deliver a light-hearted, engaging quiz experience for fans of all ages.
* Encourage replayability: Randomized content and instant restart give users a reason to return.
* Demonstrate front-end skills: Showcase use of HTML, CSS, JavaScript, `fetch()` API, and JSON in a cohesive project.
* Prioritize user experience: Clean UI, animations, and responsive design create a smooth, enjoyable quiz.
* Maintain accessibility: Use semantic HTML, alt text, keyboard accessibility, and readable contrast.
* Support easy maintenance: External JSON for question data keeps content and logic separate, making updates simple.

---

## Target Audience
* Harry Potter fans of all ages and knowledge levels  
* Trivia lovers looking for a fun, short challenge  
* Anyone who enjoys a touch of magic in their day


[Back to top](#contents)

## Wireframes
Wireframes were created using Canva, following a mobile-first design approach before scaling up to tablet and desktop layouts. The initial wireframes laid out the core structure and user flow of the quiz, ensuring a clean, intuitive experience across all devices.
There are some deviations from the original wireframes in the final live version of the quiz. Notably, a magical animated video background was added to bring the Harry Potter theme to life, along with several stylistic enhancements such as themed colors, fonts, and design accents inspired by the wizarding world.
Additionally, the question counter was transformed from simple text into a progress bar, offering a more visual representation of quiz progression. These updates were made to enhance engagement, improve usability, and align better with the overall theme and feel of the quiz.

[Mobile Wireframes](/docs/wireframe-mobile.png "Mobile Wireframes")
[Tabelt Wireframes](/docs/wireframe-tablet.png "Tablet Wireframes")
[Desktop Wireframes](/docs/wireframe-desktop.png "Desktop Wireframes")

## Design Choices

### Typography
* Headings: Pirata One, sans-serif — bold, modern, energetic
* Body: Barlow, sans-serif — highly legible for paragraphs and lists

I chose the above fonts, as they are meant to be easy to read and also have a sense of magic and old timeyness enough for a magical trivia. The text is sized using rem, to allow users to easily adjust them.

### Colour Scheme 
Colour scheme was chosen based on the palette of energetic “sunrise” and “track” hues to evoke motion and community fitting running. Additionally the colours have been tested to have enough contrast for users with different types of colour blindness:

[Contrast Grid](/docs/quizitch-colour-palette.png)
| CSS Name                 | HEX       | Comment                       |
| ------------------------ | --------- | ----------------------------- |
|     --title-colour       | #D3AF37 | Title text                    |
|     --heading-colours    | #D3AF37, #6a5acd, #F42B03| Questions and  sub-headings   |
|     --bg-dark            | #080357 | Page background               |
|     --text-colour        | #29524A | Quiz text                     |
|     --quiz-colour        | #FFFFFF | Quiz section                  |

## Images
Images and background images were sourced from getty images and from Unsplash. 

## Features

### Existing Features

#### Start Screen
* **Intro Title**: A clear, inviting title and short paragraph introducing the quiz theme.
* **Start Button**: A prominent “Start Quiz” button to begin the trivia challenge.

#### Quiz View
* **Dynamic Question Display**:
  * One question shown at a time, pulled from an external `questions.json` file.
  * Multiple-choice options presented as styled buttons.
* **Live Progress Tracker**:
  * Displays the current question number out of the total with a progress bar(e.g., "3 of 10").
  * Updates in real time as questions are answered.
* **Live Score Display**:
  * Score counter updates instantly on correct answers.
* **Smooth UI Experience**:
  * Shuffle logic ensures a fresh order for each quiz run.

#### Result Screen
* **Final Score Summary**:
  * Displays the user’s score out of 10.
  * Offers clear encouragement or congratulations based on performance.
* **Restart Button**:
  * Allows users to retake the quiz immediately with a reshuffled set of questions.

#### Code Structure & Logic
* **External Data Fetching**:
  * Questions are stored in `assets/data/questions.json`, loaded using the Fetch API.
* **Reusable Functions**:
  * Quiz logic is organized into functions like `fetchQuestions()`, `showQuestion()`, and `endQuiz()`.
* **Answer Randomization**:
  * Options are shuffled each time to avoid memorization of answer positions.

---

### Future Enhancements

* **Timer per Question**: Add countdowns for each question to increase challenge.
* **High Score Tracking**: Store top scores using `localStorage` to encourage replay.
* **Category Selection**: Let users pick between categories like "Spells", "Characters", "Books", etc.
* **Difficulty Levels**: Offer Easy, Medium, and Hard modes with filtered questions.
* **Sound Effects & Music**: Add subtle magical sounds for answer clicks or transitions.
* **Image-Based Questions**: Include questions with character or scene images.
* **Multilingual Support**: Translate the quiz into other languages for broader access.
* **Shareable Results**: Create social sharing buttons to post scores on platforms like Twitter or Facebook.
* **Dark Mode Toggle**: Allow users to switch between light and dark UI themes.

# Technologies Used

## Languages

- [HTML](https://developer.mozilla.org/en-US/docs/Glossary/HTML5 "HTML")
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS "CSS")
- [JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript "JS")

## Libraries & Framework

- [Google Fonts](https://fonts.google.com/ "Google Fonts")
- [Favicon](https://favicon.io/ "Favicon")


## Tools

* [GitHub](https://github.com/ "GitHub")
* [Canva](https://www.canva.com/ "Canva")
* [JSHint](https://jshint.com/ "JSHint")
* [W3C HTML Validation Service](https://validator.w3.org/ "W3C HTML")
* [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/ "W3C CSS")
* [Am I Responsive](https://ui.dev/amiresponsive "Am I responsive")
* [Responsive Design Checker](https://responsivedesignchecker.com/ "Responsive Design Checker")
* [WAVE Accessibility Tool](https://wave.webaim.org/ "WAVE Accessibility Tool")
* [Color Contrast Accessibility Validator](https://color.a11y.com/ "Color Contrast Accessibility Validator")

[Back to top](#contents)

# Testing

## Bugs 

The webpage was tested, to which 4 bugs required further attention but are resolved:

| Bug | Status | Description   | Steps To Resolve |
| -------------------------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Questions are not loading when starting the quiz. | Resolved | When pressing start on the quiz, the questions from my .json file would not load, and instead my placeholder text and questions would only appear. | I tried first posting the questions back into my script.js file to see if I may have made the .json file wrong. Then I used ... to step through my code line by line to see where my code stop running. There I discovered I had mispelled the word "question", which happened a few more times after. |
| VS code stopped running. | Resolved | When run the VS code stopped answering or moving. | I figured out that I had accidentally made an infinite loop. |
| Background video plays full screen on iPhone.| Resolved | With each new question, the background video pops-up to full screen on iOS mobile phones. | Made the background a solid colour for mobile versions, while for tablets and above screen sizes, the video is played. Could not get around iOS Safari system on phones. |
| Issues with mobile view of the game | Resolved | The background video was taking up the whole top page and the questions were too large for the screen, causing lots of scrolling. Additionally the progress bar and the score points were spilled over and could not be seen. | Due to a lack of time, screens smaller than 767px pixels received their own media query to scale the layout down to their size. It may not be the mobile-first approach, yet it is with the time constraints the most effective and efficient manner to finish the project on time to meet the passing standards of the criteria.  |

[Back to top](#contents)

## Responsiveness Tests

I launched the Quizitch Quiz website as early as possible in order to test its responsiveness. I used the DevTools from Firefox and Google Chrome to confirm all of my changes. To evaluate deployed versions, I used the external website [Responsive Design Checker](https://responsivedesignchecker.com/ "Responsive Design Checker"). To get a consistent view of various device breakpoints I used another external source:[Am I Responsive](https://ui.dev/amiresponsive "Am I responsive") website.

Final Test Results:

| Size | Device Example     | Navigation | Element Alignments | Content Placement | Functionality | 
| ---- | ------------------ | ---------- | ------------------ | ----------------- | ------------- | 
| sm   | Samsung Galaxy S5/S6/S7 | Good  | Good               | Good              | Good          | 
| sm   | Google Pixel       | Good       | Good               | Good              | Good          | 
| sm   | iPhone 13 PRO MAX  | Good       | Good               | Good              | Good          |  
| md   | iPad MINI          | Good       | Good               | Good              | Good          | 
| md   | iPad Samsung Galaxy Tab 10 | Good | Good             | Good              | Good          | 
| lg   | iPad Pro           | Good       | Good               | Good              | Good          | 
| xl   | 10" Desktop        | Good       | Good               | Good              | Good          |     
| xxl  | 24" Desktop        | Good       | Good               | Good              | Good          | 

[Back to top](#contents)


## Code Validation

### HTML

I validated and tested all html files [W3C HTML Validation Service](https://validator.w3.org/ "W3C HTML"), which came back with no significant errors.

* Main Quizitch Page:

![W3C HTML Validator Start](docs/index.html-validator.png "W3C HTML Validator index.html")
![W3C HTML Validator Game View](docs/game.html-validator.png "W3C HTML Validator index.html")
![W3C HTML Validator End Score View](docs/end-game.html-validator.png "W3C HTML Validator index.html")

[Back to top](#contents)

### CSS

![W3C CSS Validator](docs/css-validator.png "W3C CSS Validator results")

### JavaScript

JS code was validated on [JSHint](https://jshint.com/ "JSHint"). No errors identified.

![JS Validation Image](docs/js-test-result.png)

[Back to top](#contents)


## User Story Testing

| User Story                                                      | Result                                                     | Pass |Screenshot                                    |
| ------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------- | -------------------------------------------------------------------------- |
| As a user who is a Harry Potter fan, I want to test my knowledge with a fun quiz, so I can challenge myself on wizarding facts. | Quiz presents 10 Harry Potter–related questions.                           | Yes      | ![Question View](docs/user-story1.png "Question View")                     |
| As a user who is a first-time visitor, I want an intuitive, responsive layout, so I can take the quiz easily on any device.     | Quiz is fully responsive across all screen sizes.                          | Yes      | ![Level View](docs/quizitch-the-hp-quiz.png "Level View")                           |
| As a user who is a trivia lover, I want randomized questions each time, so I can enjoy replayability.                           | Questions are randomly selected each session.                              | Yes      | ![Question Answers](docs/user-story1.png "Question Answers")               |
| As a user who is a player, I want to see my score update live and track how far I am through the quiz.                          | Displays progress bar and live score counter.                              | Yes      | ![Score and Progress View](docs/user-story4.png "Score and Progress View") |
| As a user who got a low score, I want to quickly restart the quiz, so I can try again and improve.                              | Restart button available; intuitive controls.                              | Yes      | ![Start View](docs/user-story5.png "Start View")                           |
| As a user, I want fast load times and simple controls, so I’m not frustrated by delays or confusion.                            | Quick load speed and responsive UI; minimal delay between actions.         | Yes      | ![Score View](docs/user-story6.png "Score View")                           |
| As a user, I want to experience a fun, Hogwarts-themed interface.                                                               | Themed fonts, colors, and visual references to Harry Potter.               | Yes      | ![Themed UI](docs/user-story6.png "Themed UI")                             |
| As an accessibility-minded user, I want high contrast, clear buttons, and readable fonts, so I can participate easily.          | Readable fonts, visible contrast, and accessible controls.                 | Yes      | ![Feedback Form](docs/user-story1.png "Feedback Form")                     |
| As a user, I want to receive feedback on the correctness of my answers immediately.                                             | Correct answers highlight in green, incorrect in red for instant feedback. | Yes      | ![Feedback](docs/user-story9.png "Feedback")                               |

[Back to top](#contents)

## Accessibility Testing

![WAVE](docs/wave-results.png "WAVE Result")

[Back to top](#contents)


## Lighthouse Testing

The Harry Potter Quiz has been evaluated using the Lighthouse tool within Chrome DevTools. Lighthouse provides scores based on several key website quality metrics:

  * Performance – Measures how fast the site loads and becomes interactive for users.

  * Accessibility – Assesses how usable the site is for individuals relying on assistive technologies.

  * Best Practices – Verifies whether the site adheres to current web development standards.

  * SEO – Evaluates how well the site is optimized for visibility in search engine results.

Desktop Lighthouse Test Results (Chrome):
[Lighthouse-Desktop-Chrome-Index](docs/lighthouse-desktop-chrome-index.png "Lighthouse-Desktop-Chrome-Index")

Mobile Lighthouse Test Results (Chrome):
[Lighthouse-Mobile-Chrome-Index](docs/lighthouse-mobile-chrome-index.png "Lighthouse-Mobile-Chrome-Index")

[Back to top](#contents)


## Browser Testing

For browser testing I used Firefox, Google Chrome and Safari to test for bugs and possible malfunctions. On the iPhone and iPad I tested both Safari and Firefox. The desktop versions were tested on Google Chrome and Firefox. No significant problems were detected for either browsers or display types. 


[Back to top](#contents)

# Deployment

## To deploy the project

The Running-club website was deployed on GitHub pages using the steps below:

- Go to the repository on GitHub and click **Settings**.

- From the side navigation, pick **Pages**.

- In the **None** dropdown, select **Main**.

- Click the **Save** button.

- The website is now available at https://zozo62442.github.io/quizitch-the-hp-quiz/.

_Any changes needed to the website can be made, committed, and pushed to GitHub._

[Back to top](#contents)


# Credits

- Insightful feedback, advice and support:

    - [Simen Daehlin](https://github.com/Eventyret "Simen Daehlin")
    - [Oisin Tohak]("Oisin Tohak") for the extra Tutor session for my second attempt of the assignment.

- Code inspiration and learning content:

    - [Love Maths Project](https://codeinstitute.net "Love Maths Project")
    - [W3C Schools](https://www.w3schools.com/ "W3C Schools")
    - [Project Portfolio-2 channel on Slack](https://slack.com/intl/en-ie/ "Slack")

- YouTube Channels for Quiz functionality and fetching:
    - [James Q Quick](https://www.youtube.com/playlist?list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx "YouTube Channel")
    - [Web Develipment Simplified](https://www.youtube.com/watch?v=iiADhChRriM&list=WL&index=7&t=1s "YouTube Channel")

- Visual content:
    - [Coolors](https://coolors.co/ "Coolors")

- Background Animation
    - [w3schools](https://www.w3schools.com/howto/howto_css_fullscreen_video.asp "w3schools")
    - [Daweb Schools](https://www.youtube.com/watch?v=g-bQe-gZwJ4 "Youtube Channel")
    - [gaeddongi](https://sora.chatgpt.com/g/gen_01jm481rhzf38a12cgyb1qvcfs "Animator of Background")

- Text shimmer or glow effect
    - [Codeguage](https://www.codeguage.com/blog/shimmer-effect-html-css "Shimmer Effect Resource")
    - [W3C Schools](https://www.w3schools.com/css/css3_shadows.asp "W3C Schools")

- Pulse effect
    - [Travis Media](https://travis.media/blog/css-pulse-effect/ "Travis Media Blog") 

- Loader Code:
    - [How To Create a Loader](https://www.w3schools.com/howto/howto_css_loader.asp "w3schools")
