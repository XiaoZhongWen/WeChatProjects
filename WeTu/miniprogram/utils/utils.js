function getImageUrls(html = '') {
  return (html.match(/<img.*?(?:>|\/>)/gi) || []).map((item, i) => item.match(/src=[\'\"]?([^\'\"]*)[\'\"]?/i)?.[1]).filter(item => item);
}

function getTitle(html = '') {
  const items = (html.match(/<meta.*?(?:>|\/>)/gi) || []).map((item, i) => item.match(/:title/)).filter(item => item)
  if (items.length > 0) {
    const item = items[0]
    const title = item.input.match(/content=[\'\"]?([^\'\"]*)[\'\"]?/i)?.[1]
    return title
  } else {
    return ""
  }
}

module.exports = {
  getImageUrls: getImageUrls,
  getTitle: getTitle
}