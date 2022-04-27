export default async function (props, cbSuccess) {
  let { url, options } = props;

  await fetch(url, options)
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => cbSuccess(json))
    .catch((err) => {
      console.error(err);
    });
}
