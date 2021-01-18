class: center, middle, clean

# .icon[![Intershop](https://upload.wikimedia.org/wikipedia/commons/9/9c/Intershop-Communications-AG.svg) ![PWA](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Progressive_Web_Apps_Logo.svg/2880px-Progressive_Web_Apps_Logo.svg.png)]

# Testing Workshop

<br/>

.center[

<iframe width="300" height="300" src="https://www.youtube.com/embed/3_onGF67ecs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
![catJam](https://cdn.betterttv.net/emote/5f25122965fe924464ef0133/3x)
]

---

layout: true

.chapter[Introduction]

---

# Workshop Contents

- Why?

- unit Testing

- e2e Testing

.bottomlink[[[Wikipedia] Workshop](https://de.wikipedia.org/wiki/Workshop)]

---

# Workshop Etiquette

- Interactive!

- 💭 vs. 💬

--

- no strict plan / time management ⏳

- Pause when needed 🤯🤔🤬

--

- Why are we not recording? 📹

- Goal: Knowledge 💡 + Documentation 📜

--

- Entertainment! 🍿

---

layout: true

.chapter[Introduction]

# /me

---

## Danilo Hoffmann

- .icon[![Twitter](https://upload.wikimedia.org/wikipedia/de/9/9f/Twitter_bird_logo_2012.svg)
  [@dhhyi](https://twitter.com/dhhyi)]

- .icon[![GitHub](https://avatars3.githubusercontent.com/in/15368?s=256&v=2)
  [dhhyi](https://github.com/dhhyi)]

- strong opinions

- not always right

- open source

.bottomlink[
[#angular](https://twitter.com/search?q=%23angular)
[#beer](https://twitter.com/search?q=%23beer)
[#happyhardcore](https://twitter.com/search?q=%23happyhardcore)
]

---

<iframe width="800" height="500" src="https://angular.schule/blog/2020-01-ngrx-data-views" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>

.bottomlink[[NgRx Data Views: How to de-normalize entities for large enterprise applications](https://angular.schule/blog/2020-01-ngrx-data-views)]

---

<iframe width="800" height="500" src="https://www.youtube.com/embed/I14r3joLu9A" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

.bottomlink[[ngLeipzig #36: Facades – The Best Layer of your Angular Application](https://www.youtube.com/watch?v=I14r3joLu9A&ab_channel=AngularLeipzigMeetup)]

---

layout: true

---

class: center, middle, clean

# Motivation

# 🏆

.notetoself[...about testing]

---

layout: true

.chapter[Motivation]

---

# Why are we doing automated testing?

1. "We have to reach a certain coverage!"

2. "We want to prevent certain bugs from happening again!"

3. "We want to be sure our changes don't break code we don't know!"

4. "We want to automatically validate all possible scenarios!"

5. "We want to maintain our code quality!"

.bottomlink[[Create Poll](https://www.strawpoll.me/#?savedPoll=%7B%22title%22:%22Why%20are%20we%20doing%20automated%20testing?%22,%22dupcheck%22:%221%22,%22multi%22:true,%22captcha%22:false,%22options%22:%5B%22%2522We%2520have%2520to%2520reach%2520a%2520certain%2520coverage!%2522%22,%22%2522We%2520want%2520to%2520prevent%2520certain%2520bugs%2520from%2520happening%2520again!%2522%22,%22%2522We%2520want%2520to%2520be%2520sure%2520our%2520changes%2520don't%2520break%2520code%2520we%2520don't%2520know!%2522%22,%22%2522We%2520want%2520to%2520automatically%2520validate%2520all%2520possible%2520scenarios!%2522%22,%22%2522We%2520want%2520to%2520maintain%2520our%2520code%2520quality!%2522%22%5D%7D)]

---

class: center, middle

# Testing Mantra

.bottomlink[[[Wikipedia] Mantra](https://en.wikipedia.org/wiki/Mantra)]

---

# Testing Mantra

> Tests are like toilet paper

--

- "It's good to have before you need it!"

--

- "There's no need for hoarding!"

--

- "Throw away if unreliable!"

--

- "Throw away after use!"

---

# Testing Mantra

<iframe width="800" height="500" src="https://www.youtube.com/embed/wPFt8bJuBD4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

.bottomlink[[Sinnlos Telefon - Herr Weber und das Klopapier](https://www.youtube.com/watch?v=wPFt8bJuBD4&ab_channel=AngularLeipzigMeetup)]

---

# Testing Mantra

Tests are / should be ...

- easy to write

- readable!!

- purposed for intermediate use

- disposable

---

class: center, middle

# Testing Dimensions

---

# Testing Dimensions

## Utilities

<table class="thirds text-grey">
  <tr>
    <td>Framework</td>
    <td>Test Runner</td>
    <td>3rd party lib</td>
  </tr>
</table>

--

## Testing Concepts

<table class="thirds text-grey">
  <tr>
    <td>Assertions</td>
    <td>Mocking</td>
    <td>Time</td>
  </tr>
</table>

--

## Artifacts

<table class="thirds text-grey">
  <tr>
    <td>Components</td>
    <td>Services</td>
    <td>State Management</td>
  </tr>
</table>

---

# Testing Pyramid

.fitv[
![Test Pyramid](https://github.com/dhhyi/intershop-pwa/raw/workshop/testing/docs/concepts/testing-test-pyramid.jpg)
]

.bottomlink[[PWA Doku - Testing Concept - Different Levels of Testing](https://github.com/dhhyi/intershop-pwa/blob/workshop/testing/docs/concepts/testing.md#different-levels-of-testing)]

---

layout: true

---

class: center, middle

# Unit Testing

---

layout: true

.chapter[Unit Testing]

---

# Part #1

- jest

  - Test Structure

  - Assertions

  - Snapshots

  - Parameterized Tests

<br/>

→ Testing Utility Method

---

layout: true

.chapter[Unit Testing - Part #1]

---

# jest

.bottomlink[[PWA Doku - Deviation from Standard Angular Test Frameworks](https://github.com/dhhyi/intershop-pwa/blob/workshop/testing/docs/concepts/testing.md#deviation-from-standard-angular-test-frameworks)]

- Test Runner

- not standard Angular (Karma)

- runs on virtual DOM

- [Rich CLI](https://jestjs.io/docs/en/cli)

---

layout: true

.chapter[Unit Testing - Part #1]

# General Structure of a jest Test

.bottomlink[[Jest - Test Setup](https://jestjs.io/docs/en/setup-teardown)]

---

```typescript
describe('Test Artifact', () => {
  ...
});
```

---

```typescript
describe('Test Artifact', () => {
  beforeEach(() => {...});

  it('should ...', () => {...});
  ...

  afterEach(() => {...});
});
```

---

```typescript
describe('Test Artifact', () => {
  beforeEach(() => {...});

  it('should ...', () => {...});
  ...

  describe('method/scenario', () => {
    beforeEach(() => {...});

    it('should ...', () => {...});
    ...
  });
});
```

---

```typescript
describe('Test Artifact', () => {
  beforeEach(() => {...});

  it('should ...', () => {...});
  ...
});

describe('Test Artifact', () => {
  beforeEach(() => {...});

  it('should ...', () => {...});
  ...
});
```

---

layout: true

.chapter[Unit Testing - Part #1]

# Importance of Independent Tests

.bottomlink[[PWA - Guide Jest - Be Careful With Variable Initialization](https://github.com/dhhyi/intershop-pwa/blob/workshop/testing/docs/guides/testing-jest.md#be-careful-with-variable-initialization)]

---

```typescript
describe('...', () => {
  let a = true; // initialized just once
  const b = true; // immutable value
  let c; // re-initialized in beforeEach

  beforeEach(() => {
    c = true;
  });

  it('test1', () => {
    a = false;
    // b = false; not possible
    c = false;
  });

  it('test2', () => {
    // a is still false
    // c is back to true
  });
});
```

---

```typescript
describe('...', () => {
  let a: any;
  const b = { value: true };

  beforeEach(() => {
    a = { value: true };
  });

  it('test1', () => {
    a.value = false;
    b.value = false;
  });

  it('test2', () => {
    // a.value is back to true
    // b.value is still false
  });
});
```

---

layout: true

.chapter[Unit Testing - Part #1]

---

# jest Assertions

- [Matchers](https://jestjs.io/docs/en/using-matchers)

  `expect(obj).toEqual(...)`

  `expect(obj).toBeTruthy()`

  `expect(() => fn()).toThrow()`

  `expect(() => fn()).toThrowError(string | Regexp | Error)`

- [jest-extended](https://github.com/jest-community/jest-extended)

  `expect(obj).toBeTrue()`

  `expect(arr).toIncludeAllMembers([members])`

---

# jest Snapshots

- `expect(obj).toMatchSnapshot(...)`

  Snapshot will be written in parallel file.

- `expect(obj).toMatchInlineSnapshot(...)`

  Snapshot inline.

- `expect(() => fn()).toThrowErrorMatchingInlineSnapshot(...)`

---

# jest Snapshots - Custom Serializer

```typescript
expect.addSnapshotSerializer({
  test(x: unknown): boolean;
  print(x: unknown): string;
})
```

.bottomlink[[Snapshots](https://jestjs.io/docs/en/snapshot-testing)]

---

# Parameterized Tests

`it('description', () => {...});`

`it.each(table)('description', (args) => {...});`

Examples:

- [date.pipe.spec.ts](https://github.com/dhhyi/intershop-pwa/blob/workshop/testing/src/app/core/pipes/date.pipe.spec.ts)

- [attribute.pipe.spec](https://github.com/dhhyi/intershop-pwa/blob/workshop/testing/src/app/core/models/attribute/attribute.pipe.spec.ts)

- [product.helper.spec](https://github.com/dhhyi/intershop-pwa/blob/workshop/testing/src/app/core/models/product/product.helper.spec.ts)

.bottomlink[[Jest - test.each](https://jestjs.io/docs/en/api#testeachtablename-fn-timeout)]

---

class: center, middle

# Coding Time

## Testing Utility Methods

.notetoself[price.helper]

---

# Requirements for Tests in the PWA

- Tests should be easily adaptable for projects

  - prefer unit over integration tests

  - work with snapshots

  - no css class selectors for Component tests
