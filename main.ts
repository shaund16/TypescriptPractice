//compiling and variables

const a: number = 5.321;

interface MyObj {
  x: number;
  y: number;
  z?: number;
}

const obj: MyObj = {
  x: 5.32,
  y: 7,
};

const obj2: MyObj = {
  x: 123,
  y: 213,
};

let isDog = true;

obj.z = 123;

//functions
type AddFunc = (x: number, y: number) => number;

const add = (x: number, y: number) => x + y;

const add2 = ({ a, b }: { a: number; b: number }) => a + b;

//unions

let maybeNum: number | string | boolean | AddFunc = 5;
maybeNum = 'hello!';
maybeNum = add;

interface Dog {
  bark: string;
}

interface Cat {
  purr: string;
}

type DogCat = (Dog & Cat) | number | string;

let dogCat: DogCat = {
  bark: 'bark!',
  purr: 'purr!',
};

dogCat = 5;

if (typeof dogCat === 'string') {
  console.log('you are a string');
}
//casting

add(dogCat as any, dogCat as any);

//any

const doesAnything = (x: any) => {
  console.log(x);
};

doesAnything(() => 5);
