# News Now development strategy

---

Here you can find the development strategy of our website.

---

## Setup

- Create a [repository](https://github.com/HYF-Class21/final-project-group1)
- Create a [project board](https://github.com/orgs/HYF-Class21/projects/36)
- Clone repo
- Install React
- Create and fill the planning folder
- Update the readme file

---

## Must-Haves ( v 1.0 )

# Home

## 1. Title-Navbar

> As a user I can easily move between different pages of the website.

- [ ] A navigation bar is present to allow users easy access to different sections and features of the website.
- [ ] There is a title for the website that reflects its purpose and content.
- [ ] This user story is developed on branch `navbar-v1`.
- [ ] Create a navbar component
- [ ] Add the logo/title to the left of the header

### - HTML (TITLE) -

- [ ] add `div` element with class name `navbar`
- [ ] inside the `div` add `h1` with `a` tag inside for the title of "News Count"
- [ ] add class name `logo` to `h1`

### - CSS (TITLE) -

- [ ] add `background-color`
- [ ] add `color`
- [ ] add `height`

### - HTML (NAVBAR)

- [ ] add `nav` element under `h1`
- [ ] add `ul` element with 3 `li` elements for Home, Features, and Docs nested
      inside `a` tags
- [ ] add links to each `a` tag:
  - `<a href="index.html">Home</a>`
  - `<a href="features.html">Features</a>`
  - `<a href="docs.html">Docs</a>`

### - CSS (NAVBAR)-

- [ ] set justify-content to `space-between` in class `navbar`
- [ ] set display to `flex` for `ul` element
- [ ] add `color` `padding` and `margin` to `a` elements
- [ ] add `hover` styling to `a` elements

## 2.1 Login Navbar

> As a user I can log in to my account.

### - HTML -

- [ ] add a login button in the header/navbar
- [ ] add an `a` tag for 'Login' in the navbar

### - CSS -

- [ ] set justify-content to `space-between` in class `navbar`
- [ ] set display to `flex` for `ul` element
- [ ] add `color` `padding` and `margin` to `a` elements
- [ ] add `hover` styling to `a` elements

## 2.2 Login Form

- [ ] There is a login form in the header.
- [ ] There is a user account page to which the user will be redirected after sending the form with correct data.

### - HTML

- [ ] add a `form` element
- [ ] add an `input` field with type="text" for the username
- [ ] add an `input` field with type="password" for the password
- [ ] add a `button` with type="submit" to submit the form

### - CSS -

- [ ] set justify-content to `space-between` in class `navbar`
- [ ] set display to `flex` for `ul` element
- [ ] add `color` `padding` and `margin` to `a` elements
- [ ] add `hover` styling to `a` elements

## 3.1 Register Navbar

> As a user I can create accounts by filling out a registration form.

- [ ] There is a register form in the header of the website.
- [ ] A popup shows up upon sending the form.

### - HTML

- [ ] add a login button in the header/navbar
- [ ] add an `a` tag for 'Login' in the navbar

### - CSS -

- [ ] set justify-content to `space-between` in class `navbar`
- [ ] set display to `flex` for `ul` element
- [ ] add `color` `padding` and `margin` to `a` elements
- [ ] add `hover` styling to `a` elements

## 3.2 Register Form

### - HTML

- [ ] add a `form` element
- [ ] add an `input` field with type="text" for the username
- [ ] add an `input` field with type="password" for the password
- [ ] add a `button` with type="submit" to submit the form

### - CSS -

- [ ] set justify-content to `space-between` in class `navbar`
- [ ] set display to `flex` for `ul` element
- [ ] add `color` `padding` and `margin` to `a` elements
- [ ] add `hover` styling to `a` elements

## 4.1 Payment navbar

> A payment form is available for users to make payments securely.

### - HTML

- [ ] add a payment plans button in the header/navbar
- [ ] add an `a` tag for 'Login' in the navbar

### - CSS -

- [ ] set justify-content to `space-between` in class `navbar`
- [ ] set display to `flex` for `ul` element
- [ ] add `color` `padding` and `margin` to `a` elements
- [ ] add `hover` styling to `a` elements

## 4.2 Payment form

### - HTML -

- [ ] add a payment plans button in the header/navbar
- [ ] add an `a` tag for 'Payment Plans' in the navbar

### - CSS -

- [ ] set justify-content to `space-between` in class `navbar`
- [ ] add `color` `padding` and `margin` to `a` elements
- [ ] add `hover` styling to `a` elements

## 5. Payment plans

> As a user I can choose from different payment plans, such as monthly or yearly subscriptions.

- [ ] There is a page explaining different payment plans.

### - HTML -

- [ ] Add an HTML `div` element to serve as the container for the payment plan component.
- [ ] Inside the `div`, add an `h2` element to display the duration of the payment plan (e.g., "1 Year," "Monthly," etc.).
- [ ] Add an `h1` element to display the price or cost of the payment plan.
- [ ] Include a `p` element to provide a description or details about the payment plan.
- [ ] Add a `button` element with the text "Pay" to allow users to initiate the payment.

### - CSS -

- [ ] Center the elements vetrically.

## 6. Home page

> As a user I can see the most poopular articles in one place.

- [ ] The main component of the website displays article cards.
- [ ] Each of the article cards contains an image and a title of the article.

### - HTML -

- [ ] Add an HTML `div` element to serve as the container for the news article component.
- [ ] Inside the `div`, add an `img` element to display the image associated with the news article.
- [ ] Include an `h2` or `h3` element to display the title of the news article.
- [ ] Add a `p` element to provide a description or summary of the news article.

### - CSS -

- [ ] Center the elements vertically.

## 7. Artcle component

> As a user I can view full articles on a dedicated page with all the content and details.

- [ ] There is a page which displays the article from the api.
- [ ] Each of the article cards contains a link to a page with the full article.

### - HTML -

- [ ] Add an HTML `div` element to serve as the container for the news article component.
- [ ] Inside the `div`, add an `img` element to display the image associated with the news article. Use the src attribute to specify the image - - - [ ] source and the alt attribute for alternative text.
- [ ] Include an `h2` or `h3` element to display the title of the news article.
- [ ] Add a `p` element to provide the text or content of the news article.

### - CSS -

- [ ] Stretch the image across the screen.
- [ ] Put the title of the news article at the bottom of the image.
- [ ] Style the text so that it looks organized.

## 8. Filter navbar

> Filter articles

- [ ] Users can filter articles based on categories, tags, or other criteria for content discovery.
- [ ] Make a navbar underneath the main one consisting of a list of the available categories of news. 

### - HTML -

- [ ] Add an HTML `nav` element to create the navbar.
- [ ] Add the necessary names of categories using the `ul` `li` elements. 

### - CSS -

- [ ] Style the navbar according to the website's color code.

## 9. Sort by button

> Sort articles

- [ ] Users have the ability to sort articles by criteria such as date, popularity, or relevance.
- [ ] Make a dropdown list of the available options of how the user can sort the articles by.

### - HTML -

- [ ] Add an HTML `button` element to create the Sort By button.
- [ ] Use the button's type attribute and set it to "button" to specify that it's a button for user interaction, not a submit button for a form.
- [ ] Provide a meaningful label or text for the button that indicates its filtering function (e.g., "Sort By").
- [ ] Optionally, use the class or id attributes to give the button a specific identifier for styling or scripting purposes.

### - CSS -

- [ ] Style the button according to the website's color code.

---

## Should haves (v 1.0 )

---

## Could haves ( v 1.0 )

---