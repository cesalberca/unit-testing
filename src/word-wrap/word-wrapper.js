export class WordWrapper {
  wrap(text, maxColumnLength) {
    if (text.length <= maxColumnLength) {
      return text
    }

    const wrappedText = text.substring(0, maxColumnLength) + '\n'
    const remainingText = text.substring(maxColumnLength)

    return wrappedText + this.wrap(remainingText, maxColumnLength)
  }
}
