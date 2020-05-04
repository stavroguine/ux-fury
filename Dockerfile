FROM mhart/alpine-node:12

RUN mkdir -p /opt/ux-fury
WORKDIR /opt/ux-fury

COPY package.json /opt/ux-fury
COPY package-lock.json /opt/ux-fury

RUN yarn install

COPY . /opt/ux-fury

CMD ["yarn", "start"]