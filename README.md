# Angular Finance Calculator

A lightweight Angular 18 application for projecting long-term investment growth.

The app lets users enter key investment parameters and generates a year-by-year breakdown including portfolio value, yearly interest, cumulative interest, and total invested capital.

## Highlights

- Clean single-page workflow with instant calculation on submit
- Year-by-year projection table for better financial visibility
- Built with standalone Angular components (no NgModules required)
- Uses Angular Forms for user input and built-in currency formatting for output

## Tech Stack

- Angular 18
- TypeScript
- Angular Forms
- Karma + Jasmine for testing

## Quick Start

### 1. Install dependencies

~~~bash
npm install
~~~

### 2. Run the app

~~~bash
npm start
~~~

Open http://localhost:4200 in your browser.

## Available Scripts

~~~bash
npm start      # Start development server
npm run build  # Create production build
npm run watch  # Build in watch mode (development config)
npm test       # Run unit tests with Karma
~~~

## How It Works

The calculator takes four inputs:

- Initial investment
- Annual investment
- Expected annual return (percent)
- Investment duration (years)

For each year, it computes:

- Interest earned for the current year
- End-of-year investment value
- Total accumulated interest
- Total invested capital

Core yearly update logic:

~~~text
interest = currentValue * (expectedReturn / 100)
currentValue = currentValue + interest + annualInvestment
~~~

## Project Structure

~~~text
src/
	app/
		header/                  # App header and branding
		user-input/              # Input form and submit event emission
		investment-results/      # Results table rendering
		investment-input.model.ts
		app.component.ts         # Composition + core calculation logic
		app.component.html
	investment-results.ts      # Reference helper snippet
	main.ts
	styles.css
~~~

## Output Details

The results table includes:

- Year
- Investment value (end of year)
- Interest earned in that year
- Total interest earned up to that year
- Invested capital (initial + all annual contributions)

## Development Notes

- This project uses standalone components and direct component imports.
- Assets are served from the public folder.
- Production build output path: dist/essentials-practice

## Suggested Next Improvements

- Add input validation and user-friendly error states
- Support monthly contribution mode
- Add charts for visual growth trends
- Add scenario comparison (side-by-side strategies)

## License

This project is provided for educational and personal use.
