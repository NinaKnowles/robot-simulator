# Robot Simulator

This project an interactive simulation of a robot moving on a square tabletop, of dimensions 5 units x 5 units.

The user must select a starting position (Direction, X Coordinate and Y Coordinate) and selecting ENTER before they are able to move the robot.

They will then have be able to select the following options:

- MOVE: move the robot 1 unit in the direction it is facing
- LEFT: rotate the robot left (anti-clockwise)
- RIGHT: rotate the robot right (clockwise)
- REPORT: report the position values

The user has the option to change the robot position by inputting different values in the form and selecting ENTER again.

The robot will not be able to move off the edge of the table.

##### Table of Contents

| Section | Description                   |
| ------- | ----------------------------- |
| A       | Set Up Instructions           |
| B       | Prettier & Linter Tools       |
| C       | Naming Conventions: Filenames |

## A - SET UP INSTRUCTIONS

1. To install the dependencies:

### `npm i`

2. To run the application:

### `npm run dev`

##  B - Prettier & Linter Tools

Before making a merge request make sure to run prettier and the linter. The first time you run "npm run dev" it will do this by default but you will need to check again when you are finished making changes.

1. Run the prettier and linter tools to tidy up the formatting and check for formatting issues

### `npm run fix`

2. Address any bugs that have been spotted by the linter
3. Check if all linter formatting issues have been addressed. This will also spot any type errors:

### `npm run check`

4. Address any type errors that have been identified.
5. Repeat previous steps until, no more errors are being flagged then continue to the next step.

## C - Naming Convention: File Names

File names should have the following convention:

- Typescript files should be kebab case: hello-world.tsx
