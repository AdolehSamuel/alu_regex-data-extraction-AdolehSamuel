#!/usr/bin/env node

// Regex patterns to find different types of data
const emailPattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
const urlPattern =
  /https?:\/\/(www\.)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\/[^\s]*)?/g;
const phonePattern = /\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/g;
const creditCardPattern = /\b\d{4}[-\s]?\d{4}[-\s]?\d{4}[-\s]?\d{4}\b/g;
const timePattern =
  /\b(1[0-2]|0?[1-9]):[0-5][0-9]\s?(AM|PM)\b|\b([01]?[0-9]|2[0-3]):[0-5][0-9]\b/gi;
const htmlTagPattern = /<[^>]+>/g;
const hashtagPattern = /#[a-zA-Z0-9_]+/g;
const currencyPattern = /\$\d{1,3}(,\d{3})*(\.\d{2})?/g;

// Function to find all emails in text
function findEmails(text) {
  if (!text) return [];
  let matches = text.match(emailPattern);
  return matches ? matches : [];
}

// Function to find all URLs in text
function findUrls(text) {
  if (!text) return [];
  let matches = text.match(urlPattern);
  return matches ? matches : [];
}

// Function to find all phone numbers in text
function findPhones(text) {
  if (!text) return [];
  let matches = text.match(phonePattern);
  return matches ? matches : [];
}

// Function to find all credit card numbers in text
function findCreditCards(text) {
  if (!text) return [];
  let matches = text.match(creditCardPattern);
  return matches ? matches : [];
}

// Function to find all times in text
function findTimes(text) {
  if (!text) return [];
  let matches = text.match(timePattern);
  return matches ? matches : [];
}

// Function to find all HTML tags in text
function findHtmlTags(text) {
  if (!text) return [];
  let matches = text.match(htmlTagPattern);
  return matches ? matches : [];
}

// Function to find all hashtags in text
function findHashtags(text) {
  if (!text) return [];
  let matches = text.match(hashtagPattern);
  return matches ? matches : [];
}

// Function to find all currency amounts in text
function findCurrency(text) {
  if (!text) return [];
  let matches = text.match(currencyPattern);
  return matches ? matches : [];
}

// Main function to extract all data
function extractAllData(text) {
  if (!text) {
    console.log("No text provided!");
    return;
  }

  let emails = findEmails(text);
  let urls = findUrls(text);
  let phones = findPhones(text);
  let creditCards = findCreditCards(text);
  let times = findTimes(text);
  let htmlTags = findHtmlTags(text);
  let hashtags = findHashtags(text);
  let currency = findCurrency(text);

  console.log("EXTRACTION RESULTS:");
  console.log("==================");

  console.log("\nEMAILS:");
  if (emails.length > 0) {
    for (let i = 0; i < emails.length; i++) {
      console.log("- " + emails[i]);
    }
  } else {
    console.log("- None found");
  }

  console.log("\nURLs:");
  if (urls.length > 0) {
    for (let i = 0; i < urls.length; i++) {
      console.log("- " + urls[i]);
    }
  } else {
    console.log("- None found");
  }

  console.log("\nPHONE NUMBERS:");
  if (phones.length > 0) {
    for (let i = 0; i < phones.length; i++) {
      console.log("- " + phones[i]);
    }
  } else {
    console.log("- None found");
  }

  console.log("\nCREDIT CARDS:");
  if (creditCards.length > 0) {
    for (let i = 0; i < creditCards.length; i++) {
      console.log("- " + creditCards[i]);
    }
  } else {
    console.log("- None found");
  }

  console.log("\nTIMES:");
  if (times.length > 0) {
    for (let i = 0; i < times.length; i++) {
      console.log("- " + times[i]);
    }
  } else {
    console.log("- None found");
  }

  console.log("\nHTML TAGS:");
  if (htmlTags.length > 0) {
    for (let i = 0; i < htmlTags.length; i++) {
      console.log("- " + htmlTags[i]);
    }
  } else {
    console.log("- None found");
  }

  console.log("\nHASHTAGS:");
  if (hashtags.length > 0) {
    for (let i = 0; i < hashtags.length; i++) {
      console.log("- " + hashtags[i]);
    }
  } else {
    console.log("- None found");
  }

  console.log("\nCURRENCY:");
  if (currency.length > 0) {
    for (let i = 0; i < currency.length; i++) {
      console.log("- " + currency[i]);
    }
  } else {
    console.log("- None found");
  }

  console.log("\n==================");
  let total =
    emails.length +
    urls.length +
    phones.length +
    creditCards.length +
    times.length +
    htmlTags.length +
    hashtags.length +
    currency.length;
  console.log("TOTAL ITEMS FOUND: " + total);
}

// Test data
const testText = `
Contact me at: john@example.com or mary.smith@company.co.uk

Visit our website: https://www.example.com 
Also check: http://subdomain.example.org/page

Call us: (123) 456-7890 or 555-123-4567 or 123.456.7890

Payment: 1234 5678 9012 3456 or 1234-5678-9012-3456

Meeting times: 2:30 PM and 14:30

HTML: <div class="test"><p>Hello</p></div>

Social: #coding #javascript #webdev

Prices: $19.99 and $1,234.56
`;

// Run the extraction
console.log("Starting data extraction...");
extractAllData(testText);
