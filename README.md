# Food delivery with Happiness

![pageimage](https://user-images.githubusercontent.com/11784820/74104871-c52a0e00-4b61-11ea-9c93-163b0244fdc0.png)

> Displaying a list of restaurants with a sort functionality

## About "Project"

### 1. Requirements

- Display all fifty restaurants with at least three fields in a Wolt restaurants json file.
- Make a web page responsive to different screen
- Sort restaurants alphabetically in ascending and descending order
- [Bonus] Render the blurhash data

### 2. The project consists of:

- Displayed fifty restaurants information(name, description, image, delivery price and tags)
- Made a responsive web page
- Made an alphabetical sort functionality for sorting restaurants
- Displayed a skeleton screen with a contents loader when all the data is loading
- Displayed the blurhash as a placeholder when images are loading
- Tested types with Typescript and test sortArray & formatCurrency with Jest

## Installation, Formatting/Linting & Test

### 1. Installation

- Clone the repository git clone https://github.com/flyjwayur/foodWithHappiness.git
- Navigate into the directory cd foodWithHappiness
- Install dependencies `yarn`
- Start the project with `yarn run dev`

### 2. Formatting/Linting

- Format with prettier : `yarn run format`
- Lint with ts-lint : `yarn run lint` or `yarn run lint:ts`
- Type check with tslint-config-prettier-check : `yarn run tslint-check`

### 3. Testing

- Default test with jest : `yarn run test`
- Test with jest watch more : `yarn run test:watch`

## Technologies which is used for the project

"react", "typescript", "jest", "styled-components", "blurhash", "storybook", "ts-lint", "prettier"

## Considerations during implementations

- Displaying/Sorting data clear
- Coherent design token(color, layout, space and typography) with the Wolt design
- Responsiveness to different screens
- Static type checker and functionality test
- Organized file structures
- Comments about implementation reasons

## Feature ideas

- Search restaurants
- Filter restaurants with online possibility
- React Component test with Jest
- Component driven development with Storybook
  (Storybook needs to be configured more with TS)
