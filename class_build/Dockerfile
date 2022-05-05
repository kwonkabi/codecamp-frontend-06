# 미리 해놓고 저장해놓는 명령어들
# FROM, COPY, WORKDIR, RUN ...

# 우분투 컴퓨터 다운로드
# FROM ubuntu:20.04

FROM node:14

# 'class_build 안에서 커서 깜빡이게 하고 아래 명령들 실행시켜줘!'
WORKDIR /class_build/

# '현재 있는 거 다 복사해서 class_build라는 거 만들어서 넣어줘!'
# RUN mkdir class_build 굳이 따로 만들 필요 없음
COPY . /class_build/
RUN yarn install
RUN yarn build:ssr
# RUN yarn start

# RUN은 마음대로 쓸 수 있지만 CMD는 한 번만 쓸 수 있음
# CMD 미리 저장 안 됨
CMD yarn start