FROM node:16-alpine AS reactBuilder
WORKDIR /ui
COPY /ui ./
RUN npm install 
RUN npm run build

FROM golang:1.20-alpine as gobuilder
WORKDIR /app
COPY . .
RUN go mod download
RUN go build -o goapp

FROM scratch
COPY --from=reactBuilder /ui/build/ /app/ui/build/
COPY --from=gobuilder /app/goapp /app/goapp
# Run the hello binary.
ENTRYPOINT ["/app/goapp"] 
