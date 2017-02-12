# Kargo Project

Hi Kargo.

To run this application, clone this repo and type..

```
node server.js
```

Or, if you want to run it in dev, type..

```
npm install
ng serve
```

.. and visit localhost:4200

[It's also online, so you can also check it out here](https://chadtech-kargo-project.surge.sh)

# How this was made

This is my first angular project, and my first typescript project. I had to look at at a bunch of different boilerplates and tutorials. I ended up using the boilerplate made by the angular CLI as the basis for this project.

# How this repo is organized

```
  src/
    index.html
    style.css
    main.ts

    app/
      router.ts
      service.ts
      service.util.ts
      app.module.ts

      main/
        app.html
        app.ts
      
      pages/
        post-detail/
          styles/
            ..
          views/
            ..
          main.ts
          main.util.ts
          ad-day-list-item.ts
      
        post-list/
          styles/
            ..
          views/
            ..
          main.ts
          post-list-item.ts
      
      types/
        post.ts
        ad-day.ts


  dist/

```


The instructions for this project invited me to explain this directory structure. Let me list out how I think about organization in these points..

**0** If there are pages to the application, make a directory for each page.

**1** If you have sub components that need to get rendered, organize them with the page they belong too. Only make a separate `Components` folder if there are many components that are used in multiple places. In my experience, most components, even if they're re-used, are rendered only in one place.

**2** Views and styles should be organized together, but if they can't its no big deal. It only becomes a priority in big projects, or when different pages will plausibly require similarly named styles.

**3** Have a types folder, or if types are highly specific to certain parts of the code, make a types file just for that part of the code.

**4** Name big ugly complicated computational stuff `util`, and put it in its own file. Most `util` files are associated with a specific part of the code, so don't make a general `util` file.

**5** Have a `src` folder for source files, a `dev` folder to develop from, and a `dist` folder. A dev process should compile `src` to `dev`, and a separate process for `src` to `dist` too.

**6** Name the top-most thing `App`. Don't repeat names like `post-detail/post-detail.ts`. If something is the main thing in it's directory, name it `main`. Name things by reference to what it is or what it does, and avoid naming things by reference to its data type.

**7** All files should be very short and one should not hesitate to break files into sub-modules.

Since I used the angular2 CLI, some of the organization of this project is just a consequence of how the angular CLI makes it's boilerplate. I did however, re-name and re-organize almost all of of what was originally in `src/app`.











