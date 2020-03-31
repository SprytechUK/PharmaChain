# PharmaChain
 Blockchain based supply chain 


1.0	Instruction to setup and execute Pharmachain Hyperledger Application
1.1	Installing pre-requisites
Ubuntu:
To run Hyperledger Composer and Hyperledger Fabric, we recommend you have at least 4Gb of memory. The following are prerequisites for installing the required development tools:
-	Operating Systems: Ubuntu Linux 14.04 / 16.04 LTS (both 64-bit), or Mac OS 10.12
-	Docker Engine: Version 17.03 or higher 
-	Docker-Compose: Version 1.8 or higher
-	Node: 8.9 or higher (note version 9 is not supported)
-	npm: v6.x
-	git: 2.9.x or higher
-	Python: 2.7.x
-	A code editor of your choice, we recommend VSCode.

1.	Download VMware
Go to https://www.vmware.com/products/workstation-player.html and download
		install the .exe file.
2.	Download Ubuntu
Go to https://ubuntu.com/download/desktop and download .iso file
3.	Run Ubuntu
-	Open vmware workstation player
-	Under create new virtual machine select installer disc image file
-	Browse to downloads and select ubuntu .iso file
-	Click next
-	Enter credentials to be used for ubuntu machine
-	Click next and install the machine.
**If installing Hyperledger Composer using Linux, be aware of the following advice:
-	Login as a normal user, rather than root.
-	Do not su to root.
-	When installing prerequisites, use curl, then unzip using sudo.
-	Run prereqs-ubuntu.sh as a normal user. It may prompt for root password as some of it's actions are required to be run as root.
-	Do not use npm with sudo or su to root to use it.
-	Avoid installing node globally as root.**	
4.	Install Curl
			$ sudo apt install curl
5.	Download pre-requisites
			$ curl -O https://hyperledger.github.io/composer/v0.19/prereqs-ubuntu.sh
			$ chmod u+x prereqs-ubuntu.sh
6.	Run Script (prereqs-ubuntu.sh)
			$ ./prereqs-ubuntu.sh

1.2	Installing the development environment
		Follow these instructions to obtain the Hyperledger Composer development tools (primarily used to create Business Networks) and stand up a Hyperledger Fabric (primarily used to run/deploy your Business Networks locally). Note that the Business Networks you create can also be deployed to Hyperledger Fabric runtimes in other environments e.g. on a cloud platform.
1.	Install the CLI tools
Note that you should not use su or sudo for the following npm commands.
$ npm install -g composer-cli@0.19 //(composer-cli Essential cli tool).
$ npm install -g composer-rest-server@0.19 //(For RESTful API).
$ npm install -g generator-hyperledger-composer@0.19 //(utility for generating assets).
$ npm install -g yo //(install yeoman for applications).
2.	Install Playground (to view and demonstrate business network).
$ npm install -g composer-playground@0.19
3.	Set Up IDE
Install VSCode from this URL: https://code.visualstudio.com/download.
Open VSCode, go to Extensions, then search for and install the Hyperledger Composer extension from the Marketplace.	
4.	Install Hyperledger Fabric
Start and enable Docker
$ sudo usermod -a -G docker $USER
$ sudo systemctl start docker
$ sudo systemctl enable docker
$ sudo chmod 666 /var/run/docker.sock
$ curl -sSL http://bit.ly/2ysbOFE | bash -s 1.4.0
5.	Make Directory of your choice
$ mkdir ~/pharmachain //(pharmachain-directory name). can be changed as required.
6.	Change directory to created one
$ cd pharmachain //
7.	Install fabric from GIT
$ curl -O https://raw.githubusercontent.com/hyperledger/composer-tools/master/packages/fabric-dev-servers/fabric-dev-servers.tar.gz 
tar -xvf fabric-dev-servers.tar.gz.
8.	Download Local Hyperledger Fabric runtime
$ export FABRIC_VERSION=hlfv11
$ ./downloadFabric.sh
9.	Start Fabric
$ ./startFabric.sh
10.	Generate peer admin card
$ ./createPeerAdminCard.sh

You can stop fabric using 
$ ./stopFabric.sh
Playground UI can be accessed using $composer-playground and then browsing to /localhost:8080/

1.3	Business network structure and angular UI
Make sure fabric is running and you have created peer admin card mentioned in steps 9 and 10 under installing development environment
1.	Extract bna file uploaded under source code into folder created in step 5 under installing development environment.
2.	Open pharmanet folder and find package.json
3.	Open package.json and update version: 0.3.1-deploy.1 on new version ( for instance 0.3.2-deploy.1)
4.	Open terminal and navigate to pharmanet folder 
$ cd pharmanet 
5.	Create .bna file
$ composer archive create -t dir -n .
6.	Deploy Business Network
Install Network
$ composer network install --card PeerAdmin@hlfv1 –archiveFile pharmanet@0.3.2-deploy.1.bna
7.	Start business Network
$ composer network start --networkName pharmanet --networkVersion 0.3.2-deploy.1 --networkAdmin admin --networkAdminEnrollSecret adminpw --card PeerAdmin@hlfv1 --file networkadmin.card
8.	Import the network administrator identity as a usable business network card
$ composer card import --file networkadmin.card
9.	Check if network is running properly
$ composer network ping --card admin@pharmanet
10.	Create angular UI application
$ yo hyperledger-composer:angular
when asked
? Do you want to connect to a running Business Network? Yes
? Project name: pharmaapp
? Description: tracking
? Author name: Dina
? Author email: dina.chiganbayeva@sprytech.uk
? License: Apache-2.0
? Name of the Business Network card: admin@pharmanet (as network card defined before)
? Do you want to generate a new REST API or connect to an existing REST API?  Generate new API
? REST server address: http://localhost
? REST server port: 3000
? Should namespaces be used in the generated REST API? Namespaces are not used
Application will be generated
11.	Replace all contents of pharmaapp folder created in step 10 under business network structure and angular UI with contents of pharmanet2 folder attached under source code.
12.	Navigate to angular project directory created in step 10 under business network structure and angular UI (pharmaapp)
$ cd pharmaaap
13.	Run Angular UI
$ npm install
$ npm start
Angular UI will run on  /localhost:4200/
REST API will run on /localhost:3000/
Note: In order to make changes in UI, it is necessary to install and use angular/cli version 1.0.1. (nodejs 8.4 version, npm 6 version)
	$ npm install -g @angular/cli@1.0.1	

