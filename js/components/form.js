const d = document;
export default function form(formTemplate) {
  let $template = d.getElementById(formTemplate);
  let $clone = $template.content.cloneNode(true);
  return $clone;
}
