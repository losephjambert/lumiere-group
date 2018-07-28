export const truncate = (v) => {

  if (!Math.trunc) {
    Math.trunc = function(v) {
      v = +v;
      return (v - v % 1)   ||   (!isFinite(v) || v === 0 ? v : v < 0 ? -0 : 0);
    };
  } else{
    return Math.trunc(v)
  }

}