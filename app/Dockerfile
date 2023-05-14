# Base image
FROM node:18

#간단한 환경변수 설정을 위해 저자의 이름을 추가하였습니다.
ARG AUTHOR_ARG
ENV AUTHOR=$AUTHOR_ARG

ENV TZ=Asia/Seoul

# Bundle APP files
WORKDIR /example-server

COPY . .

RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
RUN npm cache clean --force
# 앱의 무중단 운영 및 프로세스 관리를 위해 Node.js의 PM2 프로세스 매니저를 사용합니다.
RUN npm install -g pm2
RUN npm install -g dotenv-cli

# 앱의 의존성 패키지들을 설치합니다.
RUN npm install

# 프로덕션 빌드로 "dist" 폴더를 생성합니다.
RUN npm run build

# 앱의 리스닝 포트를 노출합니다.
EXPOSE 3000

# ecosystem.config.js 설정 파일을 통해 앱을 실행합니다.
CMD ["sh", "-c", "pm2-runtime start ecosystem.config.js --env production"]