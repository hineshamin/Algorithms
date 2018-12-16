// https://www.codewars.com/kata/514a024011ea4fb54200004b
// This algorithm extracts the domain name from a URL

function domainName(url) {
  //your code here
  var urlsplit = url.split('.');
  if (urlsplit[0].slice(urlsplit[0].length - 3) === 'www') {
    return urlsplit[1];
  } else {
    return urlsplit[0].slice(urlsplit[0].lastIndexOf('/') + 1);
  }
}
