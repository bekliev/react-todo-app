import { baseSize } from './config';

export const getSize = size => `${size / baseSize}rem`;

export const downloadObjectAsJson = (exportObj = {}, exportName = 'data') => {
  var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj, null, 2));
  var elAnchor = document.createElement('a');
  elAnchor.setAttribute("href", dataStr);
  elAnchor.setAttribute("download", exportName + ".json");
  document.body.appendChild(elAnchor); // required for firefox
  elAnchor.click();
  elAnchor.remove();
}