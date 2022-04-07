# Enquête

Complete a survey about the minor

## Table of contents

- [Concept](https://github.com/marloestacx/bt-enquete#concept)
- [Wireflow](https://github.com/marloestacx/bt-enquete#wireflow)
- [Progressive Enhancement](https://github.com/marloestacx/bt-enquete#progressive-enhancement)
- [Features](https://github.com/marloestacx/bt-enquete#features)
- [Testing](https://github.com/marloestacx/bt-enquete#testing)
- [Installation](https://github.com/marloestacx/bt-enquete#installation)
- [Wishlist](https://github.com/marloestacx/bt-enquete#wishlist)
- [Resources](https://github.com/marloestacx/bt-enquete#resources)
- [License](https://github.com/marloestacx/bt-enquete#license)

## Concept

The user can fill in a survey about the minor web design, when he leaves the page his progress will be saved, and he can later continue where he left off. The user can also see the answers of the survey.

## User Story

I want to be able to fill in a survey about the minor Web Development, with different answer options. If I don't finish the survey, I'll want to pick up where I left off later.

## Wireflow

## Progressive Enhancement

- HTML: The core part of this website is a form which is built with HTML. You can always fill in and submit the survey and see your results.
- CSS: With CSS I added some styling to the website, this makes the website prettier and more pleasant to use. 
- JavaScript: With JavaScript the page saves your progress

## Features

You can fill in the survey and submit it. Your answers will be saved, and you can complete the survey the next time you visit the website.

## Testing

### Google Chrome Desktop

In this browser, the website works perfectly. You can fill in the survey and see the results. When you close the page while you're filling the survey in, your answers will be saved for the next time. When turning off JavaScript you can still fill in the survey and see the answers, but your answers will no longer be saved.

### Safari Desktop

On Safari Desktop the website works perfectly, just like on Chrome you can fill in the survey and see the results. When you close the page, your progress gets saved automatically in the local storage. When JavaScript is turned off, you can still fill in the survey and submit it, but your progress will no longer be saved automatically.

## Safari iPhone 13

In this browser, the website works. You can fill in the survey and see the results. Saving your process when filling in the survey doesn't work.

## Android 11 OnePlus 7T Pro

In this browser, the website works perfectly. You can fill in the survey and see the results. When you close the page while you're filling the survey in, your answers will be saved for the next time.

## Installation

Clone this repository

```
https://github.com/marloestacx/bt-enquete.git
```

Install the packages

```
npm install
```

Start the app

```
npm start
```

## Checklist

- [x] Fill in survey
- [x] Save survey answers
- [x] Continue survey later
- [x] View survey answers
- [ ] Get average of answers

## Resources

- [Can I use](http://caniuse.com)
- [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

## License

This repository has the [MIT](https://github.com/marloetacx/bt-enquete/blob/main/LICENSE) license.
