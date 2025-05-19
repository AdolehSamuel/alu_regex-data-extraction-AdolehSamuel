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