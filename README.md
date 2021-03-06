# Overview
EasyNGS provide a rich and interactive web application for NGS data processing. EasyNGS can process and browse remote big data from [OpenCGA](https://github.com/opencb/opencga) server such as Fastq, BAM and VCFs files. It can also display data from [CellBase](https://github.com/opencb/cellbase).

### Documentation
You can find EasyNGS documentation and tutorials at: https://github.com/opencb/easyngs/wiki.

### Issue Tracking
You can report bugs or request new features at [GitHub issue tracking](https://github.com/opencb/easyngs/issues).

### Release Notes and Roadmap
Releases notes are available at [GitHub releases](https://github.com/opencb/easyngs/releases).

Roadmap is available at [GitHub milestones](https://github.com/opencb/easyngs/milestones). You can report bugs or request new features at [GitHub issue tracking](https://github.com/opencb/easyngs/issues).

### Versioning
EasyNGS is versioned following the rules from [Semantic versioning](http://semver.org/).

### Maintainers
We recommend to contact EasyNGS developers by writing to OpenCB mailing list opencb@googlegroups.com. The main developers and maintainers are:
* Ana Conesa (aconesa@cipf.es)
* Ignacio Medina (im411@cam.ac.uk)
* Pedro Furio (pfurio@cipf.es)
* Nicolás Lucero (nicolas_lucero85@yahoo.es)

##### Contributing
EasyNGS is an open-source and collaborative project. We appreciate any help and feeback from users, you can contribute in many different ways such as simple bug reporting and feature request. Dependending on your skills you are more than welcome to develop client tools, new features or even fixing bugs.


# How to build 
EasyNGS is developed using Polymer and HTML5, therefore it is mainly developed in JavaScript and makes a heavy usage of HTML and CSS. It uses [Bower](http://bower.io/) as building tool. EasyNGS also requires of [OpenCB JSorolla](https://github.com/opencb/jsorolla) to be built, this is a JavaScript library developed for several OpenCB web-based projects, this can be found as Git submodule in EasyNGS.

Stable releases are merged and tagged at **_master_** branch, you are encourage to use latest stable release for production. Current active development is carried out at **_develop_** branch, only building is guaranteed and bugs are expected, use this branch for development or for testing new functionalities. The only dependency of EasyNGS from OpenCB is JSorolla. EasyNGS **_master_** branch depends on stable branches in JSorolla, while **_develop_** branch of EasyNGS depends on JSorolla **_develop_**.

### Prerequisites
The following technologies are needed to build EasyNGS: [Node.js](https://nodejs.org/), [npm](https://www.npmjs.com/) and [Bower](http://bower.io/).

##### Installing Node.js and npm
To install [Node.js](https://nodejs.org/) you can visit [this link](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager).

[npm](https://www.npmjs.com/) stands for _node packaged modules_ and it is the dependency manager of [Node.js](https://nodejs.org/).

##### Install Bower
After installing _Node.js_ and _npm_, we can install [Bower](http://bower.io/) by executing the following commands with root permission:

```bash
sudo npm install -g bower
```

### Cloning
EasyNGS is an open-source and free project, you can download **_develop_** branch by executing:

    $ git clone https://github.com/opencb/easyngs.git
    Cloning into 'easyngs'...
    remote: Counting objects: 2274, done.
    remote: Compressing objects: 100% (16/16), done.
    remote: Total 2274 (delta 5), reused 0 (delta 0), pack-reused 2256
    Receiving objects: 100% (2274/2274), 12.01 MiB | 678.00 KiB/s, done.
    Resolving deltas: 100% (952/952), done.

To fetch the latest stable release at **_master_** branch can be downloaded executing:

    $ git clone -b master https://github.com/opencb/easyngs.git
    Cloning into 'easyngs'...
    remote: Counting objects: 2274, done.
    remote: Compressing objects: 100% (16/16), done.
    Receiving objects:  13% (296/2274)   
    remote: Total 2274 (delta 5), reused 0 (delta 0), pack-reused 2256
    Receiving objects: 100% (2274/2274), 12.01 MiB | 507.00 KiB/s, done.
    Resolving deltas: 100% (952/952), done.

After this, in both cases, you **must** execute the following command to fetch the JSorolla submodule:

    git submodule update --init


### Build
After install _Node.js_ and _npm_ we have to install _npm_ packages for EasyNGS, from the the root folder execute:

```bash
npm install
```
This will make _npm_ to look at file [package.json](package.json) and install locally all the dependencies listed there.

To install all _Bower_ dependencies for EasyNGS execute from the root folder:

```bash
bower install
```
This will make _Bower_ to look at file [bower.json](bower.json) and install locally all the dependencies.

First, you must update JSorolla dependencies:
```bash
cd lib/jsorolla
npm install
bower install
```

Finally, to build EasyNGS execute:
```bash
npm run build
```

When completed, all compiled files will be located under the `build` folder.


### Testing
You can copy build content to a web server such as Apache HTTP Server and open your favourite internet browser to open EasyNGS. 


# Supporters
JetBrains is supporting this open source project with:

[![Intellij IDEA](https://www.jetbrains.com/idea/docs/logo_intellij_idea.png)]
(http://www.jetbrains.com/idea/)
