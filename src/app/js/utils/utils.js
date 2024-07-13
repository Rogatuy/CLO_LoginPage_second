export const getErrors = (value, rules) => {
  return rules.reduce((acc, {rule, text}) => {
    if (rule(value)) {
      acc.push(text)
    }

    return acc
  }, [])
}
