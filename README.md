## Dynamic Content Delivery

A static website that returns appropriate content to the website user based on the provided ID.

## Which files am I allowed to edit?
- [template section of index.html](index.html)
- all files in `data` directory:
    - [constants.js](data/constants.js)
    - [custom-style.css](data/custom-style.css)

## How to use
Firstly, create template for your webpage. Go to [index.html](index.html) and edit code **only between these lines**:
```html
<!-- TEMPLATE BEGINS -->
 
<!-- TEMPLATE ENDS -->
```
This is the **template section** of the HTML file.

Example:
```html
<!-- TEMPLATE BEGINS -->
<p id="name">Hi!</p>           
<!-- TEMPLATE ENDS -->
```

Then, prepare your API:
1. Clone [this](https://github.com/sadorowo/dynamic-content-delivery-api) repository.
2. Edit [data/data-source.json] file:
    - provide your data in `DATA` constant like this:
    ```javascript
    const DATA = {
        "id1": {
            "#name": {
                "textContent": "John",
                "style": {
                    "color": "red"
                }
            }
        },
        "id2": {
            "#name": {
                "textContent": "Anna",
                "style": {
                    "color": "blue"
                }
            }
        },
        ...
    }
    ```
    - edit your [data/config.json]:
        1. provide your API host in `API_HOST` constant.
        2. provide your API port in `PORT` constant.

    > Warning!
    > Do not change the structure of the `DATA` object. It must be an object with keys being IDs and values, which are objects with CSS selectors as keys and objects with DOM properties as values.
    > Make sure that your API is running on the same port as the one provided in `PORT` constant.

3. Deploy your API:
    1. Install Node.js and npm.
    2. Run `npm install` in the root directory of the API.
    3. Run `npm start` in the root directory of the API.

## Custom styles
This website supports custom CSS. Just edit [this](data/custom-style.css) file.
If provided style doesn't work, try adding `!important` to the end of CSS rule.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Authors
- [**@sadorowo**](https://github.com/sadorowo) - original author