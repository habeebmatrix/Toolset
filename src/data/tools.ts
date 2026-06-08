export type CategorySlug =
  | 'math'
  | 'finance'
  | 'automotive'
  | 'health'
  | 'date-time'
  | 'text'
  | 'office-design'
  | 'converters'
  | 'developer';

export interface Tool {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  category: CategorySlug;
  tags: string[];
  featured?: boolean;
  isNew?: boolean;
  isReady?: boolean;
}

export interface Category {
  slug: CategorySlug;
  name: string;
  description: string;
  longDescription: string;
  icon: string;
  accentColor: string;
}

export const categories: Category[] = [
  {
    slug: 'math',
    name: 'Math',
    description: 'Percentage, ratio, average, and algebra calculators.',
    longDescription:
      'Solve everyday math problems instantly — percentages, ratios, averages, GCD, LCM, and more. No formulas to memorise.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,
    accentColor: '#4F46E5',
  },
  {
    slug: 'finance',
    name: 'Finance',
    description: 'Compound interest, loan EMI, ROI, and savings calculators.',
    longDescription:
      'Make smarter financial decisions. Calculate compound interest, plan loan repayments, figure out ROI, and more.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
    accentColor: '#059669',
  },
  {
    slug: 'health',
    name: 'Health & Fitness',
    description: 'BMI, calorie, body fat, and macros calculators.',
    longDescription:
      'Track your health metrics with science-backed calculators for BMI, calorie needs, body fat percentage, and more.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
    accentColor: '#DC2626',
  },
  {
    slug: 'date-time',
    name: 'Date & Time',
    description: 'Days between dates, age calculator, and timezone tools.',
    longDescription:
      'Work with dates and times easily. Find days between dates, calculate ages, convert timezones, and build countdowns.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
    accentColor: '#D97706',
  },
  {
    slug: 'text',
    name: 'Text & Writing',
    description: 'Word counter, case converter, lorem ipsum, and more.',
    longDescription:
      'Text utilities for writers, developers, and students. Count words, convert case, generate placeholder text, and analyse readability.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/></svg>`,
    accentColor: '#7C3AED',
  },
  {
    slug: 'automotive',
    name: 'Automotive',
    description: 'Tyre age, fuel cost, MPG, depreciation, and road trip tools.',
    longDescription:
      'Vehicle calculators for every driver. Check tyre safety age, calculate fuel costs, convert pressure units, estimate car depreciation, and plan road trips.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="5.5" cy="17.5" r="2.5"/><circle cx="18.5" cy="17.5" r="2.5"/><path d="M3 17V9l2-4h10l3 4h2a1 1 0 0 1 1 1v7"/><path d="M5 9h13"/></svg>`,
    accentColor: '#B45309',
  },
  {
    slug: 'office-design',
    name: 'Office & Design',
    description: 'Test print page, color tools, and office utilities.',
    longDescription:
      'Practical tools for the office and creative work. Print test pages, check colours, and get utilities that make everyday tasks easier.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>`,
    accentColor: '#1D4ED8',
  },
  {
    slug: 'converters',
    name: 'Unit Converters',
    description: 'Length, weight, temperature, speed, and area converters.',
    longDescription:
      'Convert any unit to any other unit. Length, weight, temperature, speed, area, volume, pressure — all in one place.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>`,
    accentColor: '#0891B2',
  },
  {
    slug: 'developer',
    name: 'Developer Tools',
    description: 'JSON formatter, Base64, URL encoder, regex tester.',
    longDescription:
      'Handy tools for developers. Format JSON, encode/decode Base64, percent-encode URLs, test regular expressions, and more.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
    accentColor: '#0F172A',
  },
];

export const tools: Tool[] = [
  // Math
  {
    slug: 'percentage-calculator',
    name: 'Percentage Calculator',
    shortDescription: 'Calculate percentages, find percentage change, and more.',
    description:
      'All-in-one percentage calculator. Find X% of Y, work out what percentage X is of Y, calculate percentage increase or decrease, and add or subtract a percentage from a value.',
    category: 'math',
    tags: ['percentage', 'percent', 'percentage change', 'percentage increase', 'percentage decrease'],
    featured: true,
    isReady: true,
  },
  {
    slug: 'ratio-calculator',
    name: 'Ratio Calculator',
    shortDescription: 'Simplify ratios and solve proportions.',
    description: 'Simplify ratios to their lowest terms, solve missing values in proportions, and scale ratios up or down.',
    category: 'math',
    tags: ['ratio', 'proportion', 'simplify ratio'],
    featured: false,
    isReady: true,
  },
  {
    slug: 'average-calculator',
    name: 'Average Calculator',
    shortDescription: 'Mean, median, mode, and range in one tool.',
    description: 'Calculate mean, median, mode, and range from a list of numbers. Supports large datasets.',
    category: 'math',
    tags: ['average', 'mean', 'median', 'mode'],
    featured: false,
    isReady: true,
  },
  // Finance
  {
    slug: 'compound-interest-calculator',
    name: 'Compound Interest Calculator',
    shortDescription: 'See how your savings or investments grow over time.',
    description:
      'Calculate compound interest with monthly, quarterly, or annual compounding. Shows final amount, total interest earned, and a year-by-year breakdown.',
    category: 'finance',
    tags: ['compound interest', 'investment calculator', 'savings calculator', 'interest calculator'],
    featured: true,
    isReady: true,
  },
  {
    slug: 'loan-emi-calculator',
    name: 'Loan EMI Calculator',
    shortDescription: 'Calculate your monthly loan repayment.',
    description: 'Find out your monthly EMI for any loan — home, car, personal. Shows total interest paid and a full month-by-month amortisation schedule.',
    category: 'finance',
    tags: ['EMI', 'loan calculator', 'mortgage calculator', 'monthly payment'],
    featured: false,
    isReady: true,
  },
  {
    slug: 'tip-calculator',
    name: 'Tip Calculator',
    shortDescription: 'Split the bill and calculate tips instantly.',
    description: 'Calculate how much to tip and split the total between any number of people.',
    category: 'finance',
    tags: ['tip calculator', 'split bill', 'gratuity'],
    featured: false,
    isReady: true,
  },
  // Automotive
  {
    slug: 'tyre-age-calculator',
    name: 'Tyre Age Calculator',
    shortDescription: 'Check how old your tyres are from the DOT code.',
    description: 'Find out how old your tyres are by entering the 4-digit DOT date code on the sidewall. Get a safety assessment and replacement recommendation based on manufacturer guidelines.',
    category: 'automotive',
    tags: ['tyre age calculator', 'tire age calculator', 'DOT code', 'tyre manufacture date', 'how old are my tyres', 'tire age'],
    featured: true,
    isReady: true,
  },
  {
    slug: 'fuel-cost-calculator',
    name: 'Fuel Cost Calculator',
    shortDescription: 'Calculate the fuel cost of any journey.',
    description: 'Work out how much fuel a trip will cost based on distance, fuel efficiency, and current fuel price. Supports both imperial (miles/MPG) and metric (km/L per 100km) units.',
    category: 'automotive',
    tags: ['fuel cost calculator', 'petrol cost calculator', 'gas cost calculator', 'trip fuel cost'],
    featured: false,
    isReady: true,
  },
  {
    slug: 'mpg-calculator',
    name: 'MPG & Fuel Efficiency Calculator',
    shortDescription: 'Calculate MPG or convert between fuel efficiency units.',
    description: 'Calculate miles per gallon from distance and fuel used, or instantly convert between MPG, L/100km, and km/L to compare fuel efficiency across vehicles.',
    category: 'automotive',
    tags: ['MPG calculator', 'miles per gallon', 'fuel efficiency', 'L/100km', 'km per litre'],
    featured: false,
    isReady: true,
  },
  {
    slug: 'tyre-pressure-converter',
    name: 'Tyre Pressure Converter',
    shortDescription: 'Convert tyre pressure between PSI, bar, and kPa.',
    description: 'Instantly convert tyre pressure between PSI, bar, and kPa. Enter a value in any unit to see the equivalent in all others.',
    category: 'automotive',
    tags: ['tyre pressure converter', 'PSI to bar', 'bar to PSI', 'kPa to PSI', 'tire pressure converter'],
    featured: false,
    isReady: true,
  },
  {
    slug: 'car-depreciation-calculator',
    name: 'Car Depreciation Calculator',
    shortDescription: 'Estimate how much your car has lost in value.',
    description: 'Estimate your car\'s current value and total depreciation based on purchase price, age, and annual depreciation rate. Includes a year-by-year value breakdown.',
    category: 'automotive',
    tags: ['car depreciation calculator', 'vehicle depreciation', 'car value calculator', 'how much is my car worth'],
    featured: false,
    isReady: true,
  },
  {
    slug: 'road-trip-cost-calculator',
    name: 'Road Trip Cost Calculator',
    shortDescription: 'Plan the total cost of your road trip.',
    description: 'Calculate the full cost of a road trip including fuel, accommodation, and food. Split total costs per person for easy group travel budgeting.',
    category: 'automotive',
    tags: ['road trip cost calculator', 'road trip planner', 'trip cost calculator', 'driving cost calculator'],
    featured: false,
    isReady: true,
  },
  // Health
  {
    slug: 'bmi-calculator',
    name: 'BMI Calculator',
    shortDescription: 'Calculate your Body Mass Index.',
    description: 'Calculate your BMI using metric or imperial units and see which weight category you fall into, with a visual range indicator.',
    category: 'health',
    tags: ['BMI', 'body mass index', 'weight calculator'],
    featured: false,
    isReady: true,
  },
  {
    slug: 'calorie-calculator',
    name: 'Calorie Calculator',
    shortDescription: 'Find your daily calorie needs (TDEE).',
    description: 'Calculate your Basal Metabolic Rate (BMR) and Total Daily Energy Expenditure (TDEE) using the Mifflin-St Jeor equation, with targets for weight loss, maintenance, and gain.',
    category: 'health',
    tags: ['calorie calculator', 'TDEE', 'BMR', 'calorie deficit', 'calorie needs'],
    featured: false,
    isReady: true,
  },
  // Date & Time
  {
    slug: 'days-between-dates',
    name: 'Days Between Dates',
    shortDescription: 'Find the number of days between any two dates.',
    description: 'Calculate the exact number of days between two dates, plus weeks, months, and working days (excluding weekends).',
    category: 'date-time',
    tags: ['days between dates', 'date calculator', 'date difference'],
    featured: false,
    isReady: true,
  },
  {
    slug: 'age-calculator',
    name: 'Age Calculator',
    shortDescription: 'Calculate exact age from a date of birth.',
    description: 'Find your exact age in years, months, and days from your date of birth, plus total days lived and your next birthday countdown.',
    category: 'date-time',
    tags: ['age calculator', 'date of birth', 'how old am I'],
    featured: false,
    isReady: true,
  },
  // Text
  {
    slug: 'word-counter',
    name: 'Word & Character Counter',
    shortDescription: 'Count words, characters, sentences, and paragraphs.',
    description: 'Paste any text to instantly count words, characters (with and without spaces), sentences, paragraphs, and get reading and speaking time estimates.',
    category: 'text',
    tags: ['word counter', 'character counter', 'word count'],
    featured: false,
    isReady: true,
  },
  {
    slug: 'case-converter',
    name: 'Text Case Converter',
    shortDescription: 'Convert text to upper, lower, title, or camelCase.',
    description: 'Convert text between uppercase, lowercase, Title Case, Sentence case, camelCase, PascalCase, snake_case, kebab-case, and more — with one click.',
    category: 'text',
    tags: ['case converter', 'uppercase', 'lowercase', 'title case', 'camelCase'],
    featured: false,
    isReady: true,
  },
  // Office & Design
  {
    slug: 'test-print-page',
    name: 'Test Print Page',
    shortDescription: 'Print a full test page to check colour, alignment, and text.',
    description:
      'A comprehensive printer test page covering colour accuracy, grayscale steps, ink coverage, gradient reproduction, text legibility at multiple sizes, alignment marks, and a 1 cm grid. Works with any printer.',
    category: 'office-design',
    tags: ['test print page', 'printer test page', 'print test', 'colour calibration', 'print alignment', 'printer test'],
    featured: true,
    isNew: true,
    isReady: true,
  },
  {
    slug: 'gps-speedometer',
    name: 'GPS Speedometer',
    shortDescription: 'Real-time speed from your device GPS.',
    description: 'A live GPS speedometer that shows your current speed as an analog gauge and digital readout. Tracks max speed, average speed, distance travelled, and elapsed time for your journey. Works in any modern browser with location permission.',
    category: 'automotive',
    tags: ['speedometer', 'gps speedometer', 'speed tracker', 'car speed', 'real-time speed', 'driving speed', 'speed gauge'],
    featured: false,
    isNew: true,
    isReady: true,
  },
  // Converters
  {
    slug: 'length-converter',
    name: 'Length Converter',
    shortDescription: 'Convert between metres, feet, inches, miles, and more.',
    description: 'Convert length and distance units: metres, kilometres, centimetres, feet, inches, yards, and miles.',
    category: 'converters',
    tags: ['length converter', 'meters to feet', 'km to miles', 'unit converter'],
    featured: false,
    isReady: false,
  },
  {
    slug: 'temperature-converter',
    name: 'Temperature Converter',
    shortDescription: 'Convert between Celsius, Fahrenheit, and Kelvin.',
    description: 'Instantly convert temperatures between Celsius, Fahrenheit, and Kelvin.',
    category: 'converters',
    tags: ['temperature converter', 'Celsius to Fahrenheit', 'Fahrenheit to Celsius'],
    featured: false,
    isReady: false,
  },
  // Developer
  {
    slug: 'json-formatter',
    name: 'JSON Formatter',
    shortDescription: 'Format, validate, and minify JSON.',
    description: 'Paste raw JSON to format it with proper indentation, validate it, or minify it for production.',
    category: 'developer',
    tags: ['JSON formatter', 'JSON validator', 'JSON beautifier', 'JSON minifier'],
    featured: false,
    isReady: false,
  },
  {
    slug: 'base64-encoder',
    name: 'Base64 Encoder / Decoder',
    shortDescription: 'Encode and decode Base64 strings instantly.',
    description: 'Encode any text to Base64 or decode a Base64 string back to plain text. Works entirely in your browser.',
    category: 'developer',
    tags: ['Base64 encoder', 'Base64 decoder', 'Base64'],
    featured: false,
    isReady: false,
  },
];

export function getCategory(slug: CategorySlug): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getToolsByCategory(slug: CategorySlug): Tool[] {
  return tools.filter((t) => t.category === slug);
}

export function getFeaturedTools(): Tool[] {
  return tools.filter((t) => t.featured);
}

export function getReadyTools(): Tool[] {
  return tools.filter((t) => t.isReady);
}
