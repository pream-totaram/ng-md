#My First Angular App



## Getting Started
 **I am documenting my processes and shortcomings in developing my first Angular app incase it can help anyone else.**
 
I have NodeJS installed with [node version manager](https://github.com/nvm-sh/nvm). In my cursory search through Angular, the first thing I came across was the [Angular CLI](https://angular.io/cli), so I start there. The documentation says to install it globally, but I generally don't like to do that. Instead, I prefer to initialize a project `npm init` and install everything within the context of the projct. This was a bad idea, because when I ran `ng new presentation`, it bootstrapped a whole angular project within my project directory, so I deleted everything, installed `ng` globally, and ran it again. I'm building an application that reads a markdown file and displays it as a presentation, like powerpoint or google slides.

Now, because I want to parse markdown, I decided to go with the [Markdown package, from ts-stack](https://github.com/ts-stack/markdown). Typically, npm packages are added to projects with `npm install`, but looking through the documentation for Angular CLI, I notice an `ng add` command which seems it would handle all the configuration for me. However, I get the following error:
```
Node.js version v21.4.0 detected.
Odd numbered Node.js versions will not enter LTS status and should not be used for production. For more information, please see https://nodejs.org/en/about/previous-releases/.
ℹ Using package manager: npm
✔ Found compatible package version: markdown-it@14.1.0.
✔ Package information loaded.

The package markdown-it@14.1.0 will be installed and executed.
Would you like to proceed? Yes
✔ Packages successfully installed.
Package "markdown-it" was found but does not support schematics.
```
Time to figure out what angular schematics are. [I found a great video by Brian Love and Kevin Schuchard on schematics](https://www.youtube.com/watch?v=phDaa6_eZsQ). I don't think schematics would be necessary at this time, so I will just use `npm install`. 

## Generate the component

Next, lets generate a component.
```
ng generate component components/markdown
```

It's a pretty straight forward command. I just want to mention, that I added the `components` directory to separate any components I may be using in this application into it's own directory. 

##Run the application

Let's also start the server, with `ng serve` so we can see the changes we make as we go. If you take a look at `package.json`, there is a `start` script that does the same thing, so you can also run `npm run start`. 

## What's up with the code?

Looking through the codebase, I see an `index.html` file. I open it and see a basic html structured document with a strange tag, `<app-root></app-root>`. There was a component in the bootstrapped application called `app`, so I look through the code in those files. In `src/app/app.component.ts` I found the reference to the weird tag. 

```
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
```

I decided to take a look at that `templateUrl` file. There is a whole lot of placeholder code. Beneath the placeholder code, I see a tag called `<router-outlet />`, which must be a reference to that `imports` array. At the top on the `ts` file I see the `RouterOutlet` imported. That must be another component. `import { RouterOutlet } from '@angular/router';` I remove all the template code an put `<h1>Hello World</h1>`.
Next step, set an import from my own `MarkdownComponent`. Nothing happened.
```
import { MarkdownComponent } from './components/markdown/markdown.component';

```

Here is the configuration of my component, which was generated. Let's add an `<app-markdown />` tag to the app component's html file. Hey, it worked!
```
@Component({
  selector: 'app-markdown',
  standalone: true,
  imports: [],
  templateUrl: './markdown.component.html',
  styleUrl: './markdown.component.scss'
})
```


##Start to write real code.

Now that I've got a feel for it, I will start to write functional code. First, I will use the markdown from the current state of the blog post as my test case. It is a markdown file I am writing in vim as I progress.

I will start with using a hardcoded filename, just to make things easy at the moment. I want to read a file from a browser application, so I need to install `@types/node`.

```
npm install @types/node
```

This gives me access to the `fs` library. Now, because I just want to read a single file into a string, I just need `readFileSync`.

```
import { readFileSync } from 'fs';
```
