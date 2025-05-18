# Quizitch - The Harry Potter Quiz
Harry Potter Facts Quiz is a magical, browser-based trivia game that invites fans to test their knowledge of the wizarding world—from Hogwarts houses to enchanted creatures. Designed with simplicity and immersion in mind, the quiz opens with a clear call to action and lets users begin at their own pace. As players progress through ten randomized questions, their score and progress are tracked in real time, all wrapped in smooth animations and intuitive navigation. Built with HTML, CSS, and JavaScript, this responsive project fetches its data from an external JSON file, demonstrating clean separation of content and logic. Whether you’re a Muggle or a seasoned witch or wizard, the Harry Potter Facts Quiz is an enchanting way to relive the magic—one question at a time.

![quizitch](/docs/footloose-running-club.png)

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
* As a Harry Potter fan, I want to test my knowledge with a fun quiz, so I can challenge myself on wizarding facts.
* As a first-time visitor, I want an intuitive, responsive layout, so I can take the quiz easily on any device.
* As a trivia lover, I want randomized questions each time, so I can enjoy replayability.
* As a player, I want to see my score update live and track how far I am through the quiz.
* As someone who got a low score, I want to quickly restart the quiz, so I can try again and improve.
* As a casual user, I want fast load times and simple controls, so I’m not frustrated by delays or confusion.
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
### Mobile-first sketches created in Balsamiq:
* Hero + reasons stacked
* Marathon cards in single column
* Contact info

### Tablet & Desktop:
* Hero full-width carousel
* Reasons as three-column grid
* Marathon cards in two- or three-column grid
* Contact bottom
* Success page address and map side-by-side

[Mobile Wireframes](/docs/wireframe-mobile.png "Mobile Wireframes")

[Desktop Wireframes](/docs/wireframe-desktop.png "Mobile Wireframes")

## Design Choices

### Typography
* Headings: Pirata One, sans-serif — bold, modern, energetic
* Body: Barlow, sans-serif — highly legible for paragraphs and lists

I chose the above fonts, as they are meant to be easy to read and also have a sense of magic and old timeyness enough for a magical trivia. The text is sized using rem, to allow users to easily adjust them.

### Colour Scheme 
Colour scheme was chosen based on the palette of energetic “sunrise” and “track” hues to evoke motion and community fitting running. Additionally the colours have been tested to have enough contrast for users with different types of colour blindness:

[Contrast Grid](/docs/colours-runners-club.png)
| CSS Name                 | HEX       | Comment                       |
| ------------------------ | --------- | ----------------------------- |
|     --title-colour       | #D3AF37 | Title text                    |
|     --heading-colour     | #F42B03 | Questions and  sub-headings   |
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
  * Displays the current question number out of the total (e.g., "3 of 10").
  * Updates in real time as questions are answered.
* **Live Score Display**:
  * Score counter updates instantly on correct answers.
* **Smooth UI Experience**:
  * Fade-in effect for each new question.
  * Shuffle logic ensures a fresh order for each quiz run.
* **Responsive Layout**:
  * Mobile-first design ensures smooth play on phones, tablets, and desktops.

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
* **Accessibility Enhancements**: Add ARIA labels and keyboard navigation for improved screen reader support.
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
* [GitPod](https://www.gitpod.io/#get-started "GitPod")
* [Balsamiq](https://balsamiq.com/wireframes/ "Balsamiq")
* [W3C HTML Validation Service](https://validator.w3.org/ "W3C HTML")
* [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/ "W3C CSS")
* [Am I Responsive](https://ui.dev/amiresponsive "Am I responsive")
* [Responsive Design Checker](https://responsivedesignchecker.com/ "Responsive Design Checker")
* [WAVE Accessibility Tool](https://wave.webaim.org/ "WAVE Accessibility Tool")
* [Color Contrast Accessibility Validator](https://color.a11y.com/ "Color Contrast Accessibility Validator")

[Back to top](#contents)

# Testing

## Bugs 

The webpage was thoroughly tested. 3 bugs are still unresolved and require further investigation: 

| Bug | Status | Description   | Steps To Resolve |
| -------------------------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |


[Back to top](#contents)

## Responsiveness Tests

I launched the Quizitch Quiz website as early as possible in order to test its responsiveness. I used the DevTools from Firefox to confirm all of my changes, with the mobile-first approach in mind.  To evaluate deployed versions, I used the external website [Responsive Design Checker](https://responsivedesignchecker.com/ "Responsive Design Checker"). To get a consistent view of various device breakpoints I used another external source:[Am I Responsive](https://ui.dev/amiresponsive "Am I responsive") website.

Final Test Results:

| Size | Device Example     | Navigation | Element Alignments | Content Placement | Functionality | 
| ---- | ------------------ | ---------- | ------------------ | ----------------- | ------------- | 


[Back to top](#contents)


## Code Validation

### HTML

I validated and tested ... html files [W3C HTML Validation Service](... "W3C HTML"), which came back ... errors.

* Main Quizitch Page:

![W3C HTML Validator](... "W3C HTML Validator index.html")

* Question Page:

![W3C HTML Validator](... "W3C HTML Validator feedback-thanks.html")


[Back to top](#contents)

### CSS



![W3C CSS Validator](... "W3C CSS Validator results")


[Back to top](#contents)


## Accessibility Testing



![WAVE](... "WAVE Result")

[Back to top](#contents)


## Lighthouse Testing



[Back to top](#contents)


## Browser Testing



[Back to top](#contents)

# Deployment

## To deploy the project

The Running-club website was deployed on GitHub pages using the steps below:

- Go to the repository on GitHub and click **Settings**.

- From the side navigation, pick **Pages**.

- In the **None** dropdown, select **Main**.

- Click the **Save** button.

- The website is now available at https://zozo62442.github.io/running-club/.

_Any changes needed to the website can be made, committed, and pushed to GitHub._

[Back to top](#contents)


# Credits

- Insightful feedback, advice and support:

    - [Simen Daehlin](https://github.com/Eventyret "Simen Daehlin") # quizitch-the-hp-quiz


- Code inspiration and learning content:

    - [Love Maths Project](https://codeinstitute.net "Love Maths Project")
    - [W3C Schools](https://www.w3schools.com/ "W3C Schools")
    - [Project Portfolio-2 channel on Slack](https://slack.com/intl/en-ie/ "Slack")

- Quiz Questions:
    - 

- YouTube Channels for Quiz functionality and fetching:
    - [James Q Quick](https://www.youtube.com/playlist?list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx "YouTube Channel")

- Visual content:
    - [Coolors](https://coolors.co/ "Coolors")

- Loader Code:
    - [How To Create a Loader](https://www.w3schools.com/howto/howto_css_loader.asp "w3schools")
