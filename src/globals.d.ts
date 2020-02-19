import '@testing-library/jest-dom/extend-expect';
/* Ensure the additional Jest matchers are available for all the test 
   Import matchers
*/

// Allow import of any files
declare module '*.png' {
  const value: any;
  export = value;
}

declare module '*.css' {
  const value: any;
  export = value;
}
