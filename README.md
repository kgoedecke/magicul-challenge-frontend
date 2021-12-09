<p align="center">

# Magic(ul) File Uploader!
<img src="https://media.discordapp.net/attachments/696316575619481602/918497808028418088/unknown.png?width=1362&height=684">

This application was part of a code challenge from [Magicul](www.xd2sketch.com). You can check out the challenge by clicking over [here](https://github.com/XD2Sketch/full-stack-coding-challenge).

This part of the challenge consist of the frontend application served by the [API](https://github.com/philipep-galdino/magicul-challenge) built for the same purpose - a file uploading application.


# Catalogue
  - [About the challenge](#about-the-challenge)
  - [About the techies](#about-the-techies)
  - [Project Gitflow](#the-project-gitflow)
  - [How to set up](#how-to-set-up)
  - [Final Conclusion](#final-conclusion)

# About the challenge

This File Uploader application was requested to demonstrate my skills developing an application across the entire [Magicul](www.xd2sketch.com)'s stack. This does includes frontend, backend and database knowledge.

The whole architecture has been split into two separate repositories, as requested. The frontend application communicates with the API using implemented RESTful Endpoints.

### About the techies

There was a required stack for this challenge - I went a little bit beyond it. The techies stack used for this project-challenge exactly was:

- NextJS with Typescript
- ContextAPI for State Management
- Jest for automated testing


You can also check out the [API stack](https://github.com/philipep-galdino/magicul-challenge#about-the-techies).

I had 0 knowledge with React Context before this challenge. Learned by doing it, as I mostly use Redux for scalable projects. The same goes for NextJS.

# The Project Gitflow

It was required to show off some Gitflow. As you can see here, we only use the same branch for updates and features. Our gitflow consists of commit standards in here, as:
- 'feat' for Feature addition
- 'update' for updates on already existing features
- 'fix' for fixes on already existing features

We also follow a pattern on writing commits, just as stating: 'Added bla-bla and Adjusted bla-bla' with keywords for what has been done within that commit.

# How to set up

To set up this project in your machine, you need to go through a few steps. As this projects basically uses an API to serve it's data and a database, you'd have to set up the backend first. Click [here](https://github.com/philipep-galdino/magicul-challenge#how-to-set-up) to learn how to set up the backend.

Check out for the `api.ts` file in the project's services directory for the API connection information. Set that up as you have set your API locally.

Once you get that done, clone this project and just follow these steps:

```
git clone https://github.com/philipep-galdino/magicul-challenge-frontend
```

```
yarn
```

```
yarn dev
```

# Final Conclusion

Firstly, I learned a lot doing this. Mostly in the frontend. It was quite a challenge, and I added more features than required by the challenge itself. I like to play along with my code, and as I fixed one bug, I'd have an idea and try to implement it as it would make the project look cool.

It consists of a user login feature that uses only the username and it's done completely by the frontend - yes, that shady, don't even think about security with this, lol - as it uses the username for requesting all the files uploaded by that user. The file is uploaded and attached to the user in the database, so it's pretty well organized.

By doing these, I leveled up my skills on the frontend, and amplified my portfolio as now I have most of the basic knowledge for NextJS and a quite good skill with ContextAPI for state management.
