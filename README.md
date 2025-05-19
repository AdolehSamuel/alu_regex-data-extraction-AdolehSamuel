# Regex Data Extraction Tool

Hey! This is my regex data extraction project for the ALU assignment. It finds different types of data in text like emails, phone numbers, URLs and more!

---

## What This Project Does

This tool takes any text and finds important information in it using regex patterns. It can find:

- Email addresses (like user@example.com)
- Website URLs (like https://www.example.com)
- Phone numbers (different formats like (123) 456-7890)
- Credit card numbers
- Time formats (both 12-hour and 24-hour)
- HTML tags
- Hashtags (like #coding)
- Currency amounts (like $19.99)

---

## Why I Made This

As a junior developer, I wanted to practice regex and build something useful. This project helps extract data from messy text which is super useful for web scraping and data processing!

---

## How to Use

### What You Need

- Node.js installed on your computer
- A text editor to modify the code if needed

### Steps to Run

1. **Download the code:**

   ```bash
   git clone https://github.com/AdolehSamuel/alu_regex-data-extraction-AdolehSamuel.git
   cd alu_regex-data-extraction-AdolehSamuel
   ```

2. **Run the script:**

   ```bash
   node index.js
   ```

3. **See the results!**
   The program will show you all the data it found, organized by type.

### Example Output

```
Starting data extraction...

EXTRACTION RESULTS:
==================

EMAILS:
- john@example.com
- mary.smith@company.co.uk

URLS:
- https://www.example.com
- http://subdomain.example.org/page

PHONE NUMBERS:
- (123) 456-7890
- 555-123-4567

... and more!

TOTAL ITEMS FOUND: 15
```

---

## How It Works

The code uses separate functions for each type of data:

- `findEmails()` - finds email addresses
- `findUrls()` - finds website links
- `findPhones()` - finds phone numbers
- And so on...

Each function uses a regex pattern to match the specific format of data we're looking for.

---

## Testing Different Text

You can change the `testText` variable in the code to test your own text! Just replace it with whatever text you want to analyze.

---

## What I Learned

- How to write regex patterns for different data types
- How to use JavaScript's `match()` function
- How to organize code into separate functions
- Basic error handling with if statements