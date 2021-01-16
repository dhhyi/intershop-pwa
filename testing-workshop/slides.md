class: center, middle, clean

# .icon[![Intershop](https://upload.wikimedia.org/wikipedia/commons/9/9c/Intershop-Communications-AG.svg) ![PWA](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Progressive_Web_Apps_Logo.svg/2880px-Progressive_Web_Apps_Logo.svg.png)]

# Testing Workshop

---

layout: true

.chapter[Introduction]

---

# Workshop Contents

- Motivation for Testing

- Unit Testing

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

---

class: center, middle, clean

# Motivation

# 🏆

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

# Testing Dimensions

---

# Testing Dimensions

## Utilities

<table class="thirds">
  <tr>
    <th>Framework</th>
    <th>Test Runner</th>
    <th>3rd party lib</th>
  </tr>
</table>

--

## Testing Concepts

<table class="thirds">
  <tr>
    <th>Assertions</th>
    <th>Mocking</th>
    <th>Time</th>
  </tr>
</table>

--

## Artifacts

<table class="thirds">
  <tr>
    <th>Components</th>
    <th>Services</th>
    <th>State Management</th>
  </tr>
</table>

---

# Testing Pyramid

.fitv[
![Test Pyramid](https://github.com/dhhyi/intershop-pwa/raw/workshop/testing/docs/concepts/testing-test-pyramid.jpg)
]

.bottomlink[[PWA Doku - Testing Concept - Different Levels of Testing](https://github.com/dhhyi/intershop-pwa/blob/workshop/testing/docs/concepts/testing.md#different-levels-of-testing)]
