const formatDate = (inputDateString) => {
  const date = new Date(inputDateString);
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

export default formatDate;