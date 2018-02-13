## Install Docker (... on Windows Server 2016)

Install-Module DockerProvider -Force

Install-Package Docker -ProviderName DockerProvider -Force

## Test Installation

docker container run hello-world:nanoserver

## Build and run the Application with Docker for Linux containers


docker build -t voucherapp .

docker run -it --rm -p 8000:80 --name aspnetcore_sample aspnetapp