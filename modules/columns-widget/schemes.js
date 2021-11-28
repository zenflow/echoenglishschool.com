const schemes = {
  "1-1": [6, 6],
  "1-2": [4, 8],
  "2-1": [8, 4],
  "1-3": [3, 9],
  "3-1": [9, 3],
  "1-1-1": [4, 4, 4],
  "1-2-1": [3, 6, 3],
};
const schemesMinColumns = 2;
const schemesMaxColumns = 3; // if you update this, update for loop in widget.html
module.exports = {
  schemes,
  schemesMinColumns,
  schemesMaxColumns,
};
