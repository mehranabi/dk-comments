### What?

Tiny project written in TypeScript to fetch comments of a product from Digikala. By requesting the data from their rating endpoint. It then prases and saves it into a CSV file.

### How to?

##### Set Parameters
Change `main.ts` file and replace the product ID with the one that you are targeting.
There are some other parameters you can change such as the maximum number of comments that you need.
Right now it saves Author Name, Body and Emotion of the comment, you can change the code to get more details.

##### Build and Start
Install dependencies: `yarn install`
Build the project with `yarn build` command.
Start with `yarn start` command.

##### Output
There will be a file called `comments.csv` in `.out` directory with the comments.
The comments will also be logged in JSON format in the console.

### Author

S. Mehran Abghari
mehran.ab80@gmail.com

**Just for fun!**
