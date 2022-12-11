const url = 'https://gik2f8-labs.herokuapp.com/books';

async function getAll() {
  const result = await fetch(url)
    .then((result) => result.json())
    .catch((e) => e);
  return result;
}





async function fetchInfo(id) {
  try {

    const info = await fetch(`${url}/${id}`);
    return await info.json();
  } catch (e) {

    console.error(e);
    return e;
  }
}