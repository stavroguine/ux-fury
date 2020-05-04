## UX-Fury

#Launch with :

docker build -t ux-fury .

docker run --name ux-fury -it -p 3000:3000 -v /opt/ux-fury/public:/opt/ux-fury/public -v /opt/ux-fury/src:/opt/ux-fury/src ux-fury