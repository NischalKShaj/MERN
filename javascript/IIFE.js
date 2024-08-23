// file to show the implementation of iife

(function (name) {
  console.log("name", name);
})("hai");

(function (age) {
  console.log("age", age);
})(22);

!(function (designation) {
  console.log("designation", designation);
})("developer");

+(function (exp) {
  console.log("experience", exp);
})("1 year");
