name: unit-testing-part-template
layout: true

.chapter[[Unit Testing](#agenda)]

---

name: break-template
layout: true
class: clean

## .graffiti[Break ~ 5-10 min]

---

layout: true

---

class: center, middle, clean

# .icon[![Intershop](https://upload.wikimedia.org/wikipedia/commons/9/9c/Intershop-Communications-AG.svg) ![PWA](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Progressive_Web_Apps_Logo.svg/2880px-Progressive_Web_Apps_Logo.svg.png)]

# .graffiti[Testing Workshop]

.center[

<iframe width="300" height="300" src="https://www.youtube.com/embed/3_onGF67ecs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
![catJam](https://cdn.betterttv.net/emote/5f25122965fe924464ef0133/3x)
]

---

layout: true

.chapter[Introduction]

---

name: agenda

# Workshop Contents

- Why?

- unit Testing

  1. [Utility Method](#part1)
  2. [HTTP Service](#part2)
  3. [Angular Components](#part3)
  4. [Mocked Store](#part4)
  5. [Real Store](#part5)
  6. [Angular Router](#part6)
  7. [Observables](#part7)
  8. [Angular HttpClient](#part8)

- e2e Testing

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

## 🏆

.notetoself[...about testing]

---

layout: true

.chapter[Motivation]

---

## Why are we doing automated testing?

1. "We have to reach a certain coverage!"

2. "We want to prevent certain bugs from happening again!"

3. "We want to be sure our changes don't break code we don't know!"

4. "We want to automatically validate all possible scenarios!"

5. "We want to maintain our code quality!"

.bottomlink[[Create Poll](https://www.strawpoll.me/#?savedPoll=%7B%22title%22:%22Why%20are%20we%20doing%20automated%20testing?%22,%22dupcheck%22:%221%22,%22multi%22:true,%22captcha%22:false,%22options%22:%5B%22%2522We%2520have%2520to%2520reach%2520a%2520certain%2520coverage!%2522%22,%22%2522We%2520want%2520to%2520prevent%2520certain%2520bugs%2520from%2520happening%2520again!%2522%22,%22%2522We%2520want%2520to%2520be%2520sure%2520our%2520changes%2520don't%2520break%2520code%2520we%2520don't%2520know!%2522%22,%22%2522We%2520want%2520to%2520automatically%2520validate%2520all%2520possible%2520scenarios!%2522%22,%22%2522We%2520want%2520to%2520maintain%2520our%2520code%2520quality!%2522%22%5D%7D)]

---

## Confusion Matrix

.fitv[![Confusion Matrix](https://miro.medium.com/max/2102/1*fxiTNIgOyvAombPJx5KGeA.png)]

---

class: center, middle

## Testing Mantra

.bottomlink[[[Wikipedia] Mantra](https://en.wikipedia.org/wiki/Mantra)]

---

## Testing Mantra

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

## Testing Mantra

<iframe width="800" height="500" src="https://www.youtube.com/embed/wPFt8bJuBD4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

.bottomlink[[Sinnlos Telefon - Herr Weber und das Klopapier](https://www.youtube.com/watch?v=wPFt8bJuBD4&ab_channel=AngularLeipzigMeetup)]

---

## Testing Mantra

Tests are / should be ...

- easy to write

- readable!!

- purposed for intermediate use

- disposable

---

class: center, middle

## Testing Dimensions

---

## Testing Dimensions

### Utilities

<table class="thirds text-grey">
  <tr>
    <td>Framework</td>
    <td>Test Runner</td>
    <td>3rd party lib</td>
  </tr>
</table>

--

### Testing Concepts

<table class="thirds text-grey">
  <tr>
    <td>Assertions</td>
    <td>Mocking</td>
    <td>Time</td>
  </tr>
</table>

--

### Artifacts

<table class="thirds text-grey">
  <tr>
    <td>Components</td>
    <td>Services</td>
    <td>State Management</td>
  </tr>
</table>

---

## Testing Pyramid

.fitv[
![Test Pyramid](https://github.com/dhhyi/intershop-pwa/raw/workshop/testing/docs/concepts/testing-test-pyramid.jpg)
]

.bottomlink[[PWA Doku - Testing Concept - Different Levels of Testing](https://github.com/dhhyi/intershop-pwa/blob/workshop/testing/docs/concepts/testing.md#different-levels-of-testing)]

---

layout: true

---

class: center, middle

## Unit Testing

---

template: break-template

<iframe width="800" height="500" src="https://www.youtube.com/embed/U1DX7eyUfv0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

class: center, middle

## .graffiti[.huge[Unit Testing]]

---

name: part1
template: unit-testing-part-template

# Part #1 → Testing Utility Methods

- jest

  - Test Structure

  - Assertions

  - Snapshots

  - Parameterized Tests

---

layout: true

.chapter[Unit Testing - Part #1]

---

## jest

.bottomlink[[PWA Doku - Deviation from Standard Angular Test Frameworks](https://github.com/dhhyi/intershop-pwa/blob/workshop/testing/docs/concepts/testing.md#deviation-from-standard-angular-test-frameworks)]

- Test Runner

- not standard Angular (Karma)

- runs on virtual DOM

- [Rich CLI](https://jestjs.io/docs/en/cli)

---

layout: true

.chapter[Unit Testing - Part #1]

## General Structure of a jest Test

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

- ignore tests:

  - `xit`, `xdescribe`
  - `it.skip`, `describe.skip`

- focus tests:
  - `fit`, `fdescribe`
  - `it.only`, `describe.only`

---

layout: true

.chapter[Unit Testing - Part #1]

## Importance of Independent Tests

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

## jest Assertions

- [Matchers](https://jestjs.io/docs/en/using-matchers)

  `expect(obj).toEqual(...)`

  `expect(obj).toBeTruthy()`

  `expect(() => fn()).toThrow()`

  `expect(() => fn()).toThrowError(string | Regexp | Error)`

- [jest-extended](https://github.com/jest-community/jest-extended)

  `expect(obj).toBeTrue()`

  `expect(arr).toIncludeAllMembers([members])`

---

## jest Snapshots

- `expect(obj).toMatchSnapshot(...)`

  Snapshot will be written in parallel file.

- `expect(obj).toMatchInlineSnapshot(...)`

  Snapshot inline.

- `expect(() => fn()).toThrowErrorMatchingInlineSnapshot(...)`

---

## jest Snapshots - Custom Serializer

- local serializer

```typescript
expect.addSnapshotSerializer({
  test(x: unknown): boolean;
  print(x: unknown): string;
})
```

- global serializer

  - [category-tree.helper.spec.ts](https://github.com/dhhyi/intershop-pwa/blob/workshop/testing/src/app/core/models/category-tree/category-tree.helper.spec.ts)

  - [shopping-store.spec.ts](https://github.com/dhhyi/intershop-pwa/blob/workshop/testing/src/app/core/store/shopping/shopping-store.spec.ts)

.bottomlink[[Snapshots](https://jestjs.io/docs/en/snapshot-testing)]

---

## Parameterized Tests

`it('description', () => {...});`

`it.each(table)('description', (args) => {...});`

Examples:

- [date.pipe.spec.ts](https://github.com/dhhyi/intershop-pwa/blob/workshop/testing/src/app/core/pipes/date.pipe.spec.ts)

- [attribute.pipe.spec](https://github.com/dhhyi/intershop-pwa/blob/workshop/testing/src/app/core/models/attribute/attribute.pipe.spec.ts)

- [product.helper.spec](https://github.com/dhhyi/intershop-pwa/blob/workshop/testing/src/app/core/models/product/product.helper.spec.ts)

.bottomlink[[Jest - test.each](https://jestjs.io/docs/en/api#testeachtablename-fn-timeout)]

---

class: center, middle

## Coding Time

### Testing Utility Methods

.notetoself[price.helper]

---

template: break-template

<iframe width="800" height="500" src="https://www.youtube.com/embed/TD0MUW8LKqg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

name: part2
template: unit-testing-part-template

# Part #2 → Testing HTTP Services

- Angular

  - TestBed

- ts-mockito

  - mocks

---

layout: true

.chapter[Unit Testing - Part #2]

---

## Angular TestBed

- ignores [application modules](https://github.com/dhhyi/intershop-pwa/blob/workshop/testing/docs/concepts/project-structure.md#modules)

- provides a special test module for the unit under test

- enables / uses dependency injection

- `@Injectable({ providedIn: 'root' })` <br/>
  services are automatically available

- [`TestBed.configureTestingModule`](https://angular.io/api/core/testing/TestBed#configureTestingModule)`({ imports: any[], declarations: any[], providers: any[] })`

- [`TestBed.inject`](https://angular.io/api/core/testing/TestBed#inject)`(Type | InjectionToken)`

.bottomlink[[Angular - Testing Services](https://angular.io/guide/testing-services#angular-testbed)]

---

class: center, middle

## What is "Dependency Injection"?

---

## ts-mockito Mocks

.bottomlink[[GitHub - ts-mockito](https://github.com/NagRock/ts-mockito#main-features)]

- used to only test "units" in unit tests

- provides cleaner interface than jest mocking

--

- use `mock` to create mock

- use `instance` to instantiate mock

  `{ provide: MyService; useFactory: () => instance(mock(MyService)) }`

--

- use `verify` to check calls

- use `capture` to check arguments

---

class: center, middle

## Coding Time

### Testing HTTP Service

.notetoself[cms.service]

---

template: break-template

<iframe width="800" height="500" src="https://www.youtube.com/embed/h_D3VFfhvs4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

name: part3
template: unit-testing-part-template

# Part #3 → Testing Angular Components

- Special Requirements for Intershop PWA

- Angular

  - TestBed

  - Retrieving HTML Elements

- ng-mocks

- `findAllCustomElements` & `findAllDataTestingIDs`

---

layout: true

.chapter[Unit Testing - Part #3]

---

## Requirements for Tests in the PWA

- Tests should be easily adaptable for projects

  - prefer unit over integration tests

  - work with snapshots

  - no css class selectors for Component tests

  - best work with `data-testing-id` and Component Selectors

.bottomlink[[PWA Customization Guide](https://github.com/dhhyi/intershop-pwa/blob/workshop/testing/docs/guides/customizations.md#customization-guide)]

---

## Angular TestBed

- [`TestBed.configureTestingModule`](https://angular.io/api/core/testing/TestBed#configureTestingModule)
  `({ declarations: [Type<T>] })`

- [`TestBed.compileComponents`](https://angular.io/api/core/testing/TestBed#compileComponents)`: Promise<any>`

- [`TestBed.createComponent`](https://angular.io/api/core/testing/TestBed#createComponent)`(Type<T>): `
  [` ComponentFixture<T>`](https://angular.io/api/core/testing/ComponentFixture)

--

- [`ComponentFixture<T>.componentInstance`](https://angular.io/api/core/testing/ComponentFixture#componentInstance)`: T`

- [`ComponentFixture<T>.nativeElement`](https://angular.io/api/core/testing/ComponentFixture#nativeElement)`: any` -- `HTMLElement`

- [`ComponentFixture<T>.detectChanges()`](https://angular.io/api/core/testing/ComponentFixture#detectChanges)`: void`

---

## Retrieving Elements

- [`Element.querySelector`](https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector)

- [`Element.querySelectorAll`](https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll)

--

- [`ComponentFixture<T>.debugElement`](https://angular.io/api/core/testing/ComponentFixture#debugElement)`: `[`DebugElement`](https://angular.io/api/core/DebugElement)

- `fixture.debugElement.queryAll(By.css('selector'));`

---

## ng-mocks

.bottomlink[[GitHub - ng-mocks](https://ng-mocks.sudo.eu/)]

- [`MockComponent`](https://ng-mocks.sudo.eu/api/MockComponent)

- [`MockDirective`](https://ng-mocks.sudo.eu/api/MockDirective)

- [`MockPipe`](https://ng-mocks.sudo.eu/api/MockPipe)

---

## Custom ISH PWA Helpers

- `findAllCustomElements(el: HTMLElement): string[]`

- `findAllDataTestingIDs(fixture: ComponentFixture<unknown>): string[]`

.bottomlink[[PWA - `src/app/core/utils/dev/html-query-utils.ts`](https://github.com/dhhyi/intershop-pwa/blob/workshop/testing/src/app/core/utils/dev/html-query-utils.ts)]

---

class: center, middle

## Coding Time

### Testing Angular Components

.notetoself[recently-viewed.component]

---

template: break-template

<iframe width="800" height="500" src="https://www.youtube.com/embed/CiXNIjGX1hY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

name: part4
template: unit-testing-part-template

# Part #4 → Testing with mocked Store

- NgRx

  - MockStore

- ts-mockito

  - Spies

---

layout: true

.chapter[Unit Testing - Part #4]

---

## NgRx MockStore

.bottomlink[[NgRX - Testing](https://ngrx.io/guide/store/testing#using-a-mock-store)]

- relatively new feature

- use `provideMockStore` as TestBed provider

- inject `MockStore`

- use `MockStore.overrideSelector`

---

## ts-mockito Spies

.bottomlink[[GitHub - ts-mockito](https://github.com/NagRock/ts-mockito#main-features)]

- use `spy` to create spy

- use `verify` to check calls

- use `capture` to check arguments

---

class: center, middle

## Coding Time

### Testing with mocked Store

.notetoself[server-config.effects] <br/>
.notetoself[account.facade]

---

template: break-template

<iframe width="800" height="500" src="https://www.youtube.com/embed/eNV9gv0NmzU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

name: part5
template: unit-testing-part-template

# Part #5 → Testing with real Store

- `XStoreModule.forTesting`

- `StoreWithSnapshots`

- `provideStoreSnapshots()`

---

layout: true

.chapter[Unit Testing - Part #5]

---

## Custom Implementation

- [`CoreStoreModule.forTesting`](https://github.com/dhhyi/intershop-pwa/blob/workshop/testing/src/app/core/store/core/core-store.module.ts#L60)

- [`FeatureStoreModule.forTesting`](https://github.com/dhhyi/intershop-pwa/blob/workshop/testing/src/app/core/store/shopping/shopping-store.module.ts#L50)

- inject `StoreWithSnapshots` & provide `provideStoreSnapshots()` from [`ngrx-testing.ts`](https://github.com/dhhyi/intershop-pwa/blob/workshop/testing/src/app/core/utils/dev/ngrx-testing.ts)

---

class: center, middle

## Coding Time

### Testing with real Store

.notetoself[shopping.facade] <br/>
.notetoself[products.selectors.spec] <br/>
.notetoself[products.effects.spec] <br/>
.notetoself[shopping-store.spec]

---

template: break-template

<iframe width="800" height="500" src="https://www.youtube.com/embed/gLCduDJVksc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

name: part6
template: unit-testing-part-template

# Part #6 → Testing with Angular Router

- Angular

  - `RouterTestingModule.withRoutes`

  - `fakeAsync` & `tick`

- Custom

  - Testing with Router Store

---

layout: true

.chapter[Unit Testing - Part #6]

---

## RouterTestingModule

- imported standalone for providing:

  - [`Router`](https://angular.io/api/router/Router)
  - [`RouterLink`](https://angular.io/api/router/RouterLink) directive

- [`.withRoutes(Route[])`](https://angular.io/api/router/testing/RouterTestingModule#withRoutes)

  - for 'actual' routing in tests
  - Component required

- [`Location.path()`](https://angular.io/api/common/Location#path)

.bottomlink[[Angular - RouterTestingModule](https://angular.io/api/router/testing/RouterTestingModule)]

---

## `fakeAsync` + `tick`

- control time: [fakeAsync](https://angular.io/api/core/testing/fakeAsync)

- ??? [Microtask and Macrotask: A Hands-on Approach](https://blog.bitsrc.io/microtask-and-macrotask-a-hands-on-approach-5d77050e2168)

---

## Custom Router Store serializer

- set up like [@ngrx/router-store](https://ngrx.io/guide/router-store)

- Custom Serializer in [PWA Code](https://github.com/dhhyi/intershop-pwa/tree/develop/src/app/core/store/core/router)

---

class: center, middle

## Coding Time

### Testing with Router

.notetoself[quoting.effects] <br/>

---

template: break-template

<iframe width="800" height="500" src="https://www.youtube.com/embed/eINgmy4dUOA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

name: part7
template: unit-testing-part-template

# Part #7 → Testing Observables

- Marbles

- jest

  - `done`

---

layout: true

.chapter[Unit Testing - Part #7]

---

## RxJS Marbles

- representation of [`marble model`](https://rxmarbles.com/)

- [`toBeObservable`](https://github.com/just-jeb/jest-marbles#tobeobservable)

- [WayBack Machine](https://web.archive.org/web/20180725035440/https://github.com/ReactiveX/rxjs/blob/master/doc/marble-testing.md)

- [Syntax](https://github.com/staltz/RxJSNext/blob/master/doc/writing-marble-tests.md)

---

## jest Time

- [jest `done`](https://jestjs.io/docs/en/asynchronous)

- `jest.useFakeTimers();` --> [jest - Timer Mocks](https://jestjs.io/docs/en/timer-mocks)

  - doesn't work with all other concepts
  - currently unused (as far as I see)

- `setTimeout` uses real time
  - Test timeout of 5sec

---

class: center, middle

## Coding Time

### Testing Observables

.notetoself[TODO] <br/>

---

template: break-template

<iframe width="800" height="500" src="https://www.youtube.com/embed/PkQ5rEJaTmk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

layout: true

.chapter[Unit Testing - Part #8]

---

name: part8
template: unit-testing-part-template

# Part #8 → Testing Angular HttpClient

- `HttpClientTestingModule`

---

## HttpClientTestingModule

- [`HttpClientTestingModule`](https://angular.io/guide/http#testing-http-requests)

- all ICM REST API services use `ApiService`

- 3rd party service usage

- [`HttpTestingController`](https://angular.io/api/common/http/testing/HttpTestingController):
  - `verify`
  - `expectOne`
  - `expectOne.flush`

---

class: center, middle

## Coding Time

### Testing Angular HttpClient

.notetoself[tacton-self-service-api.service.ts] <br/>
