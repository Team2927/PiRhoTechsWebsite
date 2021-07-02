# PiRhoTechs

https://frc-events.firstinspires.org/team/2927

First Strong Hold(2016), https://www.thebluealliance.com/team/2927/2016
First Power Up(2018), https://www.thebluealliance.com/team/2927/2018
Destination: Deep Space(2019) https://www.thebluealliance.com/team/2927/2019

https://www.andymark.com/
https://www.andymark.com/pages/first-tech-challenge
https://www.andymark.com/pages/first-robotics-competition

## HOW TO START THIS PROJECT

### USER INSTRUCTIONS:

> $ Python3 Flask Run

- Build the image:

  `docker build -t flask-image .`

- Build the container:

  `docker run -p 5000:5000 --rm --name flask-container flask-image`

- Remove all images with names that contain `flask`

  `docker images -a | grep "flask" | awk '{print $3}' | xargs docker rmi`

- Remove all containers with names that contain `flask`

  `docker ps -a | grep "flask" | awk '{print $3}' | xargs docker rmi`

#### AUTHORS: Chris Barnes

<!--
https://github.com/pirhotechs
https://github.com/frcteam2927

https://github.com/brandyn
https://github.com/brbayes

TSTRELESKI@BETHELSD.ORG,
KTOUT@BETHELSD.ORG,
MYARKOSKY@BETHELSD.ORG,
kwoyak@bethelsd.org,
dmelvin@bethelsd.org,
SHICKS@BETHELSD.ORG,

mmolson@bethelsd.org,
DVOLLMER@BETHELSD.ORG,
SEJENSEN@BETHELSD.ORG,
EKURLE@BETHELSD.ORG,
TMCNAMARA@BETHELSD.ORG,


tstave@lwsd.org -->
