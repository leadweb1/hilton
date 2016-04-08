# Hilton (Angular KickStart App)

### Getting Started

Install **node.js**. Then **gulp** and **bower** if you haven't yet.

    $ npm -g install gulp bower

After that, cd into the project directory and run:

    $ npm install
    $ bower install
    $ gulp serve

You are now ready to go, your applcation is available at **http://127.0.0.1:3000**.

**Every file you add, edit or delete into the `/client` folder will be handled by the build system**.

When you are ready to build a production release there is a task for that:

    $ gulp serve:dist

This task will lint your code, optimize css js and images files, run unit tests. After the task has successfully finished, you can find an optimized version of your project inside the  `/build/dist` folder.