export interface LettersInterface {
  q: string;
  w: string;
  e: string;
  r: string;
  t: string;
  y: string;
  u: string;
  i: string;
  o: string;
  p: string;

  a: string;
  s: string;
  d: string;
  f: string;
  g: string;
  h: string;
  j: string;
  k: string;
  l: string;

  z: string;
  x: string;
  c: string;
  v: string;
  m: string;
  b: string;
  n: string;
}

export interface keyboardFirstRow {
  q: string;
  w: string;
  e: string;
  r: string;
  t: string;
  y: string;
  u: string;
  i: string;
  o: string;
  p: string;
}

export interface keyboardSecondRow {
  a: string;
  s: string;
  d: string;
  f: string;
  g: string;
  h: string;
  j: string;
  k: string;
  l: string;
}

export interface keyboardThirdRow {
  z: string;
  x: string;
  c: string;
  v: string;
  m: string;
  b: string;
  n: string;
}

export type LettersObjectKeyType = keyof typeof Letters;

const Letters: LettersInterface = {
  q: "",
  w: "",
  e: "",
  t: "",
  r: "",
  y: "",
  u: "",
  i: "",
  o: "",
  p: "",
  a: "",
  d: "",
  s: "",
  f: "",
  h: "",
  g: "",
  j: "",
  k: "",
  l: "",
  z: "",
  x: "",
  c: "",
  v: "",
  m: "",
  b: "",
  n: "",
};

export default Letters;
