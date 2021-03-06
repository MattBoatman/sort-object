const orderMe = {
  b: 'b',
     c: 'c',
  a: 'a',
  d: 'd',
}

const orderMeToo = {b: 'b',c: 'c',a: 'a',d: 'd' ,}


export default function sortObject(text: string) {
  const startBracketPosition = text.indexOf('{');
  const endBracketPosition = text.lastIndexOf('}');
  const objectArray = _stringToArray(_getSubString(startBracketPosition + 1, endBracketPosition - 2, text));
  const sortedArray = _sort(objectArray);
  const sortedString = _join(sortedArray);
  return _insertBack(startBracketPosition + 1, endBracketPosition - 2, sortedString, text);
}

const _getSubString = (start: number, end: number, text: string) => text.substring(start, end);

const _insertBack = (start: number, end: number, sortedText: string, originalText: string) => `${originalText.substring(0, start)}${sortedText}${originalText.substring(end)}`

const _join = (arr: Array<string>) => arr.join(',');

const _stringToArray = (text: string) => text.split(',');

const _sort = (objectArray: Array<string>) => {
  return objectArray.sort((a: string, b: string) => {
    const stringA = _trimNewLine(a.toUpperCase());
    const stringB = _trimNewLine(b.toUpperCase());
    if (stringA < stringB) {
      return -1;
    }
    if (stringA > stringB) {
      return 1;
    }
    return 0;
  });
};

const _trimNewLine = (text: string) => {
  const newLineStart = text.indexOf("\n");
  if (text.indexOf("\n") === -1) {
    return text.trim();
  }
  return _getSubString(newLineStart + 1, text.length, text).trim();
};