//https://leetcode.com/problems/unique-email-addresses/

function numUniqueEmails(emails) {
  return new Set(emails.map(x => filterEmail(x))).size;
}

function filterEmail(email) {
  let [local, domain] = email.split('@');
  let filteredLocal = '';
  for (let char of local) {
    if (char === '+') break;
    if (char !== '.') filteredLocal += char;
  }
  return `${filteredLocal}@${domain}`;
}
