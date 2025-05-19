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